// Use modern ES modules syntax (Netlify now recommends this)
import fetch from 'node-fetch';

export const handler = async (event) => {
  // Temporary hardcoded values (replace with env vars later)
  const botToken = "7363935055:AAFK3EqtwgMr_ZceyYKZwLnjalU3_niS0Zs";
  const chatId = 1736296585;

  try {
    const { name } = JSON.parse(event.body);
    console.log("Processing request for:", name);

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `📊 ${name} used your macro calculator!`
      })
    });

    const data = await response.json();
    console.log("Telegram API response:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error("Full error details:", {
      message: error.message,
      stack: error.stack,
      event: event
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        details: "Check function logs"
      })
    };
  }
};