import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <Hero/>
        <About/>

        <footer className="w-full flex items-center justify-center border-t border-white/10 mx-auto text-center text-xs gap-8 py-8 bg-black">
          <p>
            Developed by{" "}
            <a
              href="https://github.com/satya-no17"
              target="_blank"
              className="font-bold hover:underline text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
              rel="noreferrer"
            >
              Satya
            </a>
          </p>
      
        </footer>
      </div>
    </main>
  );
}
