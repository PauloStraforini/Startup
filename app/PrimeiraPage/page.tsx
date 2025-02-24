import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageCircle,
  Book,
  Headphones,
  Users,
  PhoneCall,
  Video,
  BarChart2,
  Search,
  Bell,
} from "lucide-react";

import image1 from "@/components/images/image 1.png";
import icon5 from "@/components/images/icon5.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image
              src={image1 || "/placeholder.svg"}
              alt="Logo Acolhimento"
              width={80}
              height={80}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Acolhimento e Sereenidade
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="w-48 md:w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-indigo-500"
                type="search"
                placeholder="Pesquisar..."
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-indigo-600">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="ring-2 ring-indigo-500 ring-offset-2">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>Ps</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Olá, Pauladas!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
            Que bom ter você aqui. Como podemos ajudar hoje?
          </p>
          <Image
            src={icon5 || "/placeholder.svg"}
            alt="Meditating person"
            width={200}
            height={200}
            className="mx-auto mt-4 drop-shadow-lg w-48 h-48 md:w-64 md:h-64"
          />
        </section>

        {/* Quick Actions Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 md:mb-12">
  <QuickActionButton
    icon={MessageCircle}
    text="Fale com um Profissional"
    bgColor="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
  />
  <QuickActionButton
    icon={Book}
    text="Diário Emocional"
    bgColor="bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
  />
  <QuickActionButton
    icon={Headphones}
    text="Exercícios de Relaxamento"
    bgColor="bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
  />
  <QuickActionButton
    icon={Users}
    text="Comunidade"
    bgColor="bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
  />
  <QuickActionButton
    icon={PhoneCall}
    text="Emergência (CVV - 188)"
    bgColor="bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
    className="col-span-full sm:col-span-2 md:col-span-1"
  />
</section>

        {/* Daily Resources Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold text-indigo-700">Dica do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base md:text-lg">
                Respire fundo por 5 segundos antes de responder a uma situação estressante. Isso ajuda a acalmar sua
                mente e tomar decisões mais conscientes.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold text-purple-700">Vídeo Motivacional</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 md:p-6 rounded-full mb-4">
                <Video className="h-12 w-12 md:h-16 md:w-16 text-purple-600" />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 transform hover:scale-105">
                Assistir Agora
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Progress Section */}
        <section className="mb-8 md:mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold text-green-700">Seu Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-100 p-4 md:p-6 rounded-lg">
                <BarChart2 className="h-32 w-full text-green-600" />
              </div>
              <p className="text-center mt-4 md:mt-6 text-base md:text-lg text-gray-700">
                <span className="font-bold text-green-600">7 dias consecutivos</span> usando o app. Continue assim!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Daily Goals Section */}
        <section className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Metas Diárias
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Complete 5 min de meditação
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Escreva no diário emocional
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">MindfulMe</h3>
              <p className="text-indigo-200 text-sm md:text-base">Cuidando da sua saúde mental, todos os dias.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Links Rápidos</h4>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <Link href="/about" className="text-indigo-200 hover:text-white transition-colors text-sm md:text-base">
                  Sobre o App
                </Link>
                <Link href="/privacy" className="text-indigo-200 hover:text-white transition-colors text-sm md:text-base">
                  Privacidade
                </Link>
                <Link href="/terms" className="text-indigo-200 hover:text-white transition-colors text-sm md:text-base">
                  Termos de Uso
                </Link>
                <Link href="/contact" className="text-indigo-200 hover:text-white transition-colors text-sm md:text-base">
                  Contato
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">Siga-nos</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-110">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-110">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                </Button>
              </div>
              <Button className="mt-4 bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 text-sm md:text-base transition-colors duration-300">
                Avalie o App
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-500 text-center text-indigo-200 text-sm md:text-base">
            &copy; 2024 MindfulMe. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

interface QuickActionButtonProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
    bgColor: string;
    className?: string;
  }
  
  function QuickActionButton({ icon: Icon, text, bgColor, className }: QuickActionButtonProps) {
    return (
      <Button
        className={`h-24 md:h-32 text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${bgColor} ${className}`}
      >
        <div className="flex flex-col items-center">
          <Icon className="mb-2 h-6 w-6 md:h-8 md:w-8" />
          <span className="text-center">{text}</span>
        </div>
      </Button>
    );
  }