'use client'

import { AlertConfirmation } from '@/components/ui/alert-confirmation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'

export function AlertConfirmationDemo() {
  const [open, setOpen] = useState(false)
  const [openDestructive, setOpenDestructive] = useState(false)

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
            <h4 className="text-sm font-medium">Básico</h4>
            <Button onClick={() => setOpen(true)}>Abrir Confirmación</Button>
            <AlertConfirmation
                open={open}
                onOpenChange={setOpen}
                title="¿Estás seguro?"
                description="Esta acción requiere confirmación."
                confirmWord="CONFIRMAR"
                onConfirm={() => toast.success('Acción confirmada')}
            />
        </div>

        <div className="flex flex-col gap-2">
            <h4 className="text-sm font-medium">Destructivo</h4>
            <Button variant="destructive" onClick={() => setOpenDestructive(true)}>Eliminar Elemento</Button>
            <AlertConfirmation
                open={openDestructive}
                onOpenChange={setOpenDestructive}
                title="¿Eliminar definitivamente?"
                description="Esta acción no se puede deshacer."
                confirmWord="ELIMINAR"
                variant="destructive"
                onConfirm={() => toast.success('Elemento eliminado')}
            />
        </div>
      </div>
    </div>
  )
}
