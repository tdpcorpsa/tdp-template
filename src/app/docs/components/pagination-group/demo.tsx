'use client'

import { PaginationGroup } from '@/components/ui/pagination-group'
import { Suspense } from 'react'

function DemoContent() {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-background">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">
          Interactivo (sincronizado con URL)
        </h4>
        <div className="flex justify-center">
          <PaginationGroup total={100} pageSize={10} />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Observa cómo cambia el parámetro ?page= en la URL.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Deshabilitado</h4>
        <div className="flex justify-center">
          <PaginationGroup total={50} pageSize={10} disabled />
        </div>
      </div>
    </div>
  )
}

export function PaginationGroupDemo() {
  return (
    <Suspense fallback={<div>Cargando demo...</div>}>
      <DemoContent />
    </Suspense>
  )
}
