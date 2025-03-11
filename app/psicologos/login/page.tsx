"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Shield, Info, Brain, Lock, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentialType, setCredentialType] = useState("crp")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
        <div className="max-w-md mx-auto w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/50 transform transition-all duration-500 hover:shadow-indigo-500/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <Brain className="h-6 w-6 text-indigo-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Portal Oficial
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-gray-800">Área do Psicólogo</h1>
          <p className="text-gray-600 mb-8">
            Acesse o sistema com suas credenciais profissionais para gerenciar seus pacientes e documentos.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Credencial</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent pr-10 appearance-none bg-white transition-all duration-200"
                  value={credentialType}
                  onChange={(e) => setCredentialType(e.target.value)}
                >
                  <option value="crp">CRP - Conselho Regional de Psicologia</option>
                  <option value="cfp">CFP - Conselho Federal de Psicologia</option>
                  <option value="epsi">e-Psi - Cadastro Nacional</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#6366F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Número de Registro</label>
              <input
                type="text"
                placeholder={credentialType === "crp" ? "CRP 00/00000" : "Número de registro"}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent pr-10 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                Esqueceu sua senha?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center group"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  Acessar Sistema
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 transition-all duration-300 hover:border-indigo-200 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-indigo-700">
                <p className="font-medium mb-1">Credenciais Profissionais</p>
                <p>
                  Para acessar o sistema, é necessário possuir registro ativo no Conselho Regional de Psicologia (CRP)
                  ou outra credencial oficial reconhecida pelo Ministério da Saúde.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Não possui cadastro?{" "}
            <Link href="#" className="text-indigo-600 font-medium hover:underline transition-colors">
              Solicitar acesso
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Política de Privacidade
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Termos de Uso
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden md:block md:w-1/2 relative z-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center transform rotate-6 shadow-xl">
              <Lock className="h-12 w-12 text-white" />
            </div>

            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Ilustração de psicólogo"
              width={400}
              height={400}
              className="mx-auto filter drop-shadow-2xl"
            />

            {/* Feature Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 transform -rotate-3 z-20 border border-indigo-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Segurança</div>
                  <div className="text-xs text-gray-500">Dados protegidos</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs text-gray-600">Criptografia avançada</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 transform rotate-3 border border-indigo-100">
              <div>
                <p className="text-sm font-medium text-gray-800">Sistema Nacional</p>
                <p className="text-xs text-gray-500">Psicólogos</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg px-3 py-1 text-xs font-medium">
                Oficial
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-md">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Plataforma oficial para profissionais de psicologia credenciados
            </h2>
            <p className="text-indigo-200 mb-6">
              Gerencie seus pacientes, agendamentos e documentos em um só lugar, com segurança e praticidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-300" />
                <span className="text-sm text-white">Prontuários Eletrônicos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-300" />
                <span className="text-sm text-white">Agendamento Online</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-300" />
                <span className="text-sm text-white">Relatórios Automáticos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-8 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

