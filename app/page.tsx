"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, use } from "react"
import {
  Calendar,
  FileText,
  Video,
  BookOpen,
  Shield,
  Clock,
  Lock,
  Smile,
  Headphones,
  Check,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Brain,
  Heart,
  Star,
} from "lucide-react"

import User1 from "@/components/images/user_1.jpg"
import User2 from "@/components/images/user_2.jpg"
import User3 from "@/components/images/user_3.jpg"
import User4 from "@/components/images/user_4.jpg"



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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header
        className={`${isScrolled ? "bg-indigo-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"} text-black sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-teal-300 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Brain className="h-8 w-8 text-teal-300" />
            <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent font-extrabold">
              PsyTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {["inicio", "funcionalidades", "beneficios", "depoimentos", "precos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${activeSection === item ? "text-black font-medium" : "text-zinc-400"} 
                  hover:text-black transition-colors relative py-1`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0. rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-bold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1">
            Experimente Grátis
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full bg-indigo-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["inicio", "funcionalidades", "beneficios", "depoimentos", "precos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${activeSection === item ? "text-teal-300 font-medium" : "text-gray-200"} 
                  hover:text-teal-300 transition-colors py-2 text-left`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-bold py-3 px-6 rounded-full w-full">
              Experimente Grátis
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="pt-24 pb-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white overflow-hidden relative"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fadeIn">
              <div className="inline-block px-3 py-1 bg-indigo-700/50 rounded-full text-teal-300 font-medium text-sm mb-6 border border-indigo-600">
                Plataforma para Psicólogos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Transforme sua</span>
                <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                  prática clínica
                </span>
              </h1>
              <p className="text-xl mb-8 text-indigo-100 max-w-lg">
                Organize sessões, gerencie pacientes e otimize seu tempo com nossa plataforma especializada para
                psicólogos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 flex items-center justify-center">
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-teal-400/30 hover:border-teal-400 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-indigo-700/30">
                  Saiba Mais
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-800 overflow-hidden">
                      <Image
                       src={User1} 
                       alt="User1"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-indigo-200">
                  <span className="font-bold text-teal-300">500+</span> psicólogos já utilizam
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-2xl blur-3xl transform -rotate-6"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Ilustração de psicologia"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10 border border-indigo-700/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-4 shadow-xl transform rotate-3 z-20">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-indigo-900" />
                  <div>
                    <div className="text-xs text-indigo-900/70">Satisfação</div>
                    <div className="text-lg font-bold text-indigo-900">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-blue-50"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c67.6,0,124.85-16.82,187.19-43.3,62.34-26.48,121.87-59.42,171-76.41Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </section>

        {/* Features */}
        <section id="funcionalidades" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                Funcionalidades
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
                },
                {
                  icon: FileText,
                  title: "Prontuários eletrônicos",
                  description: "Gerencie prontuários de forma segura, com templates personalizáveis e acesso rápido.",
                  color: "bg-purple-500",
                  hoverColor: "group-hover:bg-purple-600",
                },
                {
                  icon: FileText,
                  title: "Relatórios automáticos",
                  description: "Gere relatórios personalizados com um clique, economizando horas de trabalho manual.",
                  color: "bg-indigo-500",
                  hoverColor: "group-hover:bg-indigo-600",
                },
                {
                  icon: Video,
                  title: "Videoconferência integrada",
                  description:
                    "Realize sessões online diretamente na plataforma, sem necessidade de outros aplicativos.",
                  color: "bg-teal-500",
                  hoverColor: "group-hover:bg-teal-600",
                },
                {
                  icon: BookOpen,
                  title: "Recursos terapêuticos",
                  description: "Acesse uma biblioteca de materiais de apoio, exercícios e recursos especializados.",
                  color: "bg-green-500",
                  hoverColor: "group-hover:bg-green-600",
                },
                {
                  icon: Brain,
                  title: "Assistente com IA",
                  description: "Utilize nossa IA para sugestões de abordagens terapêuticas e análise de padrões.",
                  color: "bg-rose-500",
                  hoverColor: "group-hover:bg-rose-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-colors duration-300 ${feature.hoverColor}`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                Benefícios
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
                },
                {
                  icon: Lock,
                  title: "Segurança e privacidade",
                  description:
                    "Seus dados e os de seus pacientes estão protegidos com criptografia de ponta a ponta e conformidade com LGPD.",
                  color: "text-blue-500",
                  bgColor: "bg-blue-100",
                },
                {
                  icon: Smile,
                  title: "Interface intuitiva",
                  description:
                    "Design pensado para psicólogos, com fluxos de trabalho naturais e fácil adaptação, sem curva de aprendizado.",
                  color: "text-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  icon: Headphones,
                  title: "Suporte especializado",
                  description:
                    "Equipe de suporte dedicada, com conhecimento em psicologia, disponível 7 dias por semana para ajudar você.",
                  color: "text-purple-500",
                  bgColor: "bg-purple-100",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div
                    className={`${benefit.bgColor} ${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-indigo-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
                  className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-xl"
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
                Depoimentos
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
                  color: "bg-purple-100 border-purple-200",
                },
                {
                  name: "Dr. Carlos Mendes",
                  role: "Psicoterapeuta",
                  image: User3,
                  quote:
                  "A facilidade de uso e a integração com videoconferência tornaram minhas sessões online muito mais eficientes. Meus pacientes adoraram a experiência.",
                  stars: 5,
                  color: "bg-teal-100 border-teal-200",
                },
                {
                  name: "Dra. Mariana Takahashi",
                  role: "Psicóloga Infantil",
                  image: User4,
                  quote:
                  "Os recursos terapêuticos disponíveis são excelentes e me ajudam a tornar as sessões com crianças mais dinâmicas e produtivas. Recomendo fortemente!",
                  stars: 4,
                  color: "bg-blue-100 border-blue-200",
                },
                ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`${testimonial.color} p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                  <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                  ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                  <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-white"
                  />
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
        <section id="precos" className="py-24 bg-gradient-to-b from-indigo-50 to-blue-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-4">
                Preços
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
                  color: "border-teal-200 hover:border-teal-300",
                  buttonColor: "bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600",
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
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${plan.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-max">
                      <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase inline-block shadow-lg">
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

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-4 rounded-full font-bold text-white ${plan.buttonColor} transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                    >
                      Assinar Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center text-indigo-900">Perguntas Frequentes</h3>
              <div className="space-y-4">
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
                  <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-100">
                    <h4 className="text-lg font-semibold mb-2 text-indigo-900">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar sua prática clínica?</h2>
            <p className="text-xl mb-8 text-indigo-200 max-w-2xl mx-auto">
              Junte-se a centenas de psicólogos que já transformaram sua forma de trabalhar. Experimente gratuitamente
              por 7 dias e veja a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-indigo-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 flex items-center justify-center">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-teal-400/30 hover:border-teal-400 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-indigo-700/30">
                Agendar Demonstração
              </button>
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
              <p className="text-indigo-200 mb-6">
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
                    className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Links Rápidos</h4>
              <ul className="space-y-3">
                {["Sobre Nós", "Blog", "Carreiras", "Política de Privacidade", "Termos de Uso"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-indigo-200 hover:text-teal-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Contato</h4>
              <ul className="space-y-3 text-indigo-200">
                <li>Email: contato@psytech.com</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>São Paulo, SP - Brasil</li>
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
              <div className="mt-6 bg-indigo-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 text-teal-300">Newsletter</h5>
                <p className="text-sm text-indigo-200 mb-3">Receba dicas e novidades para psicólogos</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="bg-indigo-700 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-teal-300"
                  />
                  <button className="bg-teal-500 hover:bg-teal-600 text-indigo-900 font-medium px-3 py-2 rounded-r-md transition-colors">
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

// Add these styles to your globals.css

