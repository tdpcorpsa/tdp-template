# TDP Template

Plantilla oficial de TDP Corp basada en Next.js, TypeScript y Supabase.
Implementa estándares corporativos, shadcn/ui, React Query y Zustand.
Incluye autenticación, manejo de permisos y componentes reutilizables.
Diseñada para garantizar consistencia y escalabilidad en los proyectos.

## Variables de Entorno

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_DOMAIN=
# Auth Configuration
NEXT_PUBLIC_LOGIN=
```

## Como Iniciar

```bash
pnpm install
cp env.example .env.local
# Configurar variables en .env.local
pnpm dev
```

## Módulos

Lista de módulos y sus permisos (subdomain:recurso:accion):

- _No hay módulos definidos en la plantilla base._
- Ejemplo: `marketing:campaigns:create`
