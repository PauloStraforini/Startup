"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, RotateCcw, ArrowLeft } from "lucide-react"

export default function MeditacaoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
        setProgress((prevProgress) => prevProgress + 100 / 300)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsPlaying(false)
    }

    return () => clearInterval(interval)
  }, [isPlaying, timeLeft])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const resetMeditation = () => {
    setIsPlaying(false)
    setTimeLeft(300)
    setProgress(0)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/PrimeiraPage" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Meditação Guiada
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-700">Sessão de 5 Minutos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-64 h-64 relative mb-6">
              <Image src="/meditation-illustration.svg" alt="Meditação" layout="fill" className="object-cover" />
            </div>
            <Progress value={progress} className="w-full h-4 mb-4" />
            <p className="text-3xl font-bold text-indigo-600 mb-6">{formatTime(timeLeft)}</p>
            <div className="flex space-x-4">
              <Button
                onClick={togglePlay}
                className={`${
                  isPlaying ? "bg-purple-600 hover:bg-purple-700" : "bg-indigo-600 hover:bg-indigo-700"
                } text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button
                onClick={resetMeditation}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <RotateCcw className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Benefícios da Meditação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard
              title="Reduz o Estresse"
              description="A meditação ajuda a acalmar a mente e reduzir os níveis de cortisol no corpo."
            />
            <BenefitCard
              title="Melhora o Foco"
              description="Praticar meditação regularmente pode aumentar sua capacidade de concentração."
            />
            <BenefitCard
              title="Promove Bem-estar"
              description="A meditação está associada a uma maior sensação de calma e bem-estar geral."
            />
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-indigo-200 text-base">
            Continue sua jornada de mindfulness. Pratique regularmente para melhores resultados.
          </p>
        </div>
      </footer>
    </div>
  )
}

interface BenefitCardProps {
  title: string
  description: string
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-indigo-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

