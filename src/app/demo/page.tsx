import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangleIcon, ComponentIcon } from "lucide-react"

export default function DemoPage() {
  const demos = [
    {
      title: "Confirm Alert",
      description: "Componente para confirmaciones de acciones importantes con validación de palabra clave",
      href: "/demo/confirm-alert",
      icon: AlertTriangleIcon,
      status: "Disponible"
    },
    // Aquí se pueden agregar más demos en el futuro
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Demos de Componentes</h1>
        <p className="text-muted-foreground">
          Explora los componentes reutilizables disponibles en el template y ve ejemplos de su uso.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => {
          const Icon = demo.icon
          return (
            <Card key={demo.href} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{demo.title}</CardTitle>
                    <div className="text-xs text-green-600 font-medium">
                      {demo.status}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{demo.description}</CardDescription>
                <Button asChild className="w-full">
                  <Link href={demo.href}>
                    Ver Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-muted p-6 rounded-lg space-y-4">
        <div className="flex items-center gap-2">
          <ComponentIcon className="size-5" />
          <h2 className="text-lg font-semibold">Sobre los Demos</h2>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            Los demos están diseñados para mostrar el uso correcto de los componentes reutilizables 
            del template. Cada demo incluye:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Ejemplos de uso básico y avanzado</li>
            <li>Diferentes configuraciones y props</li>
            <li>Casos de uso reales</li>
            <li>Documentación técnica integrada</li>
          </ul>
          <p className="mt-3">
            Estos componentes siguen las reglas del proyecto y están listos para usar en 
            aplicaciones de producción.
          </p>
        </div>
      </div>
    </div>
  )
}