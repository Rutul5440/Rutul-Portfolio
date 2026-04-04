type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

type BuiltEmailTemplate = {
  subject: string;
  previewText: string;
  html: string;
  text: string;
};

const BRAND = {
  name: 'Rutul Suthar',
  role: 'Full-Stack Developer',
  email: 'itxrutul@gmail.com',
  phone: '+91 88662 23865',
  location: 'Ahmedabad, Gujarat, India',
  website: 'https://rutul5440.github.io/Rutul-Portfolio/',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMessageHtml = (message: string) =>
  escapeHtml(message).replace(/\n/g, '<br />');

const formatMessageText = (message: string) => message.replace(/\r\n/g, '\n');

const infoCard = (label: string, value: string, accent = false) => `
  <td style="padding:0 8px 16px 8px;" valign="top">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="min-width:180px;background-color:${accent ? '#eefbf7' : '#f7f9fc'};border:1px solid ${accent ? '#bdecd9' : '#e5eaf1'};border-radius:18px;">
      <tr>
        <td style="padding:18px 18px 16px 18px;">
          <p style="margin:0 0 8px 0;font-size:11px;line-height:1.4;letter-spacing:0.12em;text-transform:uppercase;color:#6f7e90;font-weight:700;">
            ${escapeHtml(label)}
          </p>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#0f1726;font-weight:${accent ? '700' : '600'};">
            ${escapeHtml(value)}
          </p>
        </td>
      </tr>
    </table>
  </td>`;

const messagePanel = (label: string, message: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f7f9fc;border:1px solid #e5eaf1;border-radius:22px;">
    <tr>
      <td style="padding:24px;">
        <p style="margin:0 0 10px 0;font-size:11px;line-height:1.4;letter-spacing:0.12em;text-transform:uppercase;color:#6f7e90;font-weight:700;">
          ${escapeHtml(label)}
        </p>
        <p style="margin:0;font-size:16px;line-height:1.9;color:#213041;">
          ${formatMessageHtml(message)}
        </p>
      </td>
    </tr>
  </table>`;

const ctaButton = (href: string, label: string) => `
  <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 22px;border-radius:999px;background-color:#10263f;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">
    ${escapeHtml(label)}
  </a>`;

const buildShell = ({
  previewText,
  eyebrow,
  title,
  intro,
  contentBlock,
  footerNote,
}: {
  previewText: string;
  eyebrow: string;
  title: string;
  intro: string;
  contentBlock: string;
  footerNote: string;
}) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#edf2f7;font-family:Arial,Helvetica,sans-serif;color:#142033;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:32px 16px;background:linear-gradient(180deg,#eef3f8 0%,#e6edf5 100%);">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background-color:#ffffff;border:1px solid #dde5ee;border-radius:28px;overflow:hidden;box-shadow:0 22px 60px rgba(15,23,38,0.08);">
            <tr>
              <td style="padding:30px 30px 22px 30px;background:linear-gradient(180deg,#ffffff 0%,#f7fafc 100%);border-bottom:1px solid #e7edf4;">
                <div style="display:inline-block;padding:8px 14px;border-radius:999px;background-color:#eefbf7;border:1px solid #c7efdf;color:#17795d;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;">
                  ${escapeHtml(eyebrow)}
                </div>
                <h1 style="margin:18px 0 10px 0;font-size:32px;line-height:1.15;color:#0f1726;font-weight:800;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin:0;font-size:16px;line-height:1.8;color:#58677a;">
                  ${escapeHtml(intro)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;">
                ${contentBlock}
              </td>
            </tr>
            <tr>
              <td style="padding:0 30px 30px 30px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #e7edf4;padding-top:22px;">
                  <tr>
                    <td>
                      <p style="margin:0 0 6px 0;font-size:18px;font-weight:700;color:#0f1726;">
                        ${escapeHtml(BRAND.name)}
                      </p>
                      <p style="margin:0 0 14px 0;font-size:13px;color:#17795d;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">
                        ${escapeHtml(BRAND.role)}
                      </p>
                      <p style="margin:0 0 6px 0;font-size:13px;line-height:1.7;color:#58677a;">
                        ${escapeHtml(BRAND.email)} | ${escapeHtml(BRAND.phone)}
                      </p>
                      <p style="margin:0 0 14px 0;font-size:13px;line-height:1.7;color:#58677a;">
                        ${escapeHtml(BRAND.location)}
                      </p>
                      <p style="margin:0;font-size:12px;line-height:1.7;color:#7a8798;">
                        ${escapeHtml(footerNote)}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const buildOwnerEmailTemplate = ({
  name,
  email,
  message,
  submittedAt,
}: ContactEmailPayload): BuiltEmailTemplate => {
  const subject = `New portfolio inquiry from ${name}`;
  const previewText = `${name} sent a new portfolio message.`;

  const contentBlock = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="padding:0 0 12px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              ${infoCard('From', name)}
              ${infoCard('Reply To', email, true)}
            </tr>
            <tr>
              ${infoCard('Received', submittedAt)}
              ${infoCard('Source', 'Portfolio Contact Form')}
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0 0;">
          ${messagePanel('Message', message)}
        </td>
      </tr>
      <tr>
        <td style="padding-top:24px;">
          ${ctaButton(`mailto:${email}`, `Reply to ${name}`)}
        </td>
      </tr>
    </table>`;

  const html = buildShell({
    previewText,
    eyebrow: 'Portfolio Contact',
    title: 'New Message Received',
    intro: 'A new message has arrived through your portfolio contact form.',
    contentBlock,
    footerNote: 'This email was generated from your portfolio contact form.',
  });

  const text = [
    'New Message Received',
    '',
    `From: ${name}`,
    `Email: ${email}`,
    `Received: ${submittedAt}`,
    '',
    'Message:',
    formatMessageText(message),
    '',
    `Reply directly: ${email}`,
  ].join('\n');

  return { subject, previewText, html, text };
};

export const buildSenderConfirmationTemplate = ({
  name,
  email,
  message,
  submittedAt,
}: ContactEmailPayload): BuiltEmailTemplate => {
  const subject = 'Message received | Rutul Suthar Portfolio';
  const previewText = `Thanks ${name}, your message has been received successfully.`;

  const contentBlock = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="padding:0 0 18px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(180deg,#f9fbfd 0%,#f2f7fb 100%);border:1px solid #dfe8f0;border-radius:24px;">
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 10px 0;font-size:20px;line-height:1.5;color:#0f1726;font-weight:800;">
                  Your message is safely in my inbox.
                </p>
                <p style="margin:0;font-size:16px;line-height:1.8;color:#58677a;">
                  Thanks for reaching out, ${escapeHtml(name)}. I received your message and I will get back to you soon at <strong style="color:#0f1726;">${escapeHtml(email)}</strong>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 12px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              ${infoCard('Sent By', name)}
              ${infoCard('Sent To', email, true)}
            </tr>
            <tr>
              ${infoCard('Received On', submittedAt)}
              ${infoCard('Next Step', 'Personal reply soon')}
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0 0;">
          ${messagePanel('Your Message', message)}
        </td>
      </tr>
      <tr>
        <td style="padding-top:24px;">
          ${ctaButton(BRAND.website, 'Visit Portfolio')}
        </td>
      </tr>
    </table>`;

  const html = buildShell({
    previewText,
    eyebrow: 'Message Confirmed',
    title: 'Thank You For Reaching Out',
    intro: 'Your note has been received successfully. Thanks for reaching out through my portfolio.',
    contentBlock,
    footerNote: 'This is an automated confirmation from my portfolio contact form. I will reply personally soon.',
  });

  const text = [
    `Hi ${name},`,
    '',
    'Thank you for reaching out through my portfolio.',
    `I have received your message on ${submittedAt} and will reply to ${email} soon.`,
    '',
    'Your message:',
    formatMessageText(message),
    '',
    `Portfolio: ${BRAND.website}`,
    '',
    'Rutul Suthar',
    'Full-Stack Developer',
  ].join('\n');

  return { subject, previewText, html, text };
};
