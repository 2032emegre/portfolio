import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-gray-dark">
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          <span className="text-accent-red">A</span>bout
        </h2>

        {/* コンテンツ */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* 左：プロフィール画像 */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-light shrink-0">
            <Image
              src="/profile.png"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          {/* 右：自己紹介テキスト */}
          <div className="flex-1 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              AIを学びながら、心に残る体験をつくることを目指す駆け出しエンジニアです。
            </p>
            <p>
              前職ではモーションデザイナーとして、また非常勤講師として勤務。
              現在はAIを使用した開発を学習中です。
            </p>
            <p>
              将来的には「コーヒー × デザイン × テクノロジー」で、
              人の気持ちに寄り添うブランドやサービスを立ち上げたいと思っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}