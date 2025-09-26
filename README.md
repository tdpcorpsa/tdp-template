# TDP Template

Plantilla oficial de TDP Corp que implementa estándares corporativos de desarrollo, siguiendo las mejores prácticas de la industria para garantizar consistencia, mantenibilidad y escalabilidad en todos los proyectos de la organización. Esta plantilla establece un marco de trabajo unificado que cumple con los lineamientos de arquitectura empresarial, patrones de diseño establecidos, y estándares de calidad de código definidos por TDP Corp.

## Tecnologías

- Next.js + TypeScript
- Supabase (Base de datos y Auth)
- shadcn/ui + Tailwind CSS
- React Hook Form + Zod
- React Query
- Zustand
- React Table

## Instalación

1. **Clonar el template:**
   ```bash
   git clone https://github.com/tdpcorp/tpd-template.git <nombre-proyecto>
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd <nombre-proyecto>
   ```

3. **Eliminar el historial de git existente e inicializar uno nuevo:**
   ```bash
   # En Windows (PowerShell/CMD)
   rmdir /s /q .git
   git init
   
   # En Unix/Mac/Linux
   rm -rf .git
   git init
   ```

4. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. Configurar `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
   ```

## Comandos

```bash
pnpm dev        # Desarrollo
pnpm build      # Construir
pnpm lint       # Linting
pnpm typecheck  # Verificar tipos
```
