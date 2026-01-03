"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信処理を追加
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます！");
    setFormData({ name: "", email: "", message: "" });
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
          お名前
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
          メールアドレス
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
          メッセージ
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
        className="w-full py-3 px-6 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-colors neon-border"
      >
        送信
      </button>
    </form>
  );
}

