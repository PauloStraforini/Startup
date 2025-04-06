"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FiUser, FiMail, FiCalendar, FiAward, FiFileText, FiChevronDown, FiCheck } from "react-icons/fi"

const ESPECIALIDADES_OPCOES = [
  "Psicologia Clínica",
  "Psicologia Organizacional",
  "Neuropsicologia",
  "Psicologia Escolar",
  "Psicologia Social",
  "Psicologia do Esporte",
  "Psicologia Jurídica",
  "Psicologia Hospitalar",
  "Psicologia do Trânsito",
  "Psicologia Forense",
  "Outros",
]

export default function CadastroPsicologo() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    crp: "",
    email: "",
    nomeCompleto: "",
    dataNascimento: "",
    especialidades: [] as string[],
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showEspecialidades, setShowEspecialidades] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleEspecialidade = (especialidade: string) => {
    setFormData((prev) => {
      const especialidades = prev.especialidades.includes(especialidade)
        ? prev.especialidades.filter((esp) => esp !== especialidade)
        : [...prev.especialidades, especialidade]

      return {
        ...prev,
        especialidades,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica do frontend
    if (!formData.dataNascimento) {
      setError("Preencha a data de nascimento")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/psicologos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dataNascimento: formData.dataNascimento, // Já está no formato YYYY-MM-DD
        }),
      })

      if (!response.ok) throw new Error("Erro no cadastro")

      setSuccess(true)
      setTimeout(() => {
        router.push("/cadastro/sucesso")
      }, 2000)
    } catch (error) {
      console.error(error)
      setError("Erro ao cadastrar")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node
    const dropdown = document.getElementById("especialidades-dropdown")
    if (dropdown && !dropdown.contains(target)) {
      setShowEspecialidades(false)
    }
  }

  // Add event listener when component mounts
  useState(() => {
    document.addEventListener("mousedown", handleClickOutside)
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, )

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-xl">
        {/* Left sidebar with gradient */}
        <div className="bg-gradient-to-b from-purple-500 to-indigo-600 w-2/5 p-8 text-white flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl">5</span>
              <div className="text-xs">
                <div className="font-semibold">Specialist</div>
                <div className="opacity-80">Find The Perfect Mentor Online</div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Learn From Worlds Best Instructors</h2>
          <h3 className="text-2xl font-bold mb-8">Around The World.</h3>

          <div className="relative h-40">{/* Decorative elements could be added here */}</div>
        </div>

        {/* Right form area */}
        <div className="bg-white w-3/5 p-8">
          <div className="max-w-md mx-auto">
            <div className="text-right mb-6">
              <select className="text-sm border-none bg-transparent">
                <option>English (USA)</option>
              </select>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">Cadastro de Psicólogo</h1>

            {success && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center">
                <FiFileText className="mr-2" />
                <span>Cadastro realizado com sucesso!</span>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center">
                <FiFileText className="mr-2" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="crp">
                  <FiAward className="inline mr-2 text-purple-500" />
                  CRP
                </label>
                <input
                  id="crp"
                  name="crp"
                  type="text"
                  value={formData.crp}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-200 focus:border-purple-500 border-gray-300"
                  placeholder="Ex: 123456/SP"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                  <FiMail className="inline mr-2 text-purple-500" />
                  E-mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-200 focus:border-purple-500 border-gray-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="nomeCompleto">
                  <FiUser className="inline mr-2 text-purple-500" />
                  Nome Completo
                </label>
                <input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-200 focus:border-purple-500 border-gray-300"
                  placeholder="Insira seu nome completo"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="dataNascimento">
                  <FiCalendar className="inline mr-2 text-purple-500" />
                  Data de Nascimento
                </label>
                <input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-200 focus:border-purple-500 border-gray-300"
                  max={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              {/* Campo Especialidades */}
              <div className="mb-6 relative">
                <label className="block text-gray-700 mb-2 font-medium">
                  <FiAward className="inline mr-2 text-purple-500" />
                  Especialidades
                </label>

                <div
                  id="especialidades-dropdown"
                  className={`w-full p-3 border rounded-lg cursor-pointer flex justify-between items-center border-gray-300 ${showEspecialidades ? "ring-2 ring-purple-200 border-purple-500" : ""}`}
                  onClick={() => setShowEspecialidades(!showEspecialidades)}
                >
                  <span className="truncate">
                    {formData.especialidades.length > 0
                      ? formData.especialidades.join(", ")
                      : "Selecione as especialidades"}
                  </span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${showEspecialidades ? "rotate-180" : ""}`}
                  />
                </div>

                {showEspecialidades && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {ESPECIALIDADES_OPCOES.map((especialidade) => (
                      <div
                        key={especialidade}
                        className={`p-3 hover:bg-purple-50 cursor-pointer flex items-center justify-between ${
                          formData.especialidades.includes(especialidade) ? "bg-purple-50" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleEspecialidade(especialidade)
                        }}
                      >
                        <span>{especialidade}</span>
                        {formData.especialidades.includes(especialidade) && <FiCheck className="text-purple-600" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-200 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Cadastrando...
                  </span>
                ) : (
                  "Cadastrar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

