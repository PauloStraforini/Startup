import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import image1 from "@/components/images/image 1.png"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex flex-col items-center px-6">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={image1 || "/placeholder.svg"}
            alt="Logo Votorantim"
            width={300}
            height={300}
          />
        </div>

        {/* Sign Up Card */}
        <Card className="w-full max-w-md transition-all duration-300 border-zinc-300">
          <CardHeader className="bg-cyan-800 rounded-t-lg">
            <CardTitle className="text-white text-xl text-center">Criar conta</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">Primeiro Nome</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="border-zinc-300 focus:border-teal-500 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Ultimo Nome</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="border-zinc-300 focus:border-teal-500 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="border-zinc-300 focus:border-teal-500 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  className="border-zinc-300 focus:border-teal-500 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  id="confirmPassword" 
                  type="password"
                  className="border-zinc-300 focus:border-teal-500 transition-colors"
                />
              </div>
            </div>
            <Button 
              className="w-full bg-cyan-800 hover:bg-teal-500 text-white transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              Entrar
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Já tem uma conta cadastrada?{" "}
              <Link 
                href="/PrimeiraPage" 
                className="text-cyan-800 hover:text-teal-500 transition-colors"
              >
                Entrar
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="mt-auto mb-8 flex gap-3 text-sm text-muted-foreground pt-8">
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
