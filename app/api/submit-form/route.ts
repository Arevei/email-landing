import { type NextRequest, NextResponse } from "next/server"

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/syojj970dm028"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com"

async function sendEmail(to: string, subject: string, html: string) {
  try {
    // For now, logging the email. Replace with actual email service in production
    console.log(`[Email] To: ${to}`)
    console.log(`[Email] Subject: ${subject}`)
    console.log(`[Email] Body: ${html}`)
    return true
  } catch (error) {
    console.error("Email error:", error)
    return false
  }
}

function getSheetName(formType: string): string {
  const sheetMap: Record<string, string> = {
    booking: "BookingForm",
    contact: "ContactForm",
    order: "OrderForm",
  }
  return sheetMap[formType] || "Submissions"
}

function getAdminEmailTemplate(formType: string, data: any): string {
  const formTypeLabel = formType.charAt(0).toUpperCase() + formType.slice(1)

  let content = `
    <h2>New ${formTypeLabel} Submission</h2>
    <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    <hr>
  `

  if (formType === "contact") {
    content += `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${(data.message || "").replace(/\n/g, "<br>")}</p>
    `
  } else if (formType === "order") {
    content += `
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Business Type:</strong> ${data.businessType}</p>
      <p><strong>Monthly Revenue:</strong> ${data.revenue}</p>
      <p><strong>Transactional Consent:</strong> ${data.transactionalConsent ? "Yes" : "No"}</p>
      <p><strong>Marketing Consent:</strong> ${data.marketingConsent ? "Yes" : "No"}</p>
    `
  } else if (formType === "booking") {
    content += `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.message ? `<p><strong>Message:</strong></p><p>${(data.message || "").replace(/\n/g, "<br>")}</p>` : ""}
    `
  }

  return content
}

function getUserEmailTemplate(formType: string, userName: string): string {
  const formTypeLabel = formType.charAt(0).toUpperCase() + formType.slice(1)
  return `
    <h2>Thank You for Your ${formTypeLabel}!</h2>
    <p>Hi ${userName},</p>
    <p>We have received your ${formType} submission and will get back to you soon.</p>
    <p>Best regards,<br>Our Team</p>
  `
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

    const sheetdbResponse = await fetch(SHEETDB_API_URL, {
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

    // const adminEmailHtml = getAdminEmailTemplate(formType, body)
    // await sendEmail(ADMIN_EMAIL, `New ${formType} Submission from ${name}`, adminEmailHtml)

    // const userEmailHtml = getUserEmailTemplate(formType, name)
    // await sendEmail(email, "We received your submission", userEmailHtml)

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.log("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
