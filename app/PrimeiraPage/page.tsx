import { Bell, Home, PieChart, Settings, Users } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 p-6 text-white">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Olá Paulo</h1>
              <p className="text-sm text-gray-300">4 Novas notificações</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-600" />
          </div>
        </header>

        {/* Mobile App Design Section */}
        <div className="mb-8 rounded-2xl bg-white/10 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Mobile App Design</h2>
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-400" />
              <div className="h-8 w-8 rounded-full bg-gray-500" />
            </div>
          </div>
        </div>

        {/* Monthly Review Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Monthly Review</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-3xl font-bold">22</div>
              <div className="text-sm text-gray-300">Completed Tasks</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-gray-300">Pending Tasks</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-gray-300">Meetings</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-3xl font-bold">10</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
          <div className="mx-auto max-w-md">
            <div className="flex items-center justify-around p-4">
              <Home className="h-6 w-6" />
              <PieChart className="h-6 w-6" />
              <Users className="h-6 w-6" />
              <Bell className="h-6 w-6" />
              <Settings className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
