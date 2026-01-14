import { SkeletonListDemo } from './demo'

export default function SkeletonListDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SkeletonList</h1>
      <p className="text-lg text-muted-foreground">
        Componente para mostrar estados de carga en listas, tablas o tarjetas.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50">
            <code>
              pnpm dlx shadcn@latest add
              https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/register-components/public/registry/skeleton-list.json
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <SkeletonListDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Lista (Por Defecto)</h3>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { SkeletonList } from '@/components/ui/skeleton-list'

export default function LoadingPage() {
  return (
    <div className="space-y-4">
      <SkeletonList />
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Tabla</h3>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { SkeletonList } from '@/components/ui/skeleton-list'

export default function LoadingTable() {
  return (
    <div className="border rounded-md">
      <SkeletonList
        variant="table"
        count={5} // 5 filas
        columns={4} // 4 columnas
      />
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Tarjetas</h3>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { SkeletonList } from '@/components/ui/skeleton-list'

export default function LoadingCards() {
  return (
    <div>
      <SkeletonList
        variant="card"
        count={6}
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  )
}`}</code>
            </pre>
          </div>
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
                <td className="p-4 font-mono">variant</td>
                <td className="p-4 font-mono">'table' | 'list' | 'card'</td>
                <td className="p-4">Tipo de visualización (default: 'list')</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">count</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">
                  Cantidad de items a mostrar (default: 10)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">columns</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">
                  Número de columnas (solo para variant='table')
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">className</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Clases adicionales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
