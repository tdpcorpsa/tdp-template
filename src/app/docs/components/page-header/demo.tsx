'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export function PageHeaderDemo() {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-background">
      <div className="border rounded-md">
        <PageHeader
          title="Dashboard"
          description="Vista general del sistema"
          withSidebar={false}
        />
      </div>

      <div className="border rounded-md">
        <PageHeader
          title="Usuarios"
          description="Gestión de usuarios"
          withSidebar={false}
          actions={
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo
            </Button>
          }
        />
      </div>
    </div>
  )
}
