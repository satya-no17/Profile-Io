export default function LinkItem({ link }: any) {
  return (
    <a
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
  );
}