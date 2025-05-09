const fetch = require('node-fetch'); // Only needed for Node <18

exports.handler = async (event) => {
  // Debug: Log incoming request
  console.log('Request received:', JSON.stringify(event));

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Only POST requests allowed' })
    };
  }

  try {
    // Parse request body
    const { name } = JSON.parse(event.body);
    if (!name) throw new Error('Name is required');

    // Get credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = Number(process.env.TELEGRAM_CHAT_ID); // Convert to number

    // Debug: Verify credentials (logs will appear in Netlify dashboard)
    console.log('Bot token:', botToken?.slice(0, 5) + '...'); // Partial log for security
    console.log('Chat ID:', chatId);

    if (!botToken || !chatId) {
      throw new Error('Missing Telegram credentials in environment variables');
    }

    // Prepare message
    const message = `📊 ${name} just used your macro calculator!`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Send to Telegram
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    const data = await response.json();
    console.log('Telegram response:', data);

    if (!response.ok) {
      throw new Error(`Telegram error: ${data.description || 'Unknown error'}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Notification sent!' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: error.message,
        tip: 'Check Netlify function logs for details'
      })
    };
  }
};