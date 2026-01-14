'use client'

import { SearchInput, useSearchQuery } from '@/components/ui/search-input'
import { Suspense } from 'react'

function DemoContent() {
  const [q] = useSearchQuery('q')

  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-background">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Básico (param: 'q')</h4>
        <div className="w-full max-w-sm">
            <SearchInput placeholder="Escribe algo..." />
        </div>
        <p className="text-sm text-muted-foreground">
            Valor en URL (?q=): <span className="font-mono text-foreground">{q || '(vacío)'}</span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Custom (param: 'search', delay: 1000ms)</h4>
        <div className="w-full max-w-sm">
            <SearchInput
                param="search"
                placeholder="Búsqueda lenta..."
                delayMs={1000}
            />
        </div>
      </div>
    </div>
  )
}

export function SearchInputDemo() {
    return (
        <Suspense fallback={<div>Cargando demo...</div>}>
            <DemoContent />
        </Suspense>
    )
}
