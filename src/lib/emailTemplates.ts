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
  email: 'itxrutul@gmaail.com',
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
  <body style="margin:0;padding:0;background-color:#050b17;font-family:Arial,Helvetica,sans-serif;color:#e6eef8;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:radial-gradient(circle at top,#0f223f 0%,#050b17 62%);padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;border:1px solid #1d304d;border-radius:28px;background-color:#071120;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.35);">
            <tr>
              <td style="padding:28px 28px 18px 28px;background:linear-gradient(135deg,#081427 0%,#0b1930 52%,#102340 100%);border-bottom:1px solid #183053;">
                <div style="display:inline-block;padding:8px 14px;border-radius:999px;background-color:#102645;border:1px solid #1f3f67;color:#6ff3cf;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;">
                  ${escapeHtml(eyebrow)}
                </div>
                <h1 style="margin:18px 0 10px 0;font-size:34px;line-height:1.15;color:#f8fbff;font-weight:800;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin:0;font-size:17px;line-height:1.7;color:#a6b6cb;">
                  ${escapeHtml(intro)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                ${contentBlock}
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 28px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #17304f;padding-top:22px;">
                  <tr>
                    <td>
                      <p style="margin:0 0 6px 0;font-size:20px;font-weight:700;color:#f8fbff;">
                        ${escapeHtml(BRAND.name)}
                      </p>
                      <p style="margin:0 0 14px 0;font-size:14px;color:#67e7c1;font-weight:700;">
                        ${escapeHtml(BRAND.role)}
                      </p>
                      <p style="margin:0 0 6px 0;font-size:13px;line-height:1.7;color:#9db0c7;">
                        ${escapeHtml(BRAND.email)} | ${escapeHtml(BRAND.phone)}
                      </p>
                      <p style="margin:0 0 14px 0;font-size:13px;line-height:1.7;color:#9db0c7;">
                        ${escapeHtml(BRAND.location)}
                      </p>
                      <p style="margin:0;font-size:12px;line-height:1.7;color:#7d90a8;">
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
        <td style="padding:0 0 20px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-spacing:0 12px;">
            <tr>
              <td style="padding:14px 18px;background-color:#0d1a2e;border:1px solid #17304f;border-radius:18px;">
                <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#7f95b1;font-weight:700;">From</p>
                <p style="margin:0;font-size:18px;color:#f8fbff;font-weight:700;">${escapeHtml(name)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 18px;background-color:#0d1a2e;border:1px solid #17304f;border-radius:18px;">
                <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#7f95b1;font-weight:700;">Reply To</p>
                <p style="margin:0;font-size:16px;color:#67e7c1;font-weight:700;">${escapeHtml(email)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 18px;background-color:#0d1a2e;border:1px solid #17304f;border-radius:18px;">
                <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#7f95b1;font-weight:700;">Received</p>
                <p style="margin:0;font-size:16px;color:#d8e5f5;font-weight:600;">${escapeHtml(submittedAt)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;background:linear-gradient(180deg,#0c1a30 0%,#0a1528 100%);border:1px solid #17304f;border-radius:24px;">
          <p style="margin:0 0 12px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#7f95b1;font-weight:700;">Message</p>
          <p style="margin:0;font-size:17px;line-height:1.9;color:#edf4ff;">${formatMessageHtml(message)}</p>
        </td>
      </tr>
      <tr>
        <td style="padding-top:22px;">
          <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:linear-gradient(135deg,#6ff3cf 0%,#42b7ff 100%);color:#05101e;font-size:14px;font-weight:800;text-decoration:none;">
            Reply to ${escapeHtml(name)}
          </a>
        </td>
      </tr>
    </table>`;

  const html = buildShell({
    previewText,
    eyebrow: 'Portfolio Contact',
    title: 'New Message Received',
    intro: 'A visitor just sent a message through your portfolio contact form.',
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
        <td style="padding:0 0 22px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:22px;background:linear-gradient(180deg,#0c1b31 0%,#091426 100%);border:1px solid #17304f;border-radius:24px;">
            <tr>
              <td>
                <p style="margin:0 0 10px 0;font-size:20px;line-height:1.5;color:#67e7c1;font-weight:800;">
                  Your message is safely in my inbox.
                </p>
                <p style="margin:0;font-size:16px;line-height:1.8;color:#dbe7f7;">
                  Thanks for reaching out, ${escapeHtml(name)}. I've received your message and I'll review it shortly before replying to <strong style="color:#f8fbff;">${escapeHtml(email)}</strong>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 22px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:22px;background-color:#0d1a2e;border:1px solid #17304f;border-radius:24px;">
            <tr>
              <td>
                <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#7f95b1;font-weight:700;">Message Summary</p>
                <p style="margin:0 0 14px 0;font-size:14px;color:#9db0c7;">Received on ${escapeHtml(submittedAt)}</p>
                <div style="padding:18px;background-color:#081323;border:1px solid #122844;border-radius:18px;">
                  <p style="margin:0;font-size:16px;line-height:1.8;color:#edf4ff;">${formatMessageHtml(message)}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <a href="${escapeHtml(BRAND.website)}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:linear-gradient(135deg,#6ff3cf 0%,#42b7ff 100%);color:#05101e;font-size:14px;font-weight:800;text-decoration:none;">
            Visit Portfolio
          </a>
        </td>
      </tr>
    </table>`;

  const html = buildShell({
    previewText,
    eyebrow: 'Message Confirmed',
    title: 'Thank You For Reaching Out',
    intro: 'Your note has been received successfully. I usually respond as quickly as possible after reviewing project details.',
    contentBlock,
    footerNote: 'This is an automated confirmation from the portfolio contact form. Please wait for the direct reply.',
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

