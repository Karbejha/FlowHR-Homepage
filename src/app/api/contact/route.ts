import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not configured')
  }
  return new Resend(apiKey)
}

export async function POST(req: NextRequest) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 503 }
      )
    }

    const { name, surname, email } = await req.json()

    // Validate required fields
    if (!name || !surname || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Initialize Resend client
    const resend = getResendClient()

    // Send notification email to admin
    console.log('Attempting to send admin email to: mohamad.karbejha@gmail.com')
    const adminEmailResult = await resend.emails.send({
      from: 'FlowHR Contact Form <noreply@karbejha.site>',
      to: ['mohamad.karbejha@gmail.com'],
      subject: 'New FlowHR Contact Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4f46e5; margin-bottom: 20px; text-align: center;">
              📧 New Contact Request - FlowHR
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name} ${surname}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #065f46;">
                <strong>Action Required:</strong> Please contact this person within 24 hours as promised on the website.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `
    })

    console.log('Admin email result:', {
      success: !adminEmailResult.error,
      emailId: adminEmailResult.data?.id,
      error: adminEmailResult.error
    })

    // Send confirmation email to user
    console.log('Attempting to send user confirmation email to:', email)
    const userEmailResult = await resend.emails.send({
        from: 'FlowHR Team <noreply@karbejha.site>',
        to: [email],
        subject: '✅ We received your FlowHR request!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #4f46e5; margin-bottom: 10px;">FlowHR</h1>
              <h2 style="color: #374151; margin: 0;">Thank you for your interest!</h2>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="color: #0369a1; margin-top: 0;">✅ Request Confirmed</h3>
              <p style="color: #374151; margin-bottom: 0;">
                Hi ${name},<br><br>
                We've successfully received your request to get started with FlowHR!
              </p>
            </div>
            
            <div style="margin: 25px 0;">
              <h3 style="color: #374151;">What happens next?</h3>
              <ul style="color: #6b7280; line-height: 1.6;">
                <li>Our team will review your request</li>
                <li><strong>We'll contact you within 24 hours</strong> to discuss your HR needs</li>
                <li>We'll help you set up your FlowHR account and get started</li>
                <li>You'll get access to your 14-day free trial</li>
              </ul>
            </div>
            
            <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #065f46;">
                <strong>Quick Response Promise:</strong> We typically respond within 2-4 hours during business hours!
              </p>
            </div>
            
            <div style="margin: 25px 0;">
              <h3 style="color: #374151;">While you wait...</h3>
              <p style="color: #6b7280; line-height: 1.6;">
                Feel free to explore our <a href="https://flowhr.karbejha.site/#features" style="color: #4f46e5;">features</a> 
                or check out our <a href="https://flowhr.karbejha.site/#pricing" style="color: #4f46e5;">pricing plans</a> 
                to see what FlowHR can do for your business.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                Questions? Reply to this email or contact us at info@karbejha.site
              </p>
            </div>
          </div>
        </div>
      `
    })

    console.log('User email result:', {
      success: !userEmailResult.error,
      emailId: userEmailResult.data?.id,
      error: userEmailResult.error
    })

    // Check if admin email was sent successfully (user email is optional for now)
    if (adminEmailResult.error) {
      console.error('Email sending error:', {
        adminError: adminEmailResult.error,
        userError: userEmailResult.error
      })
      return NextResponse.json(
        { error: 'Failed to send admin notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Contact request submitted successfully',
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id,
      userEmailSent: !userEmailResult.error
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
