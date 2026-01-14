import { AlertConfirmationDemo } from './demo'
import { CodeBlock } from '@/components/ui/code-block'

export default function AlertConfirmationDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AlertConfirmation</h1>
      <p className="text-lg text-muted-foreground">
        Diálogo de confirmación que requiere que el usuario escriba una palabra
        clave para confirmar una acción destructiva o importante.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <CodeBlock
          language="bash"
          code="pnpm dlx shadcn@latest add https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/main/public/registry/alert-confirmation.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <AlertConfirmationDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Básico</h3>
          <CodeBlock
            code={`import { AlertConfirmation } from '@/components/ui/alert-confirmation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function BasicExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Acción Importante</Button>
      <AlertConfirmation
        open={open}
        onOpenChange={setOpen}
        title="Confirmar Acción"
        description="Por favor confirma que deseas realizar esta acción."
        confirmWord="CONFIRMAR"
        onConfirm={() => console.log('Confirmado')}
      />
    </>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Destructivo</h3>
          <CodeBlock
            code={`import { AlertConfirmation } from '@/components/ui/alert-confirmation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function DestructiveExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>Eliminar Usuario</Button>
      <AlertConfirmation
        open={open}
        onOpenChange={setOpen}
        title="¿Estás absolutamente seguro?"
        description="Esta acción no se puede deshacer. Esto eliminará permanentemente el usuario."
        confirmWord="ELIMINAR"
        variant="destructive"
        onConfirm={async () => {
           // await deleteUser()
        }}
      />
    </>
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
                <td className="p-4 font-mono">open</td>
                <td className="p-4 font-mono">boolean</td>
                <td className="p-4">Controla la visibilidad del diálogo</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">onOpenChange</td>
                <td className="p-4 font-mono">{`(open: boolean) => void`}</td>
                <td className="p-4">Callback cuando cambia la visibilidad</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">title</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Título del diálogo</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">description</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">Descripción o mensaje de advertencia</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">confirmWord</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">
                  Palabra que el usuario debe escribir para confirmar
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">onConfirm</td>
                <td className="p-4 font-mono">{`() => unknown | Promise<unknown>`}</td>
                <td className="p-4">Función a ejecutar al confirmar</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">variant</td>
                <td className="p-4 font-mono">'default' | 'destructive'</td>
                <td className="p-4">Estilo del botón de confirmación</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
