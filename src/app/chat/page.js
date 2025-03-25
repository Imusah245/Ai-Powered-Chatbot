"use client"; // Must be at the top of any client component

import { useState } from "react";
import { sendMessageToRasa } from "@/lib/api";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botReply = await sendMessageToRasa(message);
    setResponse(botReply[0]?.text || "No response");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-1"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
      {response && <p className="p-4 bg-gray-100 rounded">Bot: {response}</p>}
    </div>
  );
}