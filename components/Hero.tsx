import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-24 md:py-16 px-6 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* ロゴ：左側 */}
        <div className="w-28 md:w-32 shrink-0">
          <Image
            src="/logo_base.svg"
            alt="Mizoguchi Logo"
            width={140}
            height={140}
            className="h-auto w-full"
          />
        </div>

        {/* テキスト：右側 */}
        <div className="text-center md:text-left text-gray-dark">
          <h1 className="text-2xl md:text-3xl font-bold text-accent-red mb-4">
            MIZOGUCHI YUSUKE
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            AIとコーヒーとデザイン。<br />
            心が動く"なにか"をつくるために、日々挑戦中です。
          </p>
        </div>
      </div>
    </section>
  );
}