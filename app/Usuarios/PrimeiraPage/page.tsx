"use client"; // Adicione esta linha no início do arquivo

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Book, Headphones, Users, PhoneCall, Video, Search, Bell, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from "react"; // Agora pode usar hooks do React
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import image1 from "@/components/images/image 1.png";
import icon5 from "@/components/images/icon5.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 backdrop-blur-md ${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} border-b border-gray-200 dark:border-gray-700`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src={image1 || "/placeholder.svg"}
              alt="Logo Acolhimento"
              width={80}
              height={80}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Acolhimento e Serenidade
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                type="search"
                placeholder="Pesquisar..."
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-900">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>Ps</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Olá, Pauladas!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Que bom ter você aqui. Como podemos ajudar hoje?
          </p>
          <Image
            src={icon5 || "/placeholder.svg"}
            alt="Meditating person"
            width={200}
            height={200}
            className="mx-auto mt-4 drop-shadow-lg w-64 h-64 animate-float"
          />
        </section>

        {/* Quick Actions Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <QuickActionButton
            icon={MessageCircle}
            text="Fale com um Profissional"
            bgColor="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          />

          <Link href="/DiarioPage">
          <QuickActionButton
            icon={Book}
            text="Diário Emocional"
            bgColor="bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          />
          </Link>
          
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
        <section className="mb-12">
          <Tabs defaultValue="tip" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tip">Dica do Dia</TabsTrigger>
              <TabsTrigger value="video">Vídeo Motivacional</TabsTrigger>
            </TabsList>
            <TabsContent value="tip">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">Dica do Dia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Respire fundo por 5 segundos antes de responder a uma situação estressante. Isso ajuda a acalmar sua
                    mente e tomar decisões mais conscientes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="video">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-purple-700 dark:text-purple-400">Vídeo Motivacional</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-full mb-4">
                    <Video className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 transform hover:scale-105">
                    Assistir Agora
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Progress Section */}
        <section className="mb-12">
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-700 dark:text-green-400">Seu Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg mb-4">
                <Progress value={progress} className="w-full h-4" />
              </div>
              <p className="text-center mt-6 text-lg text-gray-700 dark:text-gray-300">
                <span className="font-bold text-green-600 dark:text-green-400">7 dias consecutivos</span> usando o app. Continue assim!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Daily Goals Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Metas Diárias
          </h2>
          <div className="flex flex-wrap justify-center gap-4">

            <Link href="/MeditaçaoPage">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Complete 5 min de meditação
            </Button> 
            </Link>

            <Link href="/DiarioPage">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Escreva no diário emocional
            </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      
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
      className={`h-32 text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${bgColor} ${className}`}
    >
      <div className="flex flex-col items-center">
        <Icon className="mb-2 h-8 w-8" />
        <span className="text-center">{text}</span>
      </div>
    </Button>
  );
}
