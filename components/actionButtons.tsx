"use client";

import { useState } from "react";

export default function ActionButtons({ name ,email}: { name: string ,email?:string}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          url,
        });
      } catch (err) {
        // user cancelled → ignore
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex gap-3 mt-6 flex-wrap justify-center">

      {/* Share / Copy */}
      <button
        onClick={handleShare}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white text-sm hover:scale-105 transition"
      >
        {copied ? "✅ Copied!" : "🔗 Share"}
      </button>

      {/* Email */}
      <a
        href={`mailto:?subject=Check out ${email}&body=Check this profile: ${typeof window !== "undefined" ? window.location.href : ""}`}
        className="px-4 py-2 rounded-xl bg-[#151822] text-white text-sm border border-white/10 hover:bg-[#1b1f2a] transition"
      >
        ✉️ Email
      </a>

    </div>
  );
}