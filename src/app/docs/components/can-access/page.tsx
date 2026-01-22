import { CanAccessDemo } from './demo'
import { CodeBlock } from '@/components/ui/code-block'

export default function CanAccessDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">CanAccess</h1>
      <p className="text-lg text-muted-foreground">
        Componente para restringir el acceso a partes de la UI basado en
        permisos.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <CodeBlock
          language="bash"
          code="pnpm dlx shadcn@latest add https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/main/public/registry/can-access.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <p className="text-sm text-muted-foreground">
          En este demo, el usuario tiene permiso para{' '}
          <code>marketing:campaigns:create</code> pero no para{' '}
          <code>marketing:campaigns:update</code>.
        </p>
        <CanAccessDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Básico</h3>
          <CodeBlock
            code={`import CanAccess from '@/components/ui/can-access'
import { Button } from '@/components/ui/button'

export function CreateCampaignButton() {
  return (
    <CanAccess
      subdomain="marketing"
      resource="campaigns"
      action="create"
    >
      <Button>Crear Campaña</Button>
    </CanAccess>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">
            Deshabilitar (variant=&quot;disabled&quot;)
          </h3>
          <p className="text-sm text-muted-foreground">
            En lugar de ocultar o mostrar un error, deshabilita el componente
            hijo.
          </p>
          <CodeBlock
            code={`import CanAccess from '@/components/ui/can-access'
import { Button } from '@/components/ui/button'

export function EditCampaignButton() {
  return (
    <CanAccess
      subdomain="marketing"
      resource="campaigns"
      action="update"
      variant="disabled"
    >
      <Button>Editar Campaña</Button>
    </CanAccess>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">
            Página Prohibida (variant=&quot;page&quot; - Default)
          </h3>
          <p className="text-sm text-muted-foreground">
            Muestra una pantalla de error 403 cuando no hay permiso.
          </p>
          <CodeBlock
            code={`import CanAccess from '@/components/ui/can-access'

export function ProtectedSection() {
  return (
    <CanAccess
        subdomain="settings"
        resource="advanced"
        action="read"
        // variant="page" es el valor por defecto
    >
        <div className="p-4 border rounded">
            <h2>Configuración Avanzada</h2>
            <p>Aquí van las configuraciones avanzadas...</p>
        </div>
    </CanAccess>
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
                <td className="p-4 font-mono">subdomain</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Subdominio del módulo (ej: marketing)</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">resource</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Recurso a acceder (ej: campaigns)</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">action</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">
                  Acción requerida (ej: create, read, update)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">variant</td>
                <td className="p-4 font-mono">
                  &apos;page&apos; | &apos;disabled&apos;
                </td>
                <td className="p-4">
                  Variante del comportamiento cuando no hay acceso.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">children</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">Contenido a mostrar si tiene acceso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
