export default function Project() {
    return (
      <section id="project" className="py-24 md:py-16 px-6 bg-white text-gray-dark">
        <div className="max-w-4xl mx-auto text-left">
          {/* セクションタイトル */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-normal">
            <span className="text-accent-red mr-[0.1em]">P</span>roject
          </h2>
  
          {/* 説明文 */}
          <p className="text-base md:text-lg leading-relaxed mb-6">
            ChatGPT API を活用し、気分に合ったコーヒーを提案する CLI ツールを Python で開発しました。
            ターミナルで動く軽量なボットで、ユーザーの気分をもとに自然言語でコーヒー豆を提案します。
            <br /><br />
            AIの実用的な組み込み方法や、API活用・CLI設計の基礎を学ぶことを目的に取り組みました。
            コードは GitHub にて公開しています。
          </p>
  
          {/* GitHubリンク */}
          <a
            href="https://github.com/2032emegre/coffee-bot-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-red hover:underline transition-all duration-300 text-base inline-flex items-center"
          >
            GitHubで見る →
          </a>
        </div>
      </section>
    );
  }