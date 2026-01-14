import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Mailgun credentials are configured
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error('Mailgun credentials not configured');
      // For development, log the message instead of sending
      console.log('Contact form submission:', { name, email, phone, subject, message });
      return NextResponse.json(
        { message: 'Message received (development mode - Mailgun not configured)' },
        { status: 200 }
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: MAILGUN_API_KEY,
    });

    // Prepare email content
    const emailContent = `
      New Contact Form Submission

      From: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Subject: ${subject}

      Message:
      ${message}
    `;

    // Send email via Mailgun
    await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Contact Form <noreply@${MAILGUN_DOMAIN}>`,
      to: ['info@como-foreign-exchange.com'],
      subject: `Contact Form: ${subject}`,
      text: emailContent,
      'h:Reply-To': email,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
