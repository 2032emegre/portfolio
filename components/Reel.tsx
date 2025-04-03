import Link from "next/link";

export default function Reel() {
  return (
    <section id="reel" className="pt-16 pb-24 px-6 bg-white text-gray-dark">
      <div className="max-w-4xl mx-auto px-6 text-left">
        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-accent-red">R</span>eel
        </h2>

        {/* 動画 */}
        <div className="w-full aspect-video rounded-md overflow-hidden mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_t600-CH8xA"
            title="Reel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Designへの誘導 */}
        <div className="text-sm md:text-base">
          <p className="mb-4">
            その他の作品については、以下よりご覧いただけます。
          </p>
          <Link
  href="/design"
            className="mt-6 inline-block text-accent-red underline underline-offset-4 hover:opacity-80 transition"
          >
            その他のデザイン作品はこちら →
          </Link>
        </div>
      </div>
    </section>
  );
}