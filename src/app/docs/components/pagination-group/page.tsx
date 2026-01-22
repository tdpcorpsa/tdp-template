import { PaginationGroupDemo } from './demo'
import { CodeBlock } from '@/components/ui/code-block'

export default function PaginationGroupDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">PaginationGroup</h1>
      <p className="text-lg text-muted-foreground">
        Componente de paginación que se integra con los parámetros de la URL.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <CodeBlock
          language="bash"
          code="pnpm dlx shadcn@latest add https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/main/public/registry/pagination-group.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <PaginationGroupDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Básico</h3>
          <CodeBlock
            code={`import { PaginationGroup } from '@/components/ui/pagination-group'

export default function ListPage({ data, total }) {
  return (
    <div>
      {/* Lista de items */}
      <PaginationGroup
        total={total}
        pageSize={10}
      />
    </div>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Personalizado</h3>
          <CodeBlock
            code={`import { PaginationGroup } from '@/components/ui/pagination-group'

export default function CustomListPage({ total }) {
  return (
    <div className="mt-8 flex justify-center">
      <PaginationGroup
        total={total}
        pageSize={20}
        siblingCount={2}
        queryKey="p" // Usa ?p=1 en lugar de ?page=1
      />
    </div>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Deshabilitado</h3>
          <CodeBlock
            code={`import { PaginationGroup } from '@/components/ui/pagination-group'

export default function LoadingListPage({ total, isLoading }) {
  return (
    <div>
      <PaginationGroup
        total={total}
        pageSize={10}
        disabled={isLoading}
      />
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
                <td className="p-4 font-mono">total</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">Total de registros</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">pageSize</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">Cantidad de registros por página</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">queryKey</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">
                  Clave del parámetro en la URL (default: &apos;page&apos;)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">siblingCount</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">
                  Número de hermanos a mostrar (default: 1)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">disabled</td>
                <td className="p-4 font-mono">boolean</td>
                <td className="p-4">Deshabilita los controles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
