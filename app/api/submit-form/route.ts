import { type NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"
import { getAdminEmailTemplate, getUserEmailTemplate } from "@/lib/email-templates"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@mail.arevei.com"

const sheetMap: Record<string, string> = {
  booking: "BookingForm",
  contact: "ContactForm",
  order: "OrderForm",
}

function getSheetName(formType: string): string {
  return sheetMap[formType] || "Submissions"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...formDataWithoutType } = body

    if (!formType) {
      return NextResponse.json({ error: "Form type is required" }, { status: 400 })
    }

    let email = ""
    let name = ""

    if (formType === "contact") {
      const { name: contactName, email: contactEmail, company, message } = body
      if (!contactName || !contactEmail || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
      email = contactEmail
      name = contactName
    } else if (formType === "order") {
      const { firstName, lastName, email: orderEmail, phone, businessType, revenue } = body
      if (!firstName || !lastName || !orderEmail || !phone || !businessType || !revenue) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
      email = orderEmail
      name = `${firstName} ${lastName}`
    } else if (formType === "booking") {
      const { name: bookingName, email: bookingEmail } = body
      if (!bookingName || !bookingEmail) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
      email = bookingEmail
      name = bookingName
    }

    const sheetName = getSheetName(formType)
    const timestamp = new Date().toISOString()

    const dataToSubmit = {
      ...formDataWithoutType,
      timestamp,
    }

    const sheetdbResponse = await fetch(process.env.SHEETDB_API_URL||"", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: dataToSubmit,
        sheet: sheetName,
      }),
    })

    if (!sheetdbResponse.ok) {
      console.error("SheetDB error:", await sheetdbResponse.text())
      return NextResponse.json({ error: "Failed to save to database" }, { status: 500 })
    }

    const adminEmailHtml = getAdminEmailTemplate(formType, body)
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New ${formType} Submission from ${name}`,
      html: adminEmailHtml,
    })

    const downloadUrl =
      formType === "order"
        ? `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/download-guide`
        : undefined
    const userEmailHtml = getUserEmailTemplate(formType, name, downloadUrl)
    await sendEmail({
      to: email,
      subject: formType === "order" ? "Your Exclusive Guide is Ready!" : "We received your submission",
      html: userEmailHtml,
    })

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
