"use client"

import { useState } from "react"
import { TrashIcon, UserXIcon, DatabaseIcon, SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfirmAlert } from "@/components/ui/confirm-alert"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function ConfirmAlertDemo() {
  const [lastAction, setLastAction] = useState<string>("")

  const handleAction = (action: string) => {
    setLastAction(`Acción ejecutada: ${action} - ${new Date().toLocaleTimeString()}`)
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Confirm Alert - Demos</h1>
        <p className="text-muted-foreground">
          Componente reutilizable para confirmaciones de acciones importantes que requieren escribir una palabra de confirmación.
        </p>
      </div>

      {lastAction && (
        <Alert>
          <AlertTitle>Última acción</AlertTitle>
          <AlertDescription>{lastAction}</AlertDescription>
        </Alert>
      )}

      <Separator />

      {/* Demo 1: Eliminación básica */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">1. Eliminación Básica</h2>
          <p className="text-muted-foreground">
            Caso más común: eliminar un elemento con confirmación "eliminar".
          </p>
        </div>
        
        <div className="flex gap-4">
          <ConfirmAlert
            title="Eliminar usuario"
            description="Esta acción eliminará permanentemente el usuario y todos sus datos asociados."
            confirmWord="eliminar"
            onConfirm={() => handleAction("Usuario eliminado")}
            triggerText="Eliminar Usuario"
          />
          
          <ConfirmAlert
            title="Eliminar proyecto"
            description="Se eliminará el proyecto y todos sus archivos. Esta acción no se puede deshacer."
            confirmWord="eliminar"
            onConfirm={() => handleAction("Proyecto eliminado")}
          >
            <Button variant="destructive" size="sm">
              <TrashIcon className="size-4" />
              Eliminar Proyecto
            </Button>
          </ConfirmAlert>
        </div>
      </div>

      <Separator />

      {/* Demo 2: Diferentes palabras de confirmación */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">2. Diferentes Palabras de Confirmación</h2>
          <p className="text-muted-foreground">
            Usando diferentes palabras según el contexto de la acción.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <ConfirmAlert
            title="Resetear base de datos"
            description="Se eliminarán TODOS los datos de la base de datos. Esta acción es irreversible."
            confirmWord="RESETEAR"
            onConfirm={() => handleAction("Base de datos reseteada")}
            triggerText="Resetear DB"
            confirmText="Sí, resetear"
          >
            <Button variant="destructive">
              <DatabaseIcon className="size-4" />
              Resetear Base de Datos
            </Button>
          </ConfirmAlert>

          <ConfirmAlert
            title="Desactivar cuenta"
            description="La cuenta será desactivada y el usuario no podrá acceder al sistema."
            confirmWord="desactivar"
            onConfirm={() => handleAction("Cuenta desactivada")}
            triggerText="Desactivar"
            variant="default"
          >
            <Button variant="outline">
              <UserXIcon className="size-4" />
              Desactivar Cuenta
            </Button>
          </ConfirmAlert>

          <ConfirmAlert
            title="Restaurar configuración"
            description="Se restaurarán todos los valores por defecto. Se perderán las configuraciones personalizadas."
            confirmWord="restaurar"
            onConfirm={() => handleAction("Configuración restaurada")}
            confirmText="Restaurar"
            cancelText="Mantener actual"
          >
            <Button variant="secondary">
              <SettingsIcon className="size-4" />
              Restaurar Config
            </Button>
          </ConfirmAlert>
        </div>
      </div>

      <Separator />

      {/* Demo 3: Casos especiales */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">3. Casos Especiales</h2>
          <p className="text-muted-foreground">
            Diferentes configuraciones y casos de uso avanzados.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <ConfirmAlert
            title="Acción crítica del sistema"
            description="Esta acción afectará a todos los usuarios del sistema y puede causar tiempo de inactividad."
            confirmWord="CONFIRMO"
            onConfirm={() => handleAction("Acción crítica ejecutada")}
            onCancel={() => setLastAction("Acción crítica cancelada")}
            triggerText="Ejecutar Acción Crítica"
            confirmText="Sí, ejecutar"
            cancelText="Cancelar operación"
          />

          <ConfirmAlert
            title="Eliminar con nombre específico"
            description="Para eliminar este elemento crítico, escribe exactamente el nombre del proyecto."
            confirmWord="mi-proyecto-importante"
            onConfirm={() => handleAction("Proyecto específico eliminado")}
            triggerText="Eliminar Proyecto Crítico"
          />
        </div>
      </div>

      <Separator />

      {/* Demo 4: Información técnica */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">4. Información Técnica</h2>
          <p className="text-muted-foreground">
            Detalles sobre el uso y configuración del componente.
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <h3 className="font-semibold">Características:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Validación case-insensitive de la palabra de confirmación</li>
            <li>Botón de confirmar deshabilitado hasta que la palabra coincida</li>
            <li>Limpieza automática del input al cerrar el modal</li>
            <li>Soporte para callbacks de confirmación y cancelación</li>
            <li>Completamente personalizable (textos, variantes, iconos)</li>
            <li>Accesible con ARIA labels y navegación por teclado</li>
            <li>Indicador visual cuando la palabra es correcta (borde verde)</li>
          </ul>
        </div>

        <div className="bg-muted p-4 rounded-lg space-y-2">
          <h3 className="font-semibold">Props principales:</h3>
          <div className="text-sm font-mono space-y-1">
            <div><span className="text-blue-600">confirmWord</span>: string - Palabra que debe escribir el usuario</div>
            <div><span className="text-blue-600">onConfirm</span>: () =&gt; void - Callback al confirmar</div>
            <div><span className="text-blue-600">title</span>?: string - Título del modal</div>
            <div><span className="text-blue-600">description</span>?: string - Descripción de la acción</div>
            <div><span className="text-blue-600">variant</span>?: "default" | "destructive" - Estilo del botón trigger</div>
          </div>
        </div>
      </div>
    </div>
  )
}