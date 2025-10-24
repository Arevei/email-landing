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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.22 102.27" width="160" height="40" style="display: block; margin: 0 auto;">
          <defs>
            <linearGradient id="linear-gradient" x1="0" y1="50.12" x2="86.45" y2="50.12" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#3fdcff"/>
              <stop offset="1" stop-color="#55ff8f"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="101.59" y1="64.67" x2="141.91" y2="64.67" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-3" x1="156.51" y1="66.09" x2="215.63" y2="66.09" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-4" x1="229.16" y1="66.56" x2="292.74" y2="66.56" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-5" x1="304.91" y1="66.09" x2="364.03" y2="66.09" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-6" x1="380.53" y1="50.66" x2="401.22" y2="50.66" xlink:href="#linear-gradient"/>
          </defs>
          <path fill="url(#linear-gradient)" d="M0,100.25v-.27c5.82-6.22,7.98-10.42,12.72-23.4L40.72,0h5.14l28.14,77.25c5.01,13.53,7.44,17.45,12.44,22.73v.27h-24.62v-.27c2.97-3.52,4.73-10.82.13-23.27l-21.78-59.93-20.56,56.55c-5.41,14.75-2.3,22.59,1.22,26.65v.27H0Z"/>
          <path fill="url(#linear-gradient-2)" d="M104.43,99.97c2.98-6.76,3.65-12.85,3.65-23.54v-25.16c0-7.31-3.11-11.5-6.49-14.34v-.27l16.5-7.57v17.18l.68.14c6.49-6.63,13.26-16.64,23.13-16.5l-.14,14.47-1.22.14c-2.3-.81-7.31-1.62-10.55-1.62-2.44,0-7.31,4.06-11.23,9.2v24.21c0,10.69.14,16.91,3.52,23.67v.27h-17.86v-.27Z"/>
          <path fill="url(#linear-gradient-3)" d="M213.47,83.06l2.16,1.49c-4.33,10.15-13.94,17.72-27.6,17.72-18.8,0-31.52-14.07-31.52-35.04,0-23,15.42-37.34,32.74-37.34s27.6,13.66,25.97,29.9h-47.35c-.14,1.08-.14,2.3-.14,3.52,0,18.13,9.06,29.63,25.16,29.63,7.98,0,15.56-2.84,20.56-9.87ZM168.42,55.19l35.17-.68v-1.22c0-12.72-5.41-18.4-14.74-18.4-10.55,0-18.26,7.71-20.43,20.29Z"/>
          <path fill="url(#linear-gradient-4)" d="M262.57,101.19h-3.38l-20.56-51.82c-3.92-9.87-5.55-13.8-9.47-17.04v-.4h21.65v.4c-3.65,2.98-3.79,8.93-.81,16.78l13.94,35.71,12.99-33.14c3.79-9.6,2.3-16.23-1.35-19.35v-.4h17.18v.4c-4.73,4.19-6.09,8.25-9.87,17.72l-20.29,51.14Z"/>
          <path fill="url(#linear-gradient-5)" d="M361.87,83.06l2.16,1.49c-4.33,10.15-13.94,17.72-27.6,17.72-18.8,0-31.52-14.07-31.52-35.04,0-23,15.42-37.34,32.74-37.34s27.6,13.66,25.97,29.9h-47.35c-.14,1.08-.14,2.3-.14,3.52,0,18.13,9.06,29.63,25.16,29.63,7.98,0,15.56-2.84,20.56-9.87ZM316.82,55.19l35.17-.68v-1.22c0-12.72-5.41-18.4-14.74-18.4-10.55,0-18.26,7.71-20.43,20.29Z"/>
          <path fill="url(#linear-gradient-6)" d="M383.37,99.97c2.57-6.76,3.65-12.99,3.65-23.54v-24.89c0-7.04-3.11-11.5-6.49-14.21v-.68l17.18-7.57v47.21c0,10.55.14,16.91,3.52,23.67v.27h-17.86v-.27ZM384.32,8.52c0-4.19,3.38-7.44,7.31-7.44,4.19,0,7.57,3.25,7.57,7.44s-3.38,7.31-7.57,7.31c-3.92,0-7.31-3.11-7.31-7.31Z"/>
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.22 102.27" width="160" height="40" style="display: block; margin: 0 auto;">
          <defs>
            <linearGradient id="linear-gradient" x1="0" y1="50.12" x2="86.45" y2="50.12" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#3fdcff"/>
              <stop offset="1" stop-color="#55ff8f"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="101.59" y1="64.67" x2="141.91" y2="64.67" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-3" x1="156.51" y1="66.09" x2="215.63" y2="66.09" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-4" x1="229.16" y1="66.56" x2="292.74" y2="66.56" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-5" x1="304.91" y1="66.09" x2="364.03" y2="66.09" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-6" x1="380.53" y1="50.66" x2="401.22" y2="50.66" xlink:href="#linear-gradient"/>
          </defs>
          <path fill="url(#linear-gradient)" d="M0,100.25v-.27c5.82-6.22,7.98-10.42,12.72-23.4L40.72,0h5.14l28.14,77.25c5.01,13.53,7.44,17.45,12.44,22.73v.27h-24.62v-.27c2.97-3.52,4.73-10.82.13-23.27l-21.78-59.93-20.56,56.55c-5.41,14.75-2.3,22.59,1.22,26.65v.27H0Z"/>
          <path fill="url(#linear-gradient-2)" d="M104.43,99.97c2.98-6.76,3.65-12.85,3.65-23.54v-25.16c0-7.31-3.11-11.5-6.49-14.34v-.27l16.5-7.57v17.18l.68.14c6.49-6.63,13.26-16.64,23.13-16.5l-.14,14.47-1.22.14c-2.3-.81-7.31-1.62-10.55-1.62-2.44,0-7.31,4.06-11.23,9.2v24.21c0,10.69.14,16.91,3.52,23.67v.27h-17.86v-.27Z"/>
          <path fill="url(#linear-gradient-3)" d="M213.47,83.06l2.16,1.49c-4.33,10.15-13.94,17.72-27.6,17.72-18.8,0-31.52-14.07-31.52-35.04,0-23,15.42-37.34,32.74-37.34s27.6,13.66,25.97,29.9h-47.35c-.14,1.08-.14,2.3-.14,3.52,0,18.13,9.06,29.63,25.16,29.63,7.98,0,15.56-2.84,20.56-9.87ZM168.42,55.19l35.17-.68v-1.22c0-12.72-5.41-18.4-14.74-18.4-10.55,0-18.26,7.71-20.43,20.29Z"/>
          <path fill="url(#linear-gradient-4)" d="M262.57,101.19h-3.38l-20.56-51.82c-3.92-9.87-5.55-13.8-9.47-17.04v-.4h21.65v.4c-3.65,2.98-3.79,8.93-.81,16.78l13.94,35.71,12.99-33.14c3.79-9.6,2.3-16.23-1.35-19.35v-.4h17.18v.4c-4.73,4.19-6.09,8.25-9.87,17.72l-20.29,51.14Z"/>
          <path fill="url(#linear-gradient-5)" d="M361.87,83.06l2.16,1.49c-4.33,10.15-13.94,17.72-27.6,17.72-18.8,0-31.52-14.07-31.52-35.04,0-23,15.42-37.34,32.74-37.34s27.6,13.66,25.97,29.9h-47.35c-.14,1.08-.14,2.3-.14,3.52,0,18.13,9.06,29.63,25.16,29.63,7.98,0,15.56-2.84,20.56-9.87ZM316.82,55.19l35.17-.68v-1.22c0-12.72-5.41-18.4-14.74-18.4-10.55,0-18.26,7.71-20.43,20.29Z"/>
          <path fill="url(#linear-gradient-6)" d="M383.37,99.97c2.57-6.76,3.65-12.99,3.65-23.54v-24.89c0-7.04-3.11-11.5-6.49-14.21v-.68l17.18-7.57v47.21c0,10.55.14,16.91,3.52,23.67v.27h-17.86v-.27ZM384.32,8.52c0-4.19,3.38-7.44,7.31-7.44,4.19,0,7.57,3.25,7.57,7.44s-3.38,7.31-7.57,7.31c-3.92,0-7.31-3.11-7.31-7.31Z"/>
        </svg>
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
