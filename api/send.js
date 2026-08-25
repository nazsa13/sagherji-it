import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, propertyType, interest, message, formType } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const host = process.env.ZOHO_HOST || 'smtp.zoho.com';
  const port = parseInt(process.env.ZOHO_PORT || '465', 10);
  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  const to = process.env.TO_EMAIL || user || 'info@sagherji.com';

  if (!user || !pass) {
    return res.status(500).json({ error: 'Email not configured. Set ZOHO_USER and ZOHO_PASS env vars in Vercel.' });
  }

  const isConsultation = formType === 'consultation' || propertyType !== undefined;
  const subject = isConsultation
    ? `New Consultation - ${propertyType || 'General'} - ${name}`
    : interest ? `New Contact: ${interest} - ${name}` : `New Contact - ${name}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
      <div style="background:#1a4a73;color:#fff;padding:16px 20px">
        <h2 style="margin:0;font-size:18px">${isConsultation ? 'New Consultation Request' : 'New Contact Message'} - Sagherji IT</h2>
      </div>
      <div style="padding:20px;color:#0f172a;line-height:1.6">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${propertyType ? `<p><strong>Property Type:</strong> ${escapeHtml(propertyType)}</p>` : ''}
        ${interest ? `<p><strong>Interest:</strong> ${escapeHtml(interest)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:12px;border-radius:6px;white-space:pre-wrap">${escapeHtml(message)}</div>
        <p style="margin-top:16px;font-size:12px;color:#64748b">Sent from sagherji website</p>
      </div>
    </div>
  `;

  const text = `Name: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${propertyType ? `Property Type: ${propertyType}\n` : ''}${interest ? `Interest: ${interest}\n` : ''}\nMessage:\n${message}`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: `"Sagherji Website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Zoho send error:', err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
