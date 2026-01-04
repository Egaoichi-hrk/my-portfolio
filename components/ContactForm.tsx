"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(
          data.error ??
            "送信できませんでした。時間をおいて再度お試しください。"
        );
        return;
      }

      alert("お問い合わせありがとうございます！");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("通信エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-green-400 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/50 border border-green-400 rounded focus:outline-none focus:neon-border text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-green-400 mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/50 border border-green-400 rounded focus:outline-none focus:neon-border text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-green-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 bg-black/50 border border-green-400 rounded focus:outline-none focus:neon-border text-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-6 font-bold rounded transition-colors neon-border
          ${
            loading
              ? "bg-gray-500 cursor-not-allowed text-black"
              : "bg-green-400 hover:bg-green-300 text-black"
          }
        `}
      >
        {loading ? "送信中..." : "送信"}
      </button>
    </form>
  );
}
