import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-dark text-gray-light px-6 py-4 flex justify-between items-center">
      {/* ロゴ */}
      <Link href="/" className="text-lg font-bold">
        <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
      </Link>

      {/* ✅ トップページ内セクションへのリンク */}
      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/#project">Project</Link>
        <Link href="/#reel">Reel</Link>
        <Link href="/design">Design</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}