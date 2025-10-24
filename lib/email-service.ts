import sgMail from "@sendgrid/mail"
import { readFileSync } from "fs"
import { join } from "path"
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export interface EmailAttachment {
  content: string // base64 encoded file content
  filename: string
  type?: string // MIME type (optional, e.g., "application/pdf")
  disposition?: string // default: "attachment"
}

export interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
  replyTo?: string
  attachments?: EmailAttachment[]
}


export function getPdfAttachment(filename: string) {
  try {
    const filePath = join(process.cwd(), "public", filename)
    const fileContent = readFileSync(filePath)
    const base64Content = fileContent.toString("base64")

    return {
      content: base64Content,
      filename,
      type: "application/pdf",
      disposition: "attachment",
    }
  } catch (error) {
    console.error("[v0] Failed to read PDF file:", error)
    return null
  }
}


export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    let msg:any = {
      to: options.to,
      from: options.from || `Arevei <${process.env.SENDGRID_FROM_EMAIL!}>`,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo || process.env.SENDGRID_REPLY_TO,
    }

    if (options.attachments && options.attachments.length > 0) {
      msg.attachments = options.attachments.map((att) => ({
        content: att.content,
        filename: att.filename,
        type: att.type || "application/octet-stream",
        disposition: att.disposition || "attachment",
      }))
    }

    console.log("[SendGrid] Sending email to:", options.to)
    const response = await sgMail.send(msg)
    console.log("[SendGrid] Email sent successfully:", response[0].statusCode)
    return true
  } catch (error: any) {
    console.error("[SendGrid] Email sending failed:", error.response?.body || error)
    return false
  }
}

// Optional: Verify API key connectivity (SendGrid doesn’t have verify like SMTP)
export async function verifyEmailService(): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) throw new Error("Missing SENDGRID_API_KEY")
    await sgMail.send({
      to: process.env.SENDGRID_VERIFY_EMAIL || process.env.SENDGRID_FROM_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: "SendGrid Verification Test",
      html: "<p>This is a test email to verify SendGrid setup.</p>",
    })
    console.log("[SendGrid] Email service verified successfully")
    return true
  } catch (error) {
    console.error("[SendGrid] Email service verification failed:", error)
    return false
  }
}
