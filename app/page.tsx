import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import image1 from "@/components/images/image 1.png";
import icon2 from "@/components/images/icon2.png";
import icon3 from "@/components/images/icon3.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-12">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={image1 || "/placeholder.svg"}
            alt="Logo Votorantim"
            width={500}
            height={500}
          />
        </div>

        {/* Cards lado a lado */}
        <div className="flex flex-row gap-4">
          <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border-zinc-300 hover:border-blue-300">
            <CardContent className="flex flex-col items-center gap-8 py-8">
              <Image
                src={icon2 || "/placeholder.svg"}
                alt="Entrar"
                width={150}
                height={100}
              />
              <Button
                variant="secondary"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-500 hover:text-white"
              >
                Entrar
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border-zinc-300 hover:border-teal-500">
            <CardContent className="flex flex-col items-center gap-8 py-8">
              <Image
                src={icon3 || "/placeholder.svg"}
                alt="Entrar"
                width={150}
                height={100}
              />
              <Button
                variant="secondary"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:bg-teal-500 hover:text-white"
              >
                Criar conta
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Links */}
        <div className="mt-auto mb-20 flex gap-3 text-sm text-muted-foreground pt-8">
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
  );
}
