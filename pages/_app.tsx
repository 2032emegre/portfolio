// pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar"; // ✅ ここを追加！

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* ✅ 全ページで表示されるナビゲーションバー */}
      <Component {...pageProps} />
    </>
  );
}