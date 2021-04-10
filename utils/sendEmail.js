import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({ name, email, message }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalization: [
        {
          to: [
            {
              email: 'me@azumao.dev',
            },
          ],
          subject: 'Contact from azumao.dev',
        },
      ],
      from: {
        email,
        name,
      },
      content: [
        {
          type: 'text/html',
          value: message,
        },
      ],
    }),
  });
};

export { sendEmail };
