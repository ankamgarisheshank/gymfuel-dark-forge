export const handler = async (event) => {
  try {
    const { name } = JSON.parse(event.body);
    const botToken = "7363935055:AAFK3EqtwgMr_ZceyYKZwLnjalU3_niS0Zs";
    const chatId = 1736296585;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `📊 ${name} used your macro calculator!`
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify(await response.json())
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};