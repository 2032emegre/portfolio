import Link from "next/link";

export default function Reel() {
  return (
    <section id="reel" className="py-24 md:py-16 px-6 bg-white text-gray-dark">
      <div className="max-w-4xl mx-auto text-left">
        {/* セクションタイトル */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-normal">
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
        <div className="text-base md:text-lg leading-relaxed">
          <p className="mb-4">
            その他の作品については、以下よりご覧いただけます。
          </p>
          <Link
            href="/design"
            className="text-accent-red hover:underline transition-all duration-300 inline-flex items-center"
          >
            その他のデザイン作品はこちら →
          </Link>
        </div>
      </div>
    </section>
  );
}