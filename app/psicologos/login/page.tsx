"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Shield, Info } from "lucide-react"
import { useState } from "react"

import Psychologist from "@/components/images/Psychologist-amico.svg"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentialType, setCredentialType] = useState("crp")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-md mx-auto w-full bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Portal Oficial
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-gray-800">Área do Psicólogo</h1>
          <p className="text-gray-600 mb-8">
            Acesse o sistema com suas credenciais profissionais para gerenciar seus pacientes e documentos.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Credencial</label>
              <select
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                value={credentialType}
                onChange={(e) => setCredentialType(e.target.value)}
              >
                <option value="crp">CRP - Conselho Regional de Psicologia</option>
                <option value="cfp">CFP - Conselho Federal de Psicologia</option>
                <option value="epsi">e-Psi - Cadastro Nacional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Número de Registro</label>
              <input
                type="text"
                placeholder={credentialType === "crp" ? "CRP 00/00000" : "Número de registro"}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
                Esqueceu sua senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Acessar Sistema
            </button>
          </form>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
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
            <Link href="#" className="text-indigo-600 font-medium hover:underline">
              Solicitar acesso
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Política de Privacidade
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Termos de Uso
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className="relative w-full max-w-md">
            <Image
              src={Psychologist || "/placeholder.svg"}
              alt="Ilustração de psicólogo"
              width={400}
              height={400}
              className="mx-auto"
            />

            {/* Canva Design Card */}
            <div className="absolute bottom-0 right-0 bg-white rounded-lg shadow-md p-3 flex items-center gap-3">
              <div>
                <p className="text-sm font-medium">Sistema Nacional</p>
                <p className="text-xs text-gray-500">Psicólogos</p>
              </div>
              <div className="bg-indigo-100 text-indigo-700 rounded px-2 py-1 text-xs">Oficial</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-white">
              Plataforma oficial para profissionais de psicologia credenciados
            </h2>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1">
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

