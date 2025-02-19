import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Status Bar */}
      <div className="h-10 px-4 flex items-center justify-between text-sm">
        <span>1:44</span>
        <div className="flex items-center gap-1">
          <span>100%</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-12">
        {/* Logo */}
        <div className="w-16 h-16 mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0lj5CxLLWxEuha7CXu9mTmPnz2q3JC.png"
            alt="Splitwise Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4 max-w-xs">
          <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white">Sign up</Button>
          <Button variant="secondary" className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
            Log in
          </Button>
        </div>

        {/* Footer Links */}
        <div className="mt-auto mb-20 flex gap-3 text-sm text-muted-foreground">
          <Link href="#" className="hover:underline">
            Terms
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Contact us
          </Link>
        </div>

        {/* Decorative Bottom Shapes */}
        <div className="fixed bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 left-0 w-full h-24 flex">
              <div className="w-1/4 h-full transform skew-x-12 -ml-8 bg-emerald-400" />
              <div className="w-1/4 h-full transform skew-x-12 bg-purple-400" />
              <div className="w-1/4 h-full transform skew-x-12 bg-orange-400" />
              <div className="w-1/4 h-full transform skew-x-12 bg-emerald-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

