"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, Shield, Info, ChevronRight, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentialType, setCredentialType] = useState("crp")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <Link href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 group">
          <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Voltar</span>
        </Link>
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-indigo-600" />
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                Portal Oficial
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Área do Psicólogo</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Acesse o sistema com suas credenciais profissionais para gerenciar seus pacientes e documentos.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Tipo de Credencial</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-800 appearance-none"
                  value={credentialType}
                  onChange={(e) => setCredentialType(e.target.value)}
                >
                  <option value="crp">CRP - Conselho Regional de Psicologia</option>
                  <option value="cfp">CFP - Conselho Federal de Psicologia</option>
                  <option value="epsi">e-Psi - Cadastro Nacional</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 rotate-90" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Número de Registro</label>
              <input
                type="text"
                placeholder={credentialType === "crp" ? "CRP 00/00000" : "Número de registro"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">Senha</label>
                <Link href="#" className="text-xs text-indigo-600 hover:text-indigo-800">
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Acessar Sistema
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Credenciais Profissionais</p>
                <p className="text-blue-700 text-xs leading-relaxed">
                  Para acessar o sistema, é necessário possuir registro ativo no Conselho Regional de Psicologia (CRP)
                  ou outra credencial oficial reconhecida pelo Ministério da Saúde.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Não possui cadastro?{" "}
            <Link href="#" className="text-indigo-600 font-medium hover:underline">
              Solicitar acesso
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center space-x-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Termos de Uso
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-indigo-600 to-blue-700">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className="relative w-full max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Ilustração de psicólogo"
              width={400}
              height={400}
              className="mx-auto drop-shadow-lg"
            />

            {/* Feature Card */}
            <div className="absolute -bottom-4 right-0 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Sistema Nacional de Psicologia</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Plataforma segura e oficial para profissionais credenciados
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-md">
            <h2 className="text-xl font-semibold text-white mb-3">
              Plataforma oficial para profissionais de psicologia
            </h2>
            <p className="text-indigo-100 text-sm">
              Gerencie seus pacientes, documentos e agenda em um só lugar, com segurança e praticidade.
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-8 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

