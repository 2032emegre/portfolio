import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-dark text-gray-light px-6 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="text-lg font-bold relative z-20">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
        </Link>

        {/* ハンバーガーメニュー（モバイル） */}
        <button
          className="md:hidden relative z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* デスクトップメニュー */}
        <div className="hidden md:flex gap-6 text-base items-center">
          <Link href="/#project" className="hover:text-accent-red transition-colors">Project</Link>
          <Link href="/#reel" className="hover:text-accent-red transition-colors">Reel</Link>
          <Link href="/design" className="hover:text-accent-red transition-colors">Design</Link>
          <Link href="/#about" className="hover:text-accent-red transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-accent-red transition-colors">Contact</Link>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-dark z-10 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
              <Link 
                href="/#project" 
                className="hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Project
              </Link>
              <Link 
                href="/#reel" 
                className="hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reel
              </Link>
              <Link 
                href="/design" 
                className="hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Design
              </Link>
              <Link 
                href="/#about" 
                className="hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#contact" 
                className="hover:text-accent-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}