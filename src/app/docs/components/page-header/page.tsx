import { PageHeaderDemo } from './demo'
import { CodeBlock } from '@/components/ui/code-block'

export default function PageHeaderDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">PageHeader</h1>
      <p className="text-lg text-muted-foreground">
        Encabezado estándar para las páginas, incluye título, descripción y
        acciones opcionales.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <CodeBlock
          language="bash"
          code="pnpm dlx shadcn@latest add https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/main/public/registry/page-header.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <PageHeaderDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Básico</h3>
          <CodeBlock
            code={`import { PageHeader } from '@/components/ui/page-header'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Bienvenido al panel de control"
      />
      {/* Contenido de la página */}
    </div>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Con Acciones</h3>
          <CodeBlock
            code={`import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Usuarios"
        description="Gestiona los usuarios del sistema"
        actions={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Usuario
          </Button>
        }
      />
      {/* Lista de usuarios */}
    </div>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Sin Sidebar Trigger</h3>
          <CodeBlock
            code={`import { PageHeader } from '@/components/ui/page-header'

export default function PublicPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Página Pública"
        withSidebar={false}
      />
      {/* Contenido */}
    </div>
  )
}`}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="border rounded-md">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 font-medium">Prop</th>
                <th className="p-4 font-medium">Tipo</th>
                <th className="p-4 font-medium">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-mono">title</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Título de la página</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">description</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Descripción breve (opcional)</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">actions</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">
                  Elementos de acción (botones, etc.) a la derecha
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">withSidebar</td>
                <td className="p-4 font-mono">boolean</td>
                <td className="p-4">
                  Muestra el trigger del sidebar (por defecto true)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
