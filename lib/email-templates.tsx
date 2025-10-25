export function getAdminEmailTemplate(formType: string, data: Record<string, any>): string {
  const primaryColor = "#00d4ff"
  const secondaryColor = "#0099ff"

  let formContent = ""

  if (formType === "contact") {
    const { name, email, company, message } = data
    formContent = `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Name:</strong> ${name}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: ${primaryColor};">${email}</a>
        </td>
      </tr>
      ${
        company
          ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Company:</strong> ${company}
        </td>
      </tr>`
          : ""
      }
      <tr>
        <td style="padding: 12px 0;">
          <strong style="color: #1f2937;">Message:</strong><br/>
          <p style="color: #4b5563; margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
        </td>
      </tr>
    `
  } else if (formType === "order") {
    const { firstName, lastName, email, phone, businessType, revenue, transactionalConsent, marketingConsent } = data
    formContent = `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Name:</strong> ${firstName} ${lastName}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: ${primaryColor};">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Phone:</strong> ${phone}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Business Type:</strong> ${businessType}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Revenue:</strong> ${revenue}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Transactional Consent:</strong> ${transactionalConsent ? "✓ Yes" : "✗ No"}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0;">
          <strong style="color: #1f2937;">Marketing Consent:</strong> ${marketingConsent ? "✓ Yes" : "✗ No"}
        </td>
      </tr>
    `
  } else if (formType === "booking") {
    const { name, email, date, time, message } = data
    formContent = `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Name:</strong> ${name}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: ${primaryColor};">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Date:</strong> ${date}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #1f2937;">Time:</strong> ${time}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0;">
          <strong style="color: #1f2937;">Message:</strong><br/>
          <p style="color: #4b5563; margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
        </td>
      </tr>
    `
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Logo Header -->
          <div style="background: #000000; padding: 30px 20px; text-align: center;">
            <img src="https://email.arevei.com/Arevei.png" alt="Arevei Logo" width="150" style="display: block; margin: 0 auto; max-width: 150px; height: auto;" />
          </div>

          <!-- Content Header -->
          <div style="background: linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Submission</h1>
          </div>

          <!-- Content -->
          <div style="padding: 40px 20px;">
            <p style="color: #4b5563; margin-bottom: 24px;">You have received a new submission from your website.</p>

            <table style="width: 100%; border-collapse: collapse;">
              ${formContent}
            </table>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This is an automated message from your website. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

export function getUserEmailTemplate(formType: string, name: string, hasAttachment = false): string {
  const primaryColor = "#00d4ff"
  const secondaryColor = "#0099ff"

  let subject = ""
  let mainContent = ""

  if (formType === "contact") {
    subject = "We received your message"
    mainContent = `
      <p style="color: #4b5563; margin-bottom: 16px;">Thank you for reaching out to us! We've received your message and will get back to you as soon as possible.</p>
      <p style="color: #4b5563; margin-bottom: 16px;">Our team typically responds within 24-48 hours during business days.</p>
    `
  } else if (formType === "order") {
    subject = "Your Exclusive Guide is Ready!"
    mainContent = `
      <p style="color: #4b5563; margin-bottom: 16px;">Thank you for your interest! We're excited to share <strong>"The Ultimate Cold Email Marketing Guide"</strong> with you.</p>
      <p style="color: #4b5563; margin-bottom: 24px;">This comprehensive 20-page guide includes everything you need to know about cold email marketing, from technical setup to conversion best practices.</p>
      ${
        hasAttachment
          ? `
        <div style="background: #f0f9ff; border-left: 4px solid ${primaryColor}; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
          <p style="color: #0c4a6e; margin: 0; font-weight: 500;">📎 Your guide is attached to this email</p>
          <p style="color: #0c4a6e; margin: 8px 0 0 0; font-size: 14px;">You can download it directly from your email or save it for later.</p>
        </div>
      `
          : ""
      }
      <p style="color: #4b5563; margin-bottom: 16px;">Inside you'll find:</p>
      <ul style="color: #4b5563; margin-bottom: 24px; padding-left: 20px;">
        <li>Domain & Technical Setup (Detailed)</li>
        <li>Inbox Warm-Up: Step-by-step Plan</li>
        <li>Building High-Quality Lists</li>
        <li>Email Copywriting: Templates & Frameworks</li>
        <li>Follow-Up Sequences (Examples)</li>
        <li>Bulk Sending Strategy (Scaling Safely)</li>
        <li>Metrics, Dashboards & What to Track</li>
        <li>Conversion Playbook: From Reply to Deal</li>
        <li>A/B Testing Roadmap</li>
        <li>Compliance & Deliverability Hygiene</li>
      </ul>
    `
  } else if (formType === "booking") {
    subject = "Booking Confirmation"
    mainContent = `
      <p style="color: #4b5563; margin-bottom: 16px;">Thank you for booking a call with us! We've received your booking request and will confirm your appointment shortly.</p>
      <p style="color: #4b5563; margin-bottom: 16px;">You should receive a calendar invite within the next few minutes.</p>
    `
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Logo Header -->
          <div style="background: #000000; padding: 30px 20px; text-align: center;">
            <img src="https://email.arevei.com/Arevei.png" alt="Arevei Logo" width="150" style="display: block; margin: 0 auto; max-width: 150px; height: auto;" />
          </div>

          <!-- Content Header -->
          <div style="background: linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>

          <!-- Content -->
          <div style="padding: 40px 20px;">
            ${mainContent}

            

            <div style="margin-top: 32px; padding: 24px; background: #f9fafb; border-radius: 8px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Have questions? Reply to this email and we'll be happy to help.
              </p>
            </div>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
                © 2025 Arevei | www.arevei.com
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}
