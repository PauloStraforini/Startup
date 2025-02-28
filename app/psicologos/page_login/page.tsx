import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/ui/login-form"

import image1 from "@/components/images/image 1.png"
import psicologo from "@/components/images/Psychologist-amico.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-r from-blue-400 to-violet-300">
      <div className="container mx-auto flex min-h-screen items-center justify-center p-4 ">
        <div className="relative flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Left side with illustration */}
          <div className="relative flex w-full flex-col items-start justify-between p-8 md:w-3/5 ">
            <div className="z-10">
              <Image 
                 src={image1 || "/placeholder.svg"}
                alt="Logo do projeto" 
                width={150} 
                height={150}
                className="mb-4"
              />
            </div>
            
            <div className="relative z-10 flex-1 py-12">
              <Image
                src={psicologo || "/placeholder.svg"}
                alt="Christmas Illustration"
                className="mx-auto"
              />
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute left-0 top-0 h-full w-full">
              <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-emerald-100/70"></div>
              <div className="absolute bottom-[20%] right-[30%] h-32 w-32 rounded-full bg-emerald-100/40"></div>
              <div className="absolute left-[20%] top-[60%] h-48 w-48 rounded-full bg-emerald-100/50"></div>
            </div>
          </div>
          
          {/* Right side with login form */}
          <div className="w-full   bg-violet-500 p-8 md:w-2/5">
            <LoginForm />
            
            <div className="mt-4 text-center text-xs text-emerald-200">
              <p className="mt-8">
                <Link href="/terms" className="hover:underline">Terms and Services</Link>
              </p>
              <p className="mt-4">
                Have a problem? Contact us at<br />
                <a href="mailto:info@maranatha.edu" className="hover:underline">info@maranatha.edu</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
