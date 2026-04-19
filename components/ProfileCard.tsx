import Image from "next/image";
import ActionButtons from "./actionButtons";

export default function ProfileCard({ data }: any) {
  return (
    <div className="h-screen w-full bg-black p-4 sm:p-6">
      <div className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-emerald-400 to-blue-500">
        
        <div className="flex flex-col lg:flex-row bg-[#0a0b10] h-full rounded-2xl p-4 sm:p-6 gap-6 overflow-auto">

          {/* LEFT - PROFILE */}
          <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/2 p-4 sm:p-6">

            {/* Avatar */}
            <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 blur-md opacity-40"></div>
              <Image
                src={data.avatar}
                alt="avatar"
                fill
                className="rounded-full object-cover z-10"
              />
            </div>

            {/* Info */}
            <div className="mt-4 w-full max-w-md">
              <h1 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-400">
                {data.fullname}
              </h1>

              <p className="text-gray-500">@{data.username}</p>

              <p className="mt-2 text-sm sm:text-base text-white">
                {data.bio}
              </p>

              {/* Description */}
              {data.description && (
                <div className="mt-5 p-4 sm:p-5 rounded-3xl text-sm sm:text-base font-medium bg-[#0f1117] shadow-[0_0_30px_rgba(168,85,200,0.4)]">
                  <p className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-400">{data.description}</p>
                </div>
              )}

              {/* Buttons */}
              <ActionButtons name={data.fullname} />
            </div>
          </div>

          {/* RIGHT - LINKS */}
          <div className="w-full lg:w-1/2 max-w-4xl bg-[#0f1117] rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(139,92,246,0.15)] border border-white/5">
            <div className="grid gap-3 sm:gap-4 overflow-auto">
       
              {data.links.map((link:any ,i:number)=>(
                 <a
                 key={i}
      href={link.url}
      className="flex items-center justify-between p-4 rounded-xl bg-[#151822] hover:bg-[#1b1f2a] transition border border-white/5 group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 text-white">
          {link.icon}
        </div>
        <span className="text-white">{link.title}</span>
      </div>

      <span className="text-gray-500 group-hover:translate-x-1 transition">
        →
      </span>
    </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}