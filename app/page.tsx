"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Calendar, FileText, Video, BookOpen, Shield, Clock, Lock, Smile, Headphones, Check, Linkedin, Instagram, Facebook, Twitter, Menu, X, ArrowRight, Brain, Heart, Star, Sparkles, ChevronRight } from 'lucide-react'

import User1 from "@/components/images/user_1.jpg"
import User2 from "@/components/images/user_2.jpg"
import User3 from "@/components/images/user_3.jpg"
import User4 from "@/components/images/user_4.jpg"

import Apoio from "@/components/images/Psychologist-amico.svg"
import Logo from "@/components/images/Logo1.png"



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ["inicio", "funcionalidades", "beneficios", "depoimentos", "precos", "contato"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header
        className={`${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-indigo-100" 
            : "bg-transparent"
        } text-gray-800 sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Image
              src={Logo || "/placeholder.svg"}
              alt="MindFlow Logo"
              width={120}
              height={120}
              className="ml-2"
            />
            <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent font-extrabold">
              MindFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "funcionalidades", "beneficios", "depoimentos", "precos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item 
                    ? "text-indigo-600 font-medium" 
                    : "text-gray-600"
                } hover:text-indigo-600 transition-colors relative py-1`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-indigo-600 p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1">
            Experimente Grátis
          </button>
        </div>
        

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full bg-white border-b border-indigo-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["inicio", "funcionalidades", "beneficios", "depoimentos", "precos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item ? "text-indigo-600 font-medium" : "text-gray-600"
                } hover:text-indigo-600 transition-colors py-2 text-left`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold py-3 px-6 rounded-full w-full mt-2">
              Experimente Grátis
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="pt-24 pb-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden relative"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fadeIn">
              <div className="inline-block px-3 py-1 bg-indigo-700/50 rounded-full text-teal-300 font-medium text-sm mb-6 border border-indigo-600 backdrop-blur-sm">
                <span className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Plataforma para Psicólogos
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Transforme sua</span>
                <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
                  prática clínica
                </span>
              </h1>
              <p className="text-xl mb-8 text-indigo-100 max-w-lg leading-relaxed">
                Organize sessões, gerencie pacientes e otimize seu tempo com nossa plataforma especializada para
                psicólogos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-bold py-3.5 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 flex items-center justify-center group">
                    Comece Agora
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <button className="border border-indigo-400/30 hover:border-indigo-400 text-white font-medium py-3.5 px-8 rounded-full text-lg transition-all duration-300 hover:bg-indigo-700/30 backdrop-blur-sm">
                  Saiba Mais
                </button>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-800 overflow-hidden ring-2 ring-indigo-600 shadow-lg">
                      <Image
                        src={User1 || "/placeholder.svg"}
                        alt="Ilustração de usuario"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-indigo-200">
                  <span className="font-bold text-teal-300  text-end">500+</span> psicólogos já utilizam
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-2xl blur-3xl transform -rotate-6"></div>
                <div className="relative bg-gradient-to-r from-indigo-800/50 to-indigo-700/50 p-2 rounded-2xl backdrop-blur-sm border border-indigo-600/30 shadow-2xl flex justify-center items-center transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
                  <Image
                  src={Apoio || "/placeholder.svg"}
                  alt="Ilustração de psicologia"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-inner"
                  />
                </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-4 shadow-xl transform rotate-3 z-20 border border-teal-300 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-indigo-900" />
                  <div>
                    <div className="text-xs text-indigo-900/70">Satisfação</div>
                    <div className="text-lg font-bold text-indigo-900">98%</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-3 shadow-xl transform -rotate-3 z-20 border border-indigo-100">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="text-xs text-gray-500">Agendamentos</div>
                    <div className="text-sm font-bold text-indigo-900">Simplificados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="funcionalidades" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                <span className="flex items-center justify-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Funcionalidades
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">
                Ferramentas poderosas para sua prática clínica
              </h2>
              <p className="text-lg text-gray-600">
                Nossa plataforma foi desenvolvida especificamente para as necessidades dos psicólogos, com recursos que
                otimizam seu fluxo de trabalho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Agendamento inteligente",
                  description: "Organize suas sessões com facilidade, envie lembretes automáticos e reduza faltas.",
                  color: "bg-blue-500",
                  hoverColor: "group-hover:bg-blue-600",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  icon: FileText,
                  title: "Prontuários eletrônicos",
                  description: "Gerencie prontuários de forma segura, com templates personalizáveis e acesso rápido.",
                  color: "bg-purple-500",
                  hoverColor: "group-hover:bg-purple-600",
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  icon: FileText,
                  title: "Relatórios automáticos",
                  description: "Gere relatórios personalizados com um clique, economizando horas de trabalho manual.",
                  color: "bg-indigo-500",
                  hoverColor: "group-hover:bg-indigo-600",
                  gradient: "from-indigo-500 to-indigo-600",
                },
                {
                  icon: Video,
                  title: "Videoconferência integrada",
                  description:
                    "Realize sessões online diretamente na plataforma, sem necessidade de outros aplicativos.",
                  color: "bg-teal-500",
                  hoverColor: "group-hover:bg-teal-600",
                  gradient: "from-teal-500 to-teal-600",
                },
                {
                  icon: BookOpen,
                  title: "Recursos terapêuticos",
                  description: "Acesse uma biblioteca de materiais de apoio, exercícios e recursos especializados.",
                  color: "bg-green-500",
                  hoverColor: "group-hover:bg-green-600",
                  gradient: "from-green-500 to-green-600",
                },
                {
                  icon: Brain,
                  title: "Assistente com IA",
                  description: "Utilize nossa IA para sugestões de abordagens terapêuticas e análise de padrões.",
                  color: "bg-rose-500",
                  hoverColor: "group-hover:bg-rose-600",
                  gradient: "from-rose-500 to-rose-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200"
                >
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="py-24 bg-gradient-to-b from-slate-50 to-indigo-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                <span className="flex items-center justify-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Benefícios
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">
                Por que escolher nossa plataforma?
              </h2>
              <p className="text-lg text-gray-600">
                Desenvolvida por psicólogos para psicólogos, nossa solução traz benefícios reais para sua prática.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Economia de tempo",
                  description:
                    "Reduza em até 70% o tempo gasto com tarefas administrativas e foque no que realmente importa: seus pacientes.",
                  color: "text-orange-500",
                  bgColor: "bg-orange-100",
                  borderColor: "border-orange-200",
                  shadowColor: "group-hover:shadow-orange-200/50",
                },
                {
                  icon: Lock,
                  title: "Segurança e privacidade",
                  description:
                    "Seus dados e os de seus pacientes estão protegidos com criptografia de ponta a ponta e conformidade com LGPD.",
                  color: "text-blue-500",
                  bgColor: "bg-blue-100",
                  borderColor: "border-blue-200",
                  shadowColor: "group-hover:shadow-blue-200/50",
                },
                {
                  icon: Smile,
                  title: "Interface intuitiva",
                  description:
                    "Design pensado para psicólogos, com fluxos de trabalho naturais e fácil adaptação, sem curva de aprendizado.",
                  color: "text-green-500",
                  bgColor: "bg-green-100",
                  borderColor: "border-green-200",
                  shadowColor: "group-hover:shadow-green-200/50",
                },
                {
                  icon: Headphones,
                  title: "Suporte especializado",
                  description:
                    "Equipe de suporte dedicada, com conhecimento em psicologia, disponível 7 dias por semana para ajudar você.",
                  color: "text-purple-500",
                  bgColor: "bg-purple-100",
                  borderColor: "border-purple-200",
                  shadowColor: "group-hover:shadow-purple-200/50",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-start bg-white p-8 rounded-2xl shadow-lg border ${benefit.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`${benefit.bgColor} ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${benefit.shadowColor}`}
                  >
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-indigo-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: "98%", label: "Satisfação dos usuários", color: "from-teal-400 to-teal-500" },
                { value: "70%", label: "Redução de tarefas administrativas", color: "from-blue-400 to-blue-500" },
                { value: "5x", label: "Mais produtividade", color: "from-purple-400 to-purple-500" },
                { value: "24/7", label: "Suporte disponível", color: "from-indigo-400 to-indigo-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 hover:border-indigo-200"
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                <span className="flex items-center justify-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Depoimentos
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">
                O que os psicólogos estão dizendo?
              </h2>
              <p className="text-lg text-gray-600">
                Centenas de profissionais já transformaram sua prática clínica com nossa plataforma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Dra. Mariana Takahashi",
                  role: "Psicóloga Clínica",
                  image: User2,
                  quote:
                    "Esta plataforma revolucionou minha prática clínica. Reduzi em 60% o tempo gasto com tarefas administrativas e agora posso me dedicar mais aos meus pacientes.",
                  stars: 5,
                  color: "bg-purple-50",
                  borderColor: "border-purple-200",
                  hoverBorderColor: "hover:border-purple-300",
                  iconColor: "text-purple-500",
                },
                {
                  name: "Dr. Carlos Mendes",
                  role: "Psicoterapeuta",
                  image: User3,
                  quote:
                    "A facilidade de uso e a integração com videoconferência tornaram minhas sessões online muito mais eficientes. Meus pacientes adoraram a experiência.",
                  stars: 5,
                  color: "bg-teal-50",
                  borderColor: "border-teal-200",
                  hoverBorderColor: "hover:border-teal-300",
                  iconColor: "text-teal-500",
                },
                {
                  name: "Dra. Juliana Santos",
                  role: "Psicóloga Infantil",
                  image: User4,
                  quote:
                    "Os recursos terapêuticos disponíveis são excelentes e me ajudam a tornar as sessões com crianças mais dinâmicas e produtivas. Recomendo fortemente!",
                  stars: 4,
                  color: "bg-blue-50",
                  borderColor: "border-blue-200",
                  hoverBorderColor: "hover:border-blue-300",
                  iconColor: "text-blue-500",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`${testimonial.color} p-8 rounded-2xl border-2 ${testimonial.borderColor} ${testimonial.hoverBorderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group`}
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center shadow-md">
                    <div className={`${testimonial.iconColor}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="rounded-full mr-4 border-2 border-white shadow-md overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-indigo-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precos" className="py-24 bg-gradient-to-b from-slate-50 to-indigo-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                <span className="flex items-center justify-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Preços
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">Planos que cabem no seu bolso</h2>
              <p className="text-lg text-gray-600">
                Escolha o plano ideal para o seu perfil profissional e comece a transformar sua prática.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Básico",
                  price: "R$ 49",
                  period: "/mês",
                  features: [
                    "Agendamento de sessões",
                    "Prontuários eletrônicos básicos",
                    "Relatórios mensais",
                    "Suporte por email",
                    "Até 20 pacientes",
                  ],
                  color: "border-gray-200 hover:border-indigo-300",
                  buttonColor: "bg-indigo-600 hover:bg-indigo-700",
                  bgColor: "bg-white",
                  shadowColor: "hover:shadow-indigo-200/50",
                },
                {
                  name: "Profissional",
                  price: "R$ 99",
                  period: "/mês",
                  features: [
                    "Tudo do plano Básico",
                    "Integração com videoconferência",
                    "Relatórios semanais personalizados",
                    "Recursos terapêuticos avançados",
                    "Suporte prioritário",
                    "Até 50 pacientes",
                  ],
                  popular: true,
                  color: "border-teal-300 hover:border-teal-400",
                  buttonColor: "bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600",
                  bgColor: "bg-white",
                  shadowColor: "hover:shadow-teal-200/50",
                },
                {
                  name: "Premium",
                  price: "R$ 149",
                  period: "/mês",
                  features: [
                    "Tudo do plano Profissional",
                    "API personalizada",
                    "Treinamento exclusivo",
                    "Gerenciamento de múltiplos consultórios",
                    "Suporte 24/7",
                    "Pacientes ilimitados",
                  ],
                  color: "border-purple-200 hover:border-purple-300",
                  buttonColor: "bg-indigo-600 hover:bg-indigo-700",
                  bgColor: "bg-white",
                  shadowColor: "hover:shadow-purple-200/50",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`${plan.bgColor} p-8 rounded-2xl shadow-xl border-2 ${plan.color} ${plan.shadowColor} transition-all duration-500 hover:-translate-y-3 relative group`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-max">
                      <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white text-sm font-semibold px-6 py-2 rounded-full uppercase inline-block shadow-lg">
                        Mais Escolhido
                      </span>
                    </div>
                  )}

                  <div className={`${plan.popular ? "pt-4" : ""}`}>
                    <h3 className="text-2xl font-bold mb-4 text-indigo-900">{plan.name}</h3>
                    <p className="text-4xl font-bold mb-2 text-indigo-900">
                      {plan.price}
                      <span className="text-xl text-gray-600 font-normal">{plan.period}</span>
                    </p>
                    <p className="text-gray-600 mb-8">Cancele a qualquer momento</p>

                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3.5 px-4 rounded-full font-bold text-white ${plan.buttonColor} transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 flex items-center justify-center`}
                    >
                      Assinar Agora
                      <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center text-indigo-900">Perguntas Frequentes</h3>
              <div className="space-y-5">
                {[
                  {
                    question: "Posso cancelar minha assinatura a qualquer momento?",
                    answer:
                      "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Você continuará tendo acesso até o final do período pago.",
                  },
                  {
                    question: "Como funciona o período de teste gratuito?",
                    answer:
                      "Oferecemos 7 dias de teste gratuito em todos os planos. Você só será cobrado após esse período se decidir continuar usando nossa plataforma.",
                  },
                  {
                    question: "A plataforma é segura para dados sensíveis de pacientes?",
                    answer:
                      "Sim, utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD e do CFP para garantir a segurança e privacidade dos dados.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-900">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block px-3 py-1 bg-indigo-700/50 rounded-full text-teal-300 font-medium text-sm mb-6 border border-indigo-600 backdrop-blur-sm">
              <span className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Comece Hoje Mesmo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar sua prática clínica?</h2>
            <p className="text-xl mb-8 text-indigo-200 max-w-2xl mx-auto leading-relaxed">
              Junte-se a centenas de psicólogos que já transformaram sua forma de trabalhar. Experimente gratuitamente
              por 7 dias e veja a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-bold py-3.5 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 flex items-center justify-center group">
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <button className="border-2 border-indigo-400/30 hover:border-indigo-400 text-white font-medium py-3.5 px-8 rounded-full text-lg transition-all duration-300 hover:bg-indigo-700/30 backdrop-blur-sm">
                Agendar Demonstração
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-sm text-indigo-200">Dados Protegidos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-sm text-indigo-200">Suporte 24/7</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-sm text-indigo-200">Satisfação Garantida</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-sm text-indigo-200">Cancele Quando Quiser</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-indigo-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-8 w-8 text-teal-300" />
                <span className="text-2xl font-bold text-teal-300">PsyTech</span>
              </div>
              <p className="text-indigo-200 mb-6 leading-relaxed">
                Transformando a prática clínica dos psicólogos com tecnologia inovadora.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-indigo-700 hover:border-indigo-600 group"
                  >
                    <social.icon className="w-5 h-5 text-indigo-300 group-hover:text-teal-300 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Links Rápidos</h4>
              <ul className="space-y-3">
                {["Sobre Nós", "Blog", "Carreiras", "Política de Privacidade", "Termos de Uso"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-indigo-200 hover:text-teal-300 transition-colors flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Contato</h4>
              <ul className="space-y-3 text-indigo-200">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>contato@psytech.com</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Segurança</h4>
              <div className="flex flex-col space-y-3">
                <span className="inline-flex items-center text-teal-300">
                  <Shield className="w-5 h-5 mr-2" />
                  Dados Protegidos
                </span>
                <span className="inline-flex items-center text-teal-300">
                  <Lock className="w-5 h-5 mr-2" />
                  Conexão SSL Segura
                </span>
              </div>
              <div className="mt-6 bg-indigo-800/50 p-4 rounded-lg border border-indigo-700">
                <h5 className="font-medium mb-2 text-teal-300">Newsletter</h5>
                <p className="text-sm text-indigo-200 mb-3">Receba dicas e novidades para psicólogos</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="bg-indigo-700/50 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-teal-300 border border-indigo-600"
                  />
                  <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-medium px-3 py-2 rounded-r-md transition-colors">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-indigo-800 text-center">
            <p className="text-sm text-indigo-300">
              &copy; {new Date().getFullYear()} PsyTech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
