'use client'

import { SkeletonList } from '@/components/ui/skeleton-list'

export function SkeletonListDemo() {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-background">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Lista (default)</h4>
        <div className="border rounded-md p-4">
          <SkeletonList count={3} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Tabla (3 columnas)</h4>
        <div className="border rounded-md p-4">
          <SkeletonList variant="table" count={3} columns={3} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Cards (Grid)</h4>
        <div className="border rounded-md p-4">
          <SkeletonList
            variant="card"
            count={3}
            className="grid-cols-1 sm:grid-cols-3"
          />
        </div>
      </div>
    </div>
  )
}
