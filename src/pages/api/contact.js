// API route for handling contact form submissions
// Path: src/pages/api/contact.js

export default async function handler(req, res) {
  // Set CORS headers to allow requests from any origin
  // In production, you should restrict this to your frontend's domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic server-side validation
    // Check for presence and type of fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ success: false, error: 'Name is required and must be a non-empty string.' });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'A valid email is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ success: false, error: 'Message is required and must be a non-empty string.' });
    }

    // Further sanitize data if necessary before processing

    // At this point, the data is validated.
    // In a real-world application, you would integrate with an email service (e.g., SendGrid, Resend, Nodemailer)
    // or save the data to a database.
    // Example (conceptual):
    // try {
    //   await sendEmailService.send({
    //     to: process.env.CONTACT_FORM_RECEIVER_EMAIL, // Store sensitive info in env variables
    //     from: process.env.CONTACT_FORM_SENDER_EMAIL,
    //     subject: `New message from ${name} via hueneu.com`,
    //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    //   });
    //   return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    // } catch (error) {
    //   console.error('Failed to send email:', error);
    //   return res.status(500).json({ success: false, error: 'There was an issue sending your message. Please try again later.' });
    // }

    // For this MVP structure, we confirm receipt and validation.
    // The actual sending/storing mechanism is outside the scope of this file's current implementation phase
    // and would require further configuration (e.g., API keys for an email service, database setup).
    return res.status(200).json({ success: true, message: 'Your message has been received and validated.' });

  } else {
    // If the request method is not POST or OPTIONS, return Method Not Allowed
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
