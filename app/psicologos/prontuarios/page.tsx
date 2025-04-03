"use client"

import { SetStateAction, useState } from "react"
import { useParams } from "next/navigation"
import { AppSidebar } from "@/components/ui/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Calendar, FileText, Mic, Plus, Search, Smile, Frown, Meh, Edit, Trash, Save, Tag } from 'lucide-react'

// Dados de exemplo das anotações
const notesData = [
  {
    id: 1,
    date: "15/03/2024",
    title: "Sessão #12 - Progresso significativo",
    content: "Paciente relata melhora significativa nos sintomas de ansiedade após implementação das técnicas de respiração. Continua enfrentando dificuldades no ambiente de trabalho, mas demonstra maior capacidade de gerenciamento emocional.",
    mood: "neutro",
    tags: ["#ansiedade", "#trabalho", "#progresso"],
    severity: 2,
  },
  {
    id: 2,
    date: "08/03/2024",
    title: "Sessão #11 - Introdução a novas técnicas",
    content: "Paciente continua relatando episódios de ansiedade frequentes. Introduzidas técnicas de respiração diafragmática e mindfulness. Demonstrou resistência inicial, mas aceitou experimentar durante a semana.",
    mood: "negativo",
    tags: ["#ansiedade", "#família", "#técnicas"],
    severity: 3,
  },
  {
    id: 3,
    date: "01/03/2024",
    title: "Sessão #10 - Avaliação de medicação",
    content: "Paciente relata efeitos colaterais leves da medicação (sonolência durante o dia). Encaminhada para reavaliação com psiquiatra.",
    mood: "negativo",
    tags: ["#medicação", "#sono", "#encaminhamento"],
    severity: 4,
  }
]

// Componente de Card de Anotação
interface Note {
  id: number;
  date: string;
  title: string;
  content: string;
  mood: string;
  tags: string[];
  severity: number;
}

function NoteCard({ note, onClick, isActive }: { note: Note; onClick: (note: Note) => void; isActive: boolean }) {
  // Função para obter o ícone de humor
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "positivo": return <Smile className="h-4 w-4 text-green-500" />
      case "negativo": return <Frown className="h-4 w-4 text-red-500" />
      default: return <Meh className="h-4 w-4 text-yellow-500" />
    }
  }

  // Função para obter a cor de severidade
  const getSeverityColor = (severity: number) => {
    switch (severity) {
      case 1: return "bg-green-100 dark:bg-green-900/50"
      case 2: return "bg-blue-100 dark:bg-blue-900/50"
      case 3: return "bg-yellow-100 dark:bg-yellow-900/50"
      case 4: return "bg-orange-100 dark:bg-orange-900/50"
      case 5: return "bg-red-100 dark:bg-red-900/50"
      default: return "bg-gray-100 dark:bg-gray-900/50"
    }
  }

  return (
    <Card 
      className={`mb-3 cursor-pointer transition-all hover:shadow-md ${
        isActive 
          ? "border-indigo-400 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30" 
          : "border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/10"
      }`}
      onClick={() => onClick(note)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium text-indigo-900 dark:text-indigo-100">{note.date}</div>
              <div className={`mt-2 w-1 h-16 rounded-full ${getSeverityColor(note.severity)}`}></div>
            </div>
            <div>
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">{note.title}</h3>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {note.content}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {note.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {getMoodIcon(note.mood)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Componente de Editor de Anotações
function NoteEditor({ note, onSave, onCancel }: { note: Note | null; onSave: (note: Note) => void; onCancel: () => void }) {
  const [editedNote, setEditedNote] = useState<Note>(note || {
    id: Date.now(),
    date: new Date().toLocaleDateString('pt-BR'),
    title: "",
    content: "",
    mood: "neutro",
    tags: [],
    severity: 3,
  })
  
  const [newTag, setNewTag] = useState("")

  const handleAddTag = () => {
    if (newTag && !editedNote.tags.includes(newTag)) {
      setEditedNote({
        ...editedNote,
        tags: [...editedNote.tags, newTag.startsWith('#') ? newTag : `#${newTag}`]
      })
      setNewTag("")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-100">
          {note ? "Editar Anotação" : "Nova Anotação"}
        </h3>
        <Button 
          variant="outline" 
          size="icon" 
          className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
        >
          <Mic className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        </Button>
      </div>

      <div className="space-y-3">
        <Input 
          placeholder="Título da anotação" 
          className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
          value={editedNote.title}
          onChange={(e) => setEditedNote({...editedNote, title: e.target.value})}
        />
        
        <Textarea 
          className="min-h-[200px] border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
          placeholder="Conteúdo da anotação..."
          value={editedNote.content}
          onChange={(e) => setEditedNote({...editedNote, content: e.target.value})}
        />
        
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Tags
            </label>
            <div className="flex gap-2">
              <Input 
                placeholder="Adicionar tag..." 
                className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
                onClick={handleAddTag}
              >
                <Plus className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {editedNote.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Humor
            </label>
            <div className="flex gap-2">
              <Button 
                variant={editedNote.mood === "positivo" ? "default" : "outline"}
                size="sm"
                className={editedNote.mood === "positivo" ? "bg-green-500" : ""}
                onClick={() => setEditedNote({...editedNote, mood: "positivo"})}
              >
                <Smile className="h-4 w-4 mr-1" /> Positivo
              </Button>
              <Button 
                variant={editedNote.mood === "neutro" ? "default" : "outline"}
                size="sm"
                className={editedNote.mood === "neutro" ? "bg-yellow-500" : ""}
                onClick={() => setEditedNote({...editedNote, mood: "neutro"})}
              >
                <Meh className="h-4 w-4 mr-1" /> Neutro
              </Button>
              <Button 
                variant={editedNote.mood === "negativo" ? "default" : "outline"}
                size="sm"
                className={editedNote.mood === "negativo" ? "bg-red-500" : ""}
                onClick={() => setEditedNote({...editedNote, mood: "negativo"})}
              >
                <Frown className="h-4 w-4 mr-1" /> Negativo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
          <Button 
            variant="outline" 
            className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600"
            onClick={() => onSave(editedNote)}
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar
          </Button>
        </div>
      </div>
    </div>
  )
}

// Componente de Visualização de Anotação
function NoteViewer({ note, onEdit, onDelete }: { note: Note | null; onEdit: (note: Note) => void; onDelete: (id: number) => void }) {
  if (!note) return null
  
  // Função para obter o ícone de humor
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "positivo": return <Smile className="h-5 w-5 text-green-500" />
      case "negativo": return <Frown className="h-5 w-5 text-red-500" />
      default: return <Meh className="h-5 w-5 text-yellow-500" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-100">
          {note.title}
        </h3>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
            onClick={() => onEdit(note)}
          >
            <Edit className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            Editar
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-red-200 dark:border-red-800 bg-white dark:bg-red-950/10 text-red-600 dark:text-red-400"
            onClick={() => onDelete(note.id)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Excluir
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{note.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{note.tags.length} tags</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getMoodIcon(note.mood)}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {note.tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-300"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="border border-indigo-200 dark:border-indigo-700 rounded-md bg-white dark:bg-indigo-950/50 p-4">
        <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
          {note.content}
        </p>
      </div>
    </div>
  )
}

export default function PsychologicalNotesPage() {
  const params = useParams()
  const patientId = params.id
  
  const [activeNote, setActiveNote] = useState<Note | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState(notesData)
  const [searchTerm, setSearchTerm] = useState("")
  
  // Filtrar notas
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  
  // Manipular edição de nota
  const handleEditNote = (note: Note) => {
    setActiveNote(note)
    setIsEditing(true)
  }
  
  // Manipular exclusão de nota
  const handleDeleteNote = (noteId: number) => {
    setNotes(notes.filter(note => note.id !== noteId))
    if (activeNote && activeNote.id === noteId) {
      setActiveNote(null)
    }
  }
  
  // Manipular salvamento de nota
const handleSaveNote = (editedNote: {
      severity: number
      tags: string[]
      mood: string
      content: string
      title: string
      id: number 
}) => {
    if (editedNote.id) {
      // Atualizar nota existente
      setNotes(notes.map(note => note.id === editedNote.id ? { ...note, ...editedNote } : note))
    } else {
      // Adicionar nova nota
      const newNote: Note = {
        ...editedNote,
        id: Date.now(),
        date: new Date().toLocaleDateString('pt-BR'),
        title: editedNote.title || "",
        content: editedNote.content || "",
        mood: editedNote.mood || "neutro",
        tags: editedNote.tags || [],
        severity: editedNote.severity || 3,
      }
      setNotes([newNote, ...notes])
      setActiveNote(newNote)
    }
    setIsEditing(false)
  }
  
  // Manipular criação de nova nota
  const handleNewNote = () => {
    setActiveNote(null)
    setIsEditing(true)
  }
  
  // Cancelar edição
  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-indigo-100 dark:border-indigo-800 px-4 bg-white dark:bg-indigo-950/50">
          <SidebarTrigger className="-ml-1 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-indigo-200 dark:bg-indigo-700" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  Prontuários
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-800 dark:text-gray-200">
                  Anotações Psicológicas
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-indigo-950 dark:to-indigo-900 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Coluna da esquerda - Linha do tempo e filtros */}
            <div className="md:col-span-1 space-y-4">
              <Card className="bg-white dark:bg-indigo-900/50 border-indigo-100 dark:border-indigo-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-indigo-900 dark:text-indigo-100">
                      Anotações
                    </CardTitle>
                    <Button 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600"
                      onClick={handleNewNote}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Nova
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {/* Barra de pesquisa */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <Input 
                        placeholder="Buscar anotações..." 
                        className="pl-9 bg-white dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-700 focus-visible:ring-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    {/* Lista de anotações */}
                    <div className="space-y-1">
                      {filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => (
                          <NoteCard 
                            key={note.id} 
                            note={note} 
                            onClick={setActiveNote}
                            isActive={activeNote?.id === note.id}
                          />
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p>Nenhuma anotação encontrada</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Coluna central - Visualização/edição de anotação */}
            <div className="md:col-span-2 space-y-4">
              <Card className="bg-white dark:bg-indigo-900/50 border-indigo-100 dark:border-indigo-800">
                <CardContent className="p-4">
                  {isEditing ? (
                    <NoteEditor 
                      note={activeNote} 
                      onSave={handleSaveNote}
                      onCancel={handleCancelEdit}
                    />
                  ) : activeNote ? (
                    <NoteViewer 
                      note={activeNote} 
                      onEdit={handleEditNote} 
                      onDelete={handleDeleteNote} 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
                      <FileText className="h-16 w-16 mb-4 opacity-50" />
                      <p className="text-lg font-medium">Nenhuma anotação selecionada</p>
                      <p className="text-sm">Selecione uma anotação da lista ou crie uma nova</p>
                      <Button 
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600"
                        onClick={handleNewNote}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Nova Anotação
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
