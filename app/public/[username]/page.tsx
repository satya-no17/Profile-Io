import Profile from "@/components/profile";
import { Suspense } from "react";



export default function page({params}:{params:Promise<{username:string}>}) {
 
  return (
        <div className="min-h-screen bg-[#000000] flex items-center justify-center">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Profile params={params} />
      </Suspense>
    </div>
  )
}

