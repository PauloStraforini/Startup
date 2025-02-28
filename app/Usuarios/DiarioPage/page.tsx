"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

// Componentes UI
import { ReactNode } from "react"

const Button = ({ children, onClick, className = "" }: { children: ReactNode, onClick: () => void, className?: string }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-md ${className}`}>
    {children}
  </button>
)

const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>{children}</div>
)

// Dados mock
const motivationalPhrases = [
  "Cada sentimento importa. Permita-se sentir e escrever.",
  "Sua jornada emocional é única. Celebre cada passo.",
  "Escrever é uma forma de cuidar de si mesmo.",
  "Suas palavras têm poder. Use-as para se entender melhor.",
]

const guidedQuestions = [
  "Algo especial aconteceu hoje? Como se sentiu?",
  "Houve algum momento difícil? Como lidou com ele?",
  "O que poderia fazer para se sentir melhor amanhã?",
  "Liste 3 coisas pelas quais se sente grato hoje.",
]

const emotions = [
  { emoji: "😊", label: "Feliz" },
  { emoji: "😢", label: "Triste" },
  { emoji: "😠", label: "Irritado" },
  { emoji: "😌", label: "Calmo" },
  { emoji: "🥺", label: "Ansioso" },
  { emoji: "💪", label: "Motivado" },
]

const mockEntries = [
  { id: 1, date: "2023-05-01", summary: "Hoje foi um dia produtivo...", emotion: "Feliz" },
  { id: 2, date: "2023-05-02", summary: "Enfrentei alguns desafios...", emotion: "Ansioso" },
  { id: 3, date: "2023-05-03", summary: "Refleti sobre meus objetivos...", emotion: "Motivado" },
]

const emotionData = [
  { name: "Feliz", value: 40 },
  { name: "Ansioso", value: 30 },
  { name: "Motivado", value: 20 },
  { name: "Triste", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Home() {
  const [phrase, setPhrase] = useState("")
  const [streak, setStreak] = useState(5)
  const [entry, setEntry] = useState("")
  const [selectedEmotion, setSelectedEmotion] = useState("")
  const [filter, setFilter] = useState("all")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setPhrase(motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)])
  }, [])

  const handleSave = () => {
    console.log("Saving entry:", { entry, emotion: selectedEmotion })
    alert("Entrada salva com sucesso! 🎉")
    setEntry("")
    setSelectedEmotion("")
  }

  const filteredEntries =
    filter === "all" ? mockEntries : mockEntries.filter((entry) => entry.emotion.toLowerCase() === filter)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Diário Emocional
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{phrase}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Você escreveu por {streak} dias seguidos! 🎉</p>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Writing Section */}
        <section className="mb-12">
          <textarea
            placeholder={guidedQuestions[Math.floor(Math.random() * guidedQuestions.length)]}
            className="w-full h-64 p-4 text-lg rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <div className="mt-4">
            <p className="mb-2">Como você está se sentindo?</p>
            <div className="flex flex-wrap gap-4">
              {emotions.map(({ emoji, label }) => (
                <button
                  key={label}
                  onClick={() => setSelectedEmotion(label)}
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    selectedEmotion === label ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-700"
                  }`}
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          <Button
            onClick={handleSave}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
          >
            Salvar Entrada
          </Button>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Entradas Anteriores</h2>
          <div className="mb-4">
            <Button
              onClick={() => setFilter("all")}
              className={`mr-2 ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Todas
            </Button>
            <Button
              onClick={() => setFilter("feliz")}
              className={`mr-2 ${filter === "feliz" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Feliz
            </Button>
            <Button
              onClick={() => setFilter("ansioso")}
              className={`mr-2 ${filter === "ansioso" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Ansioso
            </Button>
            <Button
              onClick={() => setFilter("motivado")}
              className={`${filter === "motivado" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Motivado
            </Button>
          </div>
          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <Card key={entry.id}>
                <h3 className="font-bold">
                  {entry.date} - {entry.emotion}
                </h3>
                <p>{entry.summary}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Analysis Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Análise de Emoções</h2>
          <Card>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Recomendações</h3>
              <p>Baseado em suas emoções recentes, aqui estão algumas sugestões:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Pratique exercícios de respiração para reduzir a ansiedade.</li>
                <li>Continue registrando momentos felizes para manter o ânimo elevado.</li>
                <li>Considere estabelecer metas pequenas para manter a motivação.</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Termos de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Seu diário é um espaço seguro. Volte sempre que precisar.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

