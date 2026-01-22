export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Documentación</h1>
      <p className="text-xl text-muted-foreground">
        Bienvenido a la documentación de TDP Template.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Introducción</h2>
        <p className="leading-7">
          Esta plantilla está diseñada para estandarizar el desarrollo de
          aplicaciones en TDP Corp. Utiliza Next.js, shadcn/ui, y Supabase.
        </p>
        <p className="leading-7">
          Navega por el menú lateral para ver la documentación de los
          componentes reutilizables.
        </p>
      </div>
    </div>
  )
}
