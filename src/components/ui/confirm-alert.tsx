'use client'

import * as React from 'react'
import { AlertTriangleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ConfirmAlertProps {
  title?: string
  description?: string
  /**
   * Palabra de confirmación requerida para confirmar la acción, debe ser minúscula
   */
  confirmWord: string
  onConfirm: () => void
  onCancel?: () => void
  triggerText?: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive'
  children?: React.ReactNode
}

function ConfirmAlert({
  title = '¿Estás seguro?',
  description = 'Esta acción no se puede deshacer.',
  confirmWord,
  onConfirm,
  onCancel,
  triggerText = 'Eliminar',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  variant = 'destructive',
  children,
}: ConfirmAlertProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  const isValid = inputValue.toLowerCase() === confirmWord.toLowerCase()

  const handleConfirm = () => {
    if (isValid) {
      onConfirm()
      setOpen(false)
      setInputValue('')
    }
  }

  const handleCancel = () => {
    onCancel?.()
    setOpen(false)
    setInputValue('')
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setInputValue('')
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button variant={variant} size="sm">
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangleIcon className="size-5 text-destructive" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-left">{title}</DialogTitle>
              <DialogDescription className="text-left mt-1">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="confirm-input">
              Para confirmar, escribe{' '}
              <span className="font-semibold text-foreground">
                "{confirmWord}"
              </span>{' '}
              en el campo de abajo:
            </Label>
            <Input
              id="confirm-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Escribe "${confirmWord}" para confirmar`}
              className={cn(
                'transition-colors',
                isValid && 'border-green-500 focus-visible:ring-green-500'
              )}
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleCancel}>
            {cancelText}
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={!isValid}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Componentes adicionales para mayor flexibilidad
function ConfirmAlertTrigger({
  children,
  ...props
}: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...props}>{children}</DialogTrigger>
}

function ConfirmAlertContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  return <DialogContent className={cn('sm:max-w-md', className)} {...props} />
}

function ConfirmAlertHeader({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  return <DialogHeader className={cn('', className)} {...props} />
}

function ConfirmAlertFooter({
  className,
  ...props
}: React.ComponentProps<typeof DialogFooter>) {
  return <DialogFooter className={cn('gap-2', className)} {...props} />
}

export {
  ConfirmAlert,
  ConfirmAlertTrigger,
  ConfirmAlertContent,
  ConfirmAlertHeader,
  ConfirmAlertFooter,
}
