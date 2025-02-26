import Image from 'next/image'
import Link from 'next/link'
import { Calendar, FileText, Video, BookOpen, Shield, Clock, Lock, Smile, HeadphonesIcon, Check, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-300">
            <Image src="/logo.svg" alt="PsyTech Logo" width={150} height={40} />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#inicio" className="hover:text-yellow-300 transition-colors">Início</Link>
            <Link href="#funcionalidades" className="hover:text-yellow-300 transition-colors">Funcionalidades</Link>
            <Link href="#beneficios" className="hover:text-yellow-300 transition-colors">Benefícios</Link>
            <Link href="#depoimentos" className="hover:text-yellow-300 transition-colors">Depoimentos</Link>
            <Link href="#precos" className="hover:text-yellow-300 transition-colors">Preços</Link>
            <Link href="#contato" className="hover:text-yellow-300 transition-colors">Contato</Link>
          </nav>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-4 rounded-full transition-colors">
            Experimente Grátis
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Transforme sua prática clínica com ferramentas feitas para psicólogos
              </h1>
              <p className="text-xl mb-8 text-purple-200">
                Organize sessões, gerencie pacientes e otimize seu tempo com nossa extensão especializada.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Comece Agora
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero-illustration.svg"
                alt="Ilustração de psicologia"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="funcionalidades" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">O que nossa extensão oferece?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: 'Agendamento automático', description: 'Organize suas sessões com facilidade e eficiência.' },
                { icon: FileText, title: 'Prontuários eletrônicos', description: 'Gerencie prontuários de forma segura e prática.' },
                { icon: FileText, title: 'Relatórios automáticos', description: 'Gere relatórios personalizados com um clique.' },
                { icon: Video, title: 'Integração com videoconferência', description: 'Realize sessões online integradas à plataforma.' },
                { icon: BookOpen, title: 'Recursos terapêuticos', description: 'Acesse materiais de apoio e recursos especializados.' }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-purple-200 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Por que escolher nossa extensão?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: 'Economia de tempo', description: 'Otimize suas tarefas administrativas e foque no que realmente importa.' },
                { icon: Lock, title: 'Segurança e privacidade', description: 'Seus dados e os de seus pacientes estão protegidos com a mais alta segurança.' },
                { icon: Smile, title: 'Interface intuitiva', description: 'Fácil de usar, sem necessidade de treinamento extensivo.' },
                { icon: HeadphonesIcon, title: 'Suporte especializado', description: 'Equipe de suporte dedicada, com conhecimento em psicologia.' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md border border-purple-200 hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-12 h-12 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">O que os psicólogos estão dizendo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Dra. Ana Silva', role: 'Psicóloga Clínica', image: '/ana-silva.jpg', quote: 'Esta extensão revolucionou minha prática clínica. Agora posso me concentrar mais nos meus pacientes e menos na papelada.' },
                { name: 'Dr. Carlos Mendes', role: 'Psicoterapeuta', image: '/carlos-mendes.jpg', quote: 'A facilidade de uso e a integração com videoconferência tornaram minhas sessões online muito mais eficientes.' },
                { name: 'Dra. Mariana Costa', role: 'Psicóloga Infantil', image: '/mariana-costa.jpg', quote: 'Os recursos terapêuticos disponíveis são excelentes e me ajudam a tornar as sessões mais dinâmicas e produtivas.' }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-purple-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Planos que cabem no seu bolso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Básico', price: 'R$ 49', period: '/mês', features: ['Agendamento de sessões', 'Prontuários eletrônicos básicos', 'Relatórios mensais', 'Suporte por email'] },
                { name: 'Profissional', price: 'R$ 99', period: '/mês', features: ['Tudo do plano Básico', 'Integração com videoconferência', 'Relatórios semanais personalizados', 'Recursos terapêuticos avançados', 'Suporte prioritário'], popular: true },
                { name: 'Premium', price: 'R$ 149', period: '/mês', features: ['Tudo do plano Profissional', 'API personalizada', 'Treinamento exclusivo', 'Gerenciamento de múltiplos consultórios', 'Suporte 24/7'] }
              ].map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-lg shadow-md border ${plan.popular ? 'border-green-500' : 'border-purple-200'} hover:shadow-lg transition-shadow`}>
                  {plan.popular && (
                    <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                      Mais Escolhido
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-purple-800">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-2 text-purple-900">{plan.price}<span className="text-xl text-gray-600 font-normal">{plan.period}</span></p>
                  <ul className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 px-4 rounded-full font-bold ${plan.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-purple-900' : 'bg-purple-600 hover:bg-purple-700 text-white'} transition-colors`}>
                    Assinar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para revolucionar sua prática clínica?</h2>
            <p className="text-xl mb-8 text-purple-200">Experimente gratuitamente por 7 dias e veja a diferença.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
              Comece Agora
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PsyTech</h3>
              <p className="text-sm text-purple-200">Transformando a prática clínica dos psicólogos com tecnologia inovadora.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-purple-200 hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="#" className="text-purple-200 hover:text-white transition-colors">Política de Privacidade</Link></li>
                <li><Link href="#" className="text-purple-200 hover:text-white transition-colors">Termos de Uso</Link></li>
                <li><Link href="#" className="text-purple-200 hover:text-white transition-colors">Suporte</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-sm text-purple-200 mb-2">Email: contato@psytech.com</p>
              <p className="text-sm text-purple-200 mb-4">Telefone: (11) 1234-5678</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Segurança</h4>
              <div className="flex flex-col space-y-2">
                <span className="inline-flex items-center text-green-400">
                  <Shield className="w-5 h-5 mr-2" />
                  Dados Protegidos
                </span>
                <span className="inline-flex items-center text-green-400">
                  <Lock className="w-5 h-5 mr-2" />
                  Conexão SSL Segura
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center">
            <p className="text-sm text-purple-200">&copy; {new Date().getFullYear()} PsyTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
