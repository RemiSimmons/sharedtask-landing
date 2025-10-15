import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Add email to Resend Audience (if configured)
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email: email,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        });
        console.log('✅ Added to Resend Audience:', email);
      } catch (audienceError) {
        // Log error but don't fail the request
        console.error('Failed to add to audience:', audienceError);
      }
    }
    
    // Send notification email to admin
    await resend.emails.send({
      from: 'notify@sharedtask.ai',
      to: 'support@sharedtask.ai',
      subject: 'New Pro Launch Notification Signup',
      html: `
        <h2>New Pro Launch Notification</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up:</strong> ${new Date().toLocaleString()}</p>
        <hr />
        <p><em>This email has been automatically added to your Resend Audience list.</em></p>
      `
    });

    // Optionally send confirmation email to user
    await resend.emails.send({
      from: 'notify@sharedtask.ai',
      to: email,
      subject: "You're on the list for SharedTask Pro!",
      html: `
        <h2>Thanks for your interest in SharedTask Pro! 🎉</h2>
        <p>You'll be among the first to know when we launch Pro tier with advanced features like:</p>
        <ul>
          <li>10+ simultaneous projects</li>
          <li>Password protection</li>
          <li>Advanced analytics</li>
          <li>Team management</li>
        </ul>
        <p>We'll send you an email as soon as Pro is available, along with exclusive launch pricing.</p>
        <p>Thanks for being an early supporter!</p>
        <p>— The SharedTask Team</p>
        <hr />
        <p style="font-size: 12px; color: #666;">If you didn't sign up for this, you can safely ignore this email.</p>
      `
    });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Notify signup error:', error);
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}


