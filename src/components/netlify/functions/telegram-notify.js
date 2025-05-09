const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Debug: Full request log
  console.log("Incoming request body:", event.body);
  
  try {
    // Parse the incoming data
    const { name } = JSON.parse(event.body);
    if (!name) throw new Error("Name is required");

    // Get credentials from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = Number(process.env.TELEGRAM_CHAT_ID); // Must be number!
    
    // Debug: Verify credentials (partial token for security)
    console.log("Using Token:", botToken?.slice(0, 5) + "...");
    console.log("Using Chat ID:", chatId);

    const message = `📊 ${name} used your macro calculator!`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Debug: Final request details
    console.log("Sending to Telegram:", url);
    console.log("Message content:", message);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });

    const data = await response.json();
    console.log("Telegram API response:", data);

    if (!response.ok) {
      throw new Error(data.description || "Telegram API error");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    // Detailed error logging
    console.error("FULL ERROR:", {
      message: error.message,
      stack: error.stack,
      receivedEvent: event
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        details: "Check Netlify function logs"
      })
    };
  }
};