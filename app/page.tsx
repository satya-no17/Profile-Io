import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
<Hero/>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8 bg-black">
          <p>
            Developed by{" "}
            <a
              
              target="_blank"
              className="font-bold hover:underline"
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
