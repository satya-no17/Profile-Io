'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-black">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Thank you for signing up!
              </CardTitle>
              <CardDescription>Check your email to confirm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
             <div className="flex items-center justify-center "> <button className=" hover:bg-gray-700 rounded-lg p-3 mt-2 hover:text-white transition-all" onClick={()=>(router.push('/profile'))}>Get Started</button></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
