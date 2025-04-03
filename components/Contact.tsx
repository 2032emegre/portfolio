import { Mail, Github, Twitter } from "lucide-react";

export default function Contact() {
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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email address *"
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <textarea
            placeholder="Message *"
            rows={5}
            className="w-full border border-gray-light rounded-md px-4 py-2"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent-red text-white rounded-md hover:opacity-90 transition"
          >
            送信
          </button>
        </form>

        {/* SNSリンク */}
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