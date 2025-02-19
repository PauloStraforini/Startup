import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import image1 from "@/components/images/image 1.png"



export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-12">
        {/* Logo */}
        <div className="flex flex-col items-center mt-24 mb-4">
          <Image src={image1} alt="Logo Votorantim" width={500} height={500} />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4 max-w-xs">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Sign up</Button>
          <Button variant="secondary" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
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
        
      </main>
    </div>
  )
}

