"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Calendar,
  FileText,
  Users,
  Clock,
  BarChart,
  Settings,
  Bell,
  Search,
  MessageSquare,
  Brain,
  ClipboardList,
  BookOpen,
  Video,
  PlusCircle,
  ChevronRight,
  Menu,
  LogOut,
  Filter,
  MoreHorizontal,
  UserPlus,
  Phone,
  Mail,
  MapPin,
  Star,
  UserCheck,
  History,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PatientsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("patients")
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Mock patient data
  const patients = [
    {
      id: "1",
      name: "Carlos Mendes",
      age: 35,
      status: "Ativo",
      nextSession: "19/03/2024",
      lastSession: "12/03/2024",
      email: "carlos.mendes@email.com",
      phone: "(11) 98765-4321",
      address: "Rua das Flores, 123 - São Paulo",
      type: "Terapia Cognitivo-Comportamental",
      progress: 75,
      sessions: 12,
      notes: "Apresentando melhora significativa nas últimas sessões. Redução de episódios de ansiedade.",
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Mariana Santos",
      age: 28,
      status: "Ativo",
      nextSession: "20/03/2024",
      lastSession: "12/03/2024",
      email: "mariana.santos@email.com",
      phone: "(11) 91234-5678",
      address: "Av. Paulista, 1000 - São Paulo",
      type: "Primeira Consulta",
      progress: 30,
      sessions: 3,
      notes: "Iniciando tratamento. Apresenta sintomas de ansiedade social.",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Pedro Alves",
      age: 42,
      status: "Ativo",
      nextSession: "19/03/2024",
      lastSession: "12/03/2024",
      email: "pedro.alves@email.com",
      phone: "(11) 99876-5432",
      address: "Rua Augusta, 500 - São Paulo",
      type: "Sessão Online",
      progress: 60,
      sessions: 8,
      notes: "Progresso moderado. Trabalhando questões relacionadas ao estresse no trabalho.",
      avatar: "/placeholder.svg",
    },
    {
      id: "4",
      name: "Juliana Costa",
      age: 31,
      status: "Ativo",
      nextSession: "15/03/2024",
      lastSession: "08/03/2024",
      email: "juliana.costa@email.com",
      phone: "(11) 97654-3210",
      address: "Rua Oscar Freire, 300 - São Paulo",
      type: "Terapia de Casal",
      progress: 45,
      sessions: 6,
      notes: "Comparece com o parceiro. Trabalhando questões de comunicação.",
      avatar: "/placeholder.svg",
    },
    {
      id: "5",
      name: "Rafael Oliveira",
      age: 25,
      status: "Ativo",
      nextSession: "17/03/2024",
      lastSession: "10/03/2024",
      email: "rafael.oliveira@email.com",
      phone: "(11) 95432-1098",
      address: "Rua Consolação, 200 - São Paulo",
      type: "Acompanhamento",
      progress: 80,
      sessions: 15,
      notes: "Boa evolução. Redução significativa dos sintomas de depressão.",
      avatar: "/placeholder.svg",
    },
    {
      id: "6",
      name: "Fernanda Lima",
      age: 39,
      status: "Inativo",
      nextSession: "-",
      lastSession: "15/02/2024",
      email: "fernanda.lima@email.com",
      phone: "(11) 93210-9876",
      address: "Av. Rebouças, 150 - São Paulo",
      type: "Terapia Individual",
      progress: 90,
      sessions: 20,
      notes: "Tratamento concluído. Paciente recebeu alta.",
      avatar: "/placeholder.svg",
    },
  ]

  // Filter patients based on search query and status filter
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || patient.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  // Get the selected patient details
  const patientDetails = selectedPatient ? patients.find((p) => p.id === selectedPatient) : null

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } flex flex-col fixed h-full z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" className={`flex items-center gap-2 ${!isSidebarOpen && "justify-center"}`}>
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                PsyTech
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-gray-500 hover:text-indigo-600">
            {isSidebarOpen ? <ChevronRight className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {[
              { name: "Dashboard", icon: BarChart, href: "#dashboard", id: "dashboard" },
              { name: "Pacientes", icon: Users, href: "#patients", id: "patients" },
              { name: "Agenda", icon: Calendar, href: "#agenda", id: "agenda" },
              { name: "Prontuários", icon: FileText, href: "#records", id: "records" },
              { name: "Sessões Online", icon: Video, href: "#sessions", id: "sessions" },
              { name: "Recursos", icon: BookOpen, href: "#resources", id: "resources" },
              { name: "Relatórios", icon: ClipboardList, href: "#reports", id: "reports" },
              { name: "Mensagens", icon: MessageSquare, href: "#messages", id: "messages", badge: 3 },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center ${
                  !isSidebarOpen ? "justify-center" : "justify-between"
                } px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className={`flex items-center ${!isSidebarOpen ? "justify-center" : ""}`}>
                  <item.icon className={`${!isSidebarOpen ? "h-6 w-6" : "h-5 w-5 mr-3"}`} />
                  {isSidebarOpen && <span>{item.name}</span>}
                </div>
                {isSidebarOpen && item.badge && (
                  <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          {isSidebarOpen ? (
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border-2 border-indigo-100">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ana Silva" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Dra. Ana Silva</p>
                <p className="text-xs text-gray-500">Psicóloga Clínica</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Avatar className="h-10 w-10 border-2 border-indigo-100">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ana Silva" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          )}

          <div className="mt-4">
            <Button
              variant="outline"
              className={`w-full text-gray-600 hover:text-indigo-600 hover:border-indigo-600 ${
                !isSidebarOpen && "p-2 flex justify-center"
              }`}
            >
              <Settings className={`${!isSidebarOpen ? "h-5 w-5" : "h-4 w-4 mr-2"}`} />
              {isSidebarOpen && "Configurações"}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 overflow-y-auto h-[calc(100vh-57px)]">
          <Tabs defaultValue="patients" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Pacientes</h1>
                <p className="text-gray-600">Gerencie seus pacientes e acesse informações</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Novo Paciente
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Adicionar Novo Paciente</DialogTitle>
                    <DialogDescription>
                      Preencha as informações do novo paciente. Você poderá editar estes dados posteriormente.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right text-sm font-medium">
                        Nome
                      </label>
                      <Input id="name" className="col-span-3" placeholder="Nome completo" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="email" className="text-right text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" className="col-span-3" type="email" placeholder="email@exemplo.com" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="phone" className="text-right text-sm font-medium">
                        Telefone
                      </label>
                      <Input id="phone" className="col-span-3" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="age" className="text-right text-sm font-medium">
                        Idade
                      </label>
                      <Input id="age" className="col-span-3" type="number" placeholder="Idade" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="type" className="text-right text-sm font-medium">
                        Tipo
                      </label>
                      <Select>
                        <SelectTrigger id="type" className="col-span-3">
                          <SelectValue placeholder="Selecione o tipo de terapia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Terapia Individual</SelectItem>
                          <SelectItem value="couple">Terapia de Casal</SelectItem>
                          <SelectItem value="family">Terapia Familiar</SelectItem>
                          <SelectItem value="cbt">Terapia Cognitivo-Comportamental</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Adicionar Paciente</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <TabsContent value="patients" className="space-y-6">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="search"
                        placeholder="Buscar pacientes..."
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="ativo">Ativos</SelectItem>
                          <SelectItem value="inativo">Inativos</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 bg-gray-50 p-4 border-b text-sm font-medium text-gray-600">
                      <div className="col-span-4">Nome</div>
                      <div className="col-span-2">Idade</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Próxima Sessão</div>
                      <div className="col-span-2 text-right">Ações</div>
                    </div>

                    {filteredPatients.map((patient) => (
                      <div
                        key={patient.id}
                        className={`grid grid-cols-12 p-4 border-b hover:bg-gray-50 items-center text-sm ${
                          selectedPatient === patient.id ? "bg-indigo-50" : ""
                        }`}
                        onClick={() => setSelectedPatient(patient.id)}
                      >
                        <div className="col-span-4 flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={patient.avatar} alt={patient.name} />
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-gray-900">{patient.name}</span>
                        </div>
                        <div className="col-span-2">{patient.age} anos</div>
                        <div className="col-span-2">
                          <Badge
                            variant="outline"
                            className={`${
                              patient.status === "Ativo"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                            }`}
                          >
                            {patient.status}
                          </Badge>
                        </div>
                        <div className="col-span-2">{patient.nextSession}</div>
                        <div className="col-span-2 flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-indigo-600">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-indigo-600">
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-500 hover:text-indigo-600"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <UserCheck className="h-4 w-4 mr-2" />
                                Ver Perfil
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Enviar Mensagem
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                Agendar Sessão
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remover Paciente
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}

                    {filteredPatients.length === 0 && (
                      <div className="p-8 text-center">
                        <Users className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum paciente encontrado</h3>
                        <p className="text-gray-500">Tente ajustar seus filtros ou adicione um novo paciente.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="text-sm text-gray-500">
                    Mostrando {filteredPatients.length} de {patients.length} pacientes
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm">
                      Próximo
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {selectedPatient && patientDetails && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle>Perfil do Paciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center mb-6">
                        <Avatar className="h-24 w-24 mb-4">
                          <AvatarImage src={patientDetails.avatar} alt={patientDetails.name} />
                          <AvatarFallback className="text-2xl">
                            {patientDetails.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold text-gray-900">{patientDetails.name}</h3>
                        <p className="text-gray-500">{patientDetails.age} anos</p>
                        <Badge
                          variant="outline"
                          className={`mt-2 ${
                            patientDetails.status === "Ativo"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-gray-50 text-gray-700 border-gray-200"
                          }`}
                        >
                          {patientDetails.status}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Email</p>
                            <p className="text-sm text-gray-600">{patientDetails.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Telefone</p>
                            <p className="text-sm text-gray-600">{patientDetails.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Endereço</p>
                            <p className="text-sm text-gray-600">{patientDetails.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Star className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Tipo de Terapia</p>
                            <p className="text-sm text-gray-600">{patientDetails.type}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <Button variant="outline" size="sm" className="w-full">
                        Editar Perfil
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Histórico e Progresso</CardTitle>
                        <Tabs defaultValue="info" className="w-[400px]">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="info">Informações</TabsTrigger>
                            <TabsTrigger value="sessions">Sessões</TabsTrigger>
                            <TabsTrigger value="notes">Notas</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <TabsContent value="info" className="mt-0">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Progresso do Tratamento</h4>
                            <div className="mb-2">
                              <div className="flex justify-between mb-1">
                                <span className="text-xs font-medium text-gray-700">Progresso geral</span>
                                <span className="text-xs font-medium text-gray-700">{patientDetails.progress}%</span>
                              </div>
                              <Progress value={patientDetails.progress} className="h-2" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-medium">Resumo</h4>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Total de sessões</span>
                                  <span className="font-medium">{patientDetails.sessions}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Última sessão</span>
                                  <span className="font-medium">{patientDetails.lastSession}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Próxima sessão</span>
                                  <span className="font-medium">{patientDetails.nextSession}</span>
                                </div>
                              </div>
                            </div>

                            <div className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-medium">Observações</h4>
                              </div>
                              <p className="text-sm text-gray-600">{patientDetails.notes}</p>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-medium">Objetivos do Tratamento</h4>
                              <Button variant="ghost" size="sm" className="h-8 text-indigo-600 hover:text-indigo-800">
                                <PlusCircle className="h-4 w-4 mr-1" />
                                Adicionar
                              </Button>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-start gap-2">
                                <Checkbox id="goal1" checked />
                                <label
                                  htmlFor="goal1"
                                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Reduzir sintomas de ansiedade em situações sociais
                                </label>
                              </div>
                              <div className="flex items-start gap-2">
                                <Checkbox id="goal2" checked />
                                <label
                                  htmlFor="goal2"
                                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Desenvolver estratégias de enfrentamento para o estresse
                                </label>
                              </div>
                              <div className="flex items-start gap-2">
                                <Checkbox id="goal3" />
                                <label
                                  htmlFor="goal3"
                                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Melhorar qualidade do sono e estabelecer rotina saudável
                                </label>
                              </div>
                              <div className="flex items-start gap-2">
                                <Checkbox id="goal4" />
                                <label
                                  htmlFor="goal4"
                                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Trabalhar questões de autoestima e autoconfiança
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="sessions" className="mt-0">
                        <div className="space-y-4">
                          {[...Array(4)].map((_, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                  <span className="text-sm font-medium">
                                    {new Date(2024, 2, 12 - index * 7).toLocaleDateString("pt-BR", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    })}
                                  </span>
                                </div>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Concluída
                                </Badge>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-3">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>09:00 - 10:00</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {index === 0
                                  ? "Paciente relatou melhora nos sintomas de ansiedade. Continuamos trabalhando técnicas de respiração e mindfulness."
                                  : "Sessão focada em estratégias para lidar com situações de estresse no trabalho."}
                              </p>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Ver Notas
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="notes" className="mt-0">
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-medium">Notas Clínicas</h4>
                              <Button variant="outline" size="sm">
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Nova Nota
                              </Button>
                            </div>
                            <div className="space-y-4">
                              {[...Array(3)].map((_, index) => (
                                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                                  <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">
                                      {new Date(2024, 2, 12 - index * 7).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                      })}
                                    </span>
                                    <Button variant="ghost" size="sm" className="h-6 text-gray-500">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {index === 0
                                      ? "Paciente demonstrou progresso significativo na gestão da ansiedade. Relatou usar as técnicas de respiração diariamente com bons resultados."
                                      : "Discutimos estratégias para melhorar a comunicação assertiva em ambiente de trabalho. Paciente receptivo às sugestões."}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <Button variant="outline" size="sm">
                        <History className="h-4 w-4 mr-2" />
                        Ver Histórico Completo
                      </Button>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Calendar className="h-4 w-4 mr-2" />
                        Agendar Sessão
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

