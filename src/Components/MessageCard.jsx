import { useEffect, useState } from "react";
import axios from "axios";

export default function MessageCard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); // token of admin

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/message", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

  if (loading) return <p className="text-center mt-10">Loading messages...</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center ">User messages</h1>

      {messages.length === 0 ? (
        <p className="text-center text-gray-600">No messages yet.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white shadow rounded p-4">
              <p className="font-semibold">{msg.name} ({msg.email})</p>
              <p className="text-gray-700 mt-2">{msg.message}</p>
              <p className="text-gray-400 text-sm mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
