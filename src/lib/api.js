// chatbot/src/lib/api.js
const API_BASE_URL = "http://localhost:8000";

export const sendMessageToRasa = async (message) => {
  const response = await fetch(`${API_BASE_URL}/api/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sender: "user", message }),
  });
  return await response.json();
};