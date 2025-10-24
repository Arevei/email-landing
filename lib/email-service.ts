import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const msg = {
      to: options.to,
      from: options.from || `Arevei <${process.env.SENDGRID_FROM_EMAIL!}>`,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo || process.env.SENDGRID_REPLY_TO,
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
