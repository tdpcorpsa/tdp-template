import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { DocsSidebar } from '@/components/docs-sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <main className="flex-1 overflow-auto p-6">
        <SidebarTrigger />
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </SidebarProvider>
  )
}
