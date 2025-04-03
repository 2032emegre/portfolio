import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";





export default function DesignPage() {      
  const [showDetails, setShowDetails] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const works = [
    {
      title: "AdobeMax2025のチャレンジ作品",
      videoUrl: "https://www.youtube.com/embed/xf_GN2o-GFc",
      description: "create magicがテーマということで、マジックの要素とクリエイターがドキドキワクワクし何かを作り出す様子を表現。",
      screenshots: ["adobemax01.jpg", "adobemax02.jpg", "adobemax03.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
    {
      title: "架空のカードサービス",
      videoUrl: "https://www.youtube.com/embed/LQVUCiboIZ8",
      description: "手軽さをポップなデザインや動きで表現",
      screenshots: ["pay01.jpg", "pay02.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
    {
      title: "架空コーヒーサーバー表示用アニメーション",
      videoUrl: "https://www.youtube.com/embed/ZpS2p9x0s9g",
      description: "某コンビニのような、コーヒーを抽出する時間に表示される動画。ワクワクして欲しい気持ちを表しています",
      screenshots: ["coffee01.jpg", "coffee02.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
    {
      title: "架空の占いCM",
      videoUrl: "https://www.youtube.com/embed/SNy6xIe_HLY",
      description: "いかにも怪しいものを表現。手や宝石の表現は少し凝っています。",
      screenshots: ["stone01.jpg", "stone02.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
    {
      title: "架空マッチングサービスのアプリ広告",
      videoUrl: "https://www.youtube.com/embed/Li5ZUwBuGZI",
      description: "繋がりを線で表現したり、交流を交差やボールの動きで表現しています。",
      screenshots: ["tax01.jpg", "tax02.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
    {
      title: "架空勉強アプリWeb広告",
      videoUrl: "https://www.youtube.com/embed/twx_B1GRi-Y",
      description: "POPとカジュアルさを意識",
      screenshots: ["supri01.jpg", "supri02.jpg"],
      tools: ["Adobe Illustrator", "Adobe After Effects"],
    },
  ];

const work = {
  title: "AdobeMax2025のチャレンジ作品",
  videoUrl: "https://www.youtube.com/embed/xf_GN2o-GFc",
  description:
    "create magicがテーマということで、マジックの要素とクリエイターがドキドキワクワクし何かを作り出す様子を表現。",
  screenshots: ["adobemax01.jpg", "adobemax02.jpg", "adobemax03.jpg"],
  tools: ["Adobe Illustrator", "Adobe After Effects"],
};
  return (
    <>
      <Head>
        <title>Design Works - Mizoguchi Yusuke</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-dark pt-24 px-6 max-w-4xl mx-auto">
        <section id="client" className="mb-24 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-accent-red">C</span>lient Workについて
          </h2>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-accent-red hover:underline transition-all duration-300 text-base mb-4"
          >
            {showDetails ? "− 実績を閉じる" : "+ 実績を見る"}
          </button>

          {showDetails && (
            <div className="text-base space-y-4 leading-relaxed p-6">
              <p>
                広告映像・プロモーション映像・ライブ映像など、幅広いジャンルの制作に携わってきました。
                企画段階から構成・編集まで一貫して担当する案件も多く、内容に応じて柔軟に対応してきました。
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>広告映像（CM）</strong><br />
                  WebやSNS向けCMを複数制作。視認性と訴求力を意識した演出が特徴です。
                </li>
                <li>
                  <strong>プロモーション・VP</strong><br />
                  建材・玩具・化粧品など多様な業種の紹介映像を制作。
                </li>
                <li>
                  <strong>イベント・ライブ映像</strong><br />
                  ライブイベントのビジョン映像やイベント告知映像を担当。
                </li>
                <li>
                  <strong>モーショングラフィックス</strong><br />
                  タイトルロゴ演出やロゴモーション制作でブランド世界観を表現。
                </li>
              </ul>

              <p className="mt-4">
                ※ 詳しく知りたい方はお気軽に
                <Link href="/#contact" className="text-accent-red hover:underline transition-all duration-300 ml-1">
                  お問い合わせください →
                </Link>
              </p>
            </div>
          )}
        </section>

        <section id="personal" className="mb-24 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-accent-red">P</span>ersonal Works（自主制作）
          </h2>
          {works.map((work, index) => {
            const [detailShown, setDetailShown] = useState(false);

            return (
              <div key={index} className="pb-8 mb-12 last:mb-0">
                <h3 className="text-xl font-semibold mb-4">{work.title}</h3>

                <div className="aspect-video mb-6 rounded-md overflow-hidden">
                  <iframe
                    src={work.videoUrl}
                    title={work.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                <button
                  onClick={() => setDetailShown(!detailShown)}
                  className="text-accent-red hover:underline transition-all duration-300 text-base mb-4"
                >
                  {detailShown ? "− 閉じる" : "+ 詳しく見る"}
                </button>

                {detailShown && (
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed">{work.description}</p>

                    <div className="flex gap-6 overflow-x-auto pb-2">
                      {work.screenshots.map((img, i) => (
                        <img
                          key={i}
                          src={`/cutshot/${img}`}
                          alt={`${work.title} screenshot ${i + 1}`}
                          className="w-48 rounded-md"
                        />
                      ))}
                    </div>

                    <p className="text-base text-gray-dark">
                      使用ツール：{work.tools.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* 3️⃣ Selfblanding セクション */}
        <section id="selfblanding" className="mb-24 md:mb-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">
    <span className="text-accent-red">S</span>elfblanding
  </h2>

  <div className="relative">
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      className="mb-6 rounded-lg overflow-hidden selfbranding-swiper"
    >
      {["moc01.jpg", "moc02.jpg", "moc03.jpg", "moc04.jpg", "moc05.jpg", "moc06.jpg", "moc07.jpg", "moc08.jpg"].map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={`/self/${img}`}
            alt={`Self Branding ${i + 1}`}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev !text-accent-red !w-10 !h-10 !left-2 z-10 after:!text-2xl"></div>
      <div className="swiper-button-next !text-accent-red !w-10 !h-10 !right-2 z-10 after:!text-2xl"></div>
    </Swiper>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black/50 px-3 py-1 rounded-full">
      スライドで画像を切り替えられます
    </div>
  </div>

  <p className="text-base md:text-lg leading-relaxed max-w-2xl">
    自身がカフェを開業すると仮定し、
    <span className="font-medium">「研究・コーヒー・可能性」</span>という3つのテーマをもとに、
    ブランドの世界観を視覚化したロゴとキービジュアルを制作しました。
  </p>
</section>

        {/* 4️⃣ 授業紹介セクション */}
        <section id="classwork" className="mb-24 md:mb-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">
    <span className="text-accent-red">C</span>lass Samples
  </h2>

  <p className="mb-6 text-base md:text-lg leading-relaxed">
    授業では <span className="font-medium">「みんなに楽しんでもらえること」</span> を意識した
    作例づくりを心がけています。
  </p>

  <a
    href="https://www.youtube.com/playlist?list=PLCUs1ugTJNWXCoF1XiJH7mWmHqWytqxek"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-accent-red underline underline-offset-4 text-base md:text-lg font-semibold mb-8"
  >
    授業用作品の再生リストはこちら →
  </a>
</section>
      </main>
    </>
  );
}