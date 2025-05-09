const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Temporary hardcoded values for testing
  const botToken = "7363935055:AAFK3EqtwgMr_ZceyYKZwLnjalU3_niS0Zs";
  const chatId = 1736296585;

  try {
    const { name } = JSON.parse(event.body);
    console.log("Received name:", name);

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: `🚀 ${name} used your calculator!`
        })
      }
    );

    const data = await response.json();
    console.log("Telegram response:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};