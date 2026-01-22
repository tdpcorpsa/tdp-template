import { SearchInputDemo } from './demo'
import { CodeBlock } from '@/components/ui/code-block'

export default function SearchInputDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SearchInput</h1>
      <p className="text-lg text-muted-foreground">
        Input de búsqueda con debounce integrado que actualiza la URL.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación</h2>
        <CodeBlock
          language="bash"
          code="pnpm dlx shadcn@latest add https://raw.githubusercontent.com/tdpcorpsa/tdp-template/refs/heads/main/public/registry/search-input.json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <SearchInputDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Uso</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Básico</h3>
          <CodeBlock
            code={`import { SearchInput } from '@/components/ui/search-input'

export default function ListPage() {
  return (
    <div>
      <SearchInput placeholder="Buscar usuarios..." />
      {/* Lista filtrada */}
    </div>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Personalizado</h3>
          <CodeBlock
            code={`import { SearchInput } from '@/components/ui/search-input'

export default function ProductsPage() {
  return (
    <div className="mb-4">
      <SearchInput
        param="search" // Usa ?search=... en lugar de ?q=...
        placeholder="Buscar productos por nombre o SKU..."
        delayMs={600} // Espera 600ms antes de actualizar la URL
        autoFocus={true} // Enfoca el input al cargar
        className="max-w-md"
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
                <td className="p-4 font-mono">param</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">
                  Nombre del parámetro en la URL (default: &apos;q&apos;)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">placeholder</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">Placeholder del input</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">delayMs</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4">
                  Retardo para debounce en ms (default: 400)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">autoFocus</td>
                <td className="p-4 font-mono">boolean</td>
                <td className="p-4">Si el input debe tener foco al montar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
