export function getAdminEmailTemplate(formType: string, data: any): string {
  const primaryColor = "#00d4ff"
  const secondaryColor = "#0099ff"

  let content = ""

  if (formType === "contact") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Received on ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Contact Information</p>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; border-left: 4px solid ${primaryColor};">
              <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Name:</strong> <span style="color: #4b5563;">${data.name}</span></p>
              <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Email:</strong> <span style="color: #4b5563;"><a href="mailto:${data.email}" style="color: ${primaryColor}; text-decoration: none;">${data.email}</a></span></p>
              ${data.company ? `<p style="margin: 0;"><strong style="color: #1f2937;">Company:</strong> <span style="color: #4b5563;">${data.company}</span></p>` : ""}
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Message</p>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid ${secondaryColor};">
              <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${(data.message || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
            </div>
          </div>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This is an automated message from your contact form system.</p>
        </div>
      </div>
    `
  } else if (formType === "order") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Order Form Submission</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Received on ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Personal Information</p>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; border-left: 4px solid ${primaryColor};">
              <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Name:</strong> <span style="color: #4b5563;">${data.firstName} ${data.lastName}</span></p>
              <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Email:</strong> <span style="color: #4b5563;"><a href="mailto:${data.email}" style="color: ${primaryColor}; text-decoration: none;">${data.email}</a></span></p>
              <p style="margin: 0;"><strong style="color: #1f2937;">Phone:</strong> <span style="color: #4b5563;">${data.phone}</span></p>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Business Details</p>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; border-left: 4px solid ${secondaryColor};">
              <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Business Type:</strong> <span style="color: #4b5563;">${data.businessType}</span></p>
              <p style="margin: 0;"><strong style="color: #1f2937;">Monthly Revenue:</strong> <span style="color: #4b5563;">${data.revenue}</span></p>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Consent</p>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
              <p style="margin: 0 0 8px 0;"><strong style="color: #1f2937;">Transactional Emails:</strong> <span style="color: #4b5563; background-color: ${data.transactionalConsent ? "#d1fae5" : "#fee2e2"}; padding: 2px 8px; border-radius: 4px;">${data.transactionalConsent ? "✓ Agreed" : "✗ Not Agreed"}</span></p>
              <p style="margin: 0;"><strong style="color: #1f2937;">Marketing Emails:</strong> <span style="color: #4b5563; background-color: ${data.marketingConsent ? "#d1fae5" : "#fee2e2"}; padding: 2px 8px; border-radius: 4px;">${data.marketingConsent ? "✓ Agreed" : "✗ Not Agreed"}</span></p>
            </div>
          </div>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This is an automated message from your order form system.</p>
        </div>
      </div>
    `
  } else if (formType === "booking") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Booking Request</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Received on ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; border-left: 4px solid ${primaryColor};">
            <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Name:</strong> <span style="color: #4b5563;">${data.name}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #1f2937;">Email:</strong> <span style="color: #4b5563;"><a href="mailto:${data.email}" style="color: ${primaryColor}; text-decoration: none;">${data.email}</a></span></p>
            <p style="margin: 0;"><strong style="color: #1f2937;">Phone:</strong> <span style="color: #4b5563;">${data.phone}</span></p>
            ${data.message ? `<p style="margin: 12px 0 0 0;"><strong style="color: #1f2937;">Message:</strong></p><p style="margin: 8px 0 0 0; color: #4b5563; white-space: pre-wrap;">${(data.message || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>` : ""}
          </div>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This is an automated message from your booking system.</p>
        </div>
      </div>
    `
  }

  return content
}

export function getUserEmailTemplate(formType: string, userName: string, downloadUrl?: string): string {
  const primaryColor = "#00d4ff"

  let content = ""

  if (formType === "contact") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Thank You for Reaching Out!</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">We've received your message</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <p style="margin: 0 0 24px 0; font-size: 16px; color: #1f2937;">Hi <strong>${userName}</strong>,</p>
          
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            Thank you for contacting us! We've received your message and appreciate you taking the time to reach out.
          </p>
          
          <p style="margin: 0 0 24px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            Our team will review your inquiry and get back to you as soon as possible. If your matter is urgent, please don't hesitate to reach out directly.
          </p>

          <div style="background-color: #f0f9ff; border-left: 4px solid ${primaryColor}; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #0c4a6e;"><strong>What's next?</strong> We typically respond within 24 hours during business days.</p>
          </div>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">© 2025 Arevei. All rights reserved.</p>
        </div>
      </div>
    `
  } else if (formType === "order") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Welcome Aboard!</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Your exclusive guide is ready</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <p style="margin: 0 0 24px 0; font-size: 16px; color: #1f2937;">Hi <strong>${userName}</strong>,</p>
          
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            Thank you for your interest! We're excited to have you on board. Your exclusive guide is ready to download.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${downloadUrl}" style="display: inline-block; background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); color: white; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; transition: transform 0.2s;">
              Download Your Guide Now
            </a>
          </div>

          <p style="margin: 24px 0 16px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            This comprehensive guide includes everything you need to know about cold email marketing, from technical setup to conversion strategies.
          </p>

          <div style="background-color: #f0f9ff; border-left: 4px solid ${primaryColor}; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #0c4a6e;"><strong>Pro Tip:</strong> Save this email for future reference. You can always download the guide again using the link above.</p>
          </div>

          <p style="margin: 0 0 8px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            If you have any questions or need support, feel free to reach out to our team.
          </p>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">© 2025 Arevei. All rights reserved.</p>
        </div>
      </div>
    `
  } else if (formType === "booking") {
    content = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
        <div style="background: linear-gradient(90deg, hsl(171 100% 50%) 0%, hsl(199 100% 50%) 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Booking Confirmed!</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">We look forward to speaking with you</p>
        </div>
        
        <div style="padding: 40px 20px; background-color: white;">
          <p style="margin: 0 0 24px 0; font-size: 16px; color: #1f2937;">Hi <strong>${userName}</strong>,</p>
          
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            Thank you for booking a call with us! We've received your booking request and will send you a calendar invite shortly.
          </p>
          
          <p style="margin: 0 0 24px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
            Our team is looking forward to connecting with you and discussing how we can help your business grow.
          </p>

          <div style="background-color: #f0f9ff; border-left: 4px solid ${primaryColor}; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #0c4a6e;"><strong>What to expect:</strong> A calendar invite will arrive in your inbox within the next few minutes.</p>
          </div>
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">© 2025 Arevei. All rights reserved.</p>
        </div>
      </div>
    `
  }

  return content
}
