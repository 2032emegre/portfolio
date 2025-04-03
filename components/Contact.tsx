import { Mail, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mldjpnda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        alert("送信ありがとうございます！");
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        alert("送信に失敗しました。");
        setStatus("error");
      }
    } catch (err) {
      alert("送信エラーが発生しました。");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white text-gray-dark">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-accent-red">C</span>ontact
        </h2>

        <p className="mb-6 text-base md:text-lg leading-relaxed">
          お問い合わせはこちらからお願いいたします。お返事まで数日いただく場合があります。
        </p>

        {/* フォーム */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <textarea
            placeholder="Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent-red text-white rounded-md hover:opacity-90 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "送信中..." : "送信"}
          </button>
        </form>

        {/* SNSリンク */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://x.com/mamepluslab" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-gray-dark hover:text-accent-red transition" />
          </a>
          <a href="https://github.com/2032emegre" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-dark hover:text-accent-red transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
