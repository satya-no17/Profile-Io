import { AuthButton } from "@/components/auth-button";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md bg-black sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* 🔗 Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-white text-lg">
          <Image src="/logo.png" alt="logo" width={36} height={36} />
          <span className="hidden sm:inline">Profile-IO</span>
        </Link>

        {/* ⚙️ Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">


          <Suspense fallback={null}>
            <AuthButton />
          </Suspense>
        </div>

      </div>
    </nav>
  )
}

export default Nav