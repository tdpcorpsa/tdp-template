import { Separator } from "@/components/ui/separator"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">TDP Template - Demos</h1>
              <p className="text-muted-foreground">
                Componentes reutilizables y ejemplos de uso
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Desarrollo • TDP Corp
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto py-6">
        {children}
      </main>
    </div>
  )
}