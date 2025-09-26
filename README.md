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
   git clone https://github.com/tdpcorp/tdp-template.git <nombre-proyecto>
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

5. Configurar `.env.local`:
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
pnpm format     # Formatear código con Prettier
```

## 🔧 Personalización del Template

> **⚠️ IMPORTANTE**: Esta es una plantilla base que **DEBE ser personalizada** para cada proyecto específico.

### Archivos que REQUIEREN modificación:

1. **`package.json`**: Actualizar nombre, descripción y repositorio del proyecto
2. **`.env.local`**: Configurar variables de entorno específicas del proyecto
3. **`src/app/layout.tsx`**: Personalizar metadata, título y descripción
4. **`README.md`**: Reemplazar con documentación específica del proyecto

### Pasos iniciales de personalización:

1. Cambiar el nombre del proyecto en `package.json`
2. Configurar variables de entorno de Supabase
3. Definir esquemas de base de datos en `schemas/`
4. Crear componentes específicos del dominio en `components/`
5. Implementar rutas y páginas según funcionalidad requerida

## 📁 Estructura de Desarrollo

### Organización de Features

```
src/
  components/
    <feature>/                    # Cada feature en su propia carpeta
      <feature>-form.tsx         # Solo campos del formulario
      <feature>-list.tsx         # Listado/tabla de elementos
      <feature>-create.tsx       # Formulario de creación
      <feature>-edit.tsx         # Formulario de edición
      <feature>-delete.tsx       # Confirmación de eliminación
      <feature>-actions.tsx      # Acciones/botones
      <feature>-create-button.tsx
      <feature>-select.tsx       # Solo cuando se necesita
```

### Hooks y Lógica de Negocio

```
src/
  hooks/
    <feature>/
      use-<feature>-<action>.ts  # ej: use-users-create.ts
```

### Esquemas y Tipos

```
src/
  schemas/
    <feature>.schema.ts        # Validaciones con Zod
  types/
    supabase.types.ts         # Tipos generados de Supabase
    auth.ts                   # Tipos de autenticación
```

### Rutas y Páginas

```
src/
  app/
    (auth)/                   # Rutas que requieren autenticación
      <feature>/
        page.tsx
        layout.tsx
    public/                   # Rutas públicas
```

## 📋 Guías de Modificación

### ❌ Archivos que NO se deben modificar

- **`src/components/ui/`**: Componentes de shadcn/ui (salvo excepciones justificadas)
- **`src/lib/utils.ts`**: Utilidades base del template

### ✅ Patrones Obligatorios

#### Formularios

- **Validación**: Usar `react-hook-form` + `zod`
- **Esquemas**: Definir en `schemas/<feature>.schema.ts`

```typescript
// Ejemplo de validación
z.email("Formato de email inválido"); // Email requerido
z.email("Formato de email inválido").optional().or(z.literal("")); // Email opcional
z.nonempty("El campo es requerido"); // Campo requerido
```

#### Eliminación de Registros

- **Obligatorio**: Usar `ui/alert-confirmation`
- **Confirmación**: Solicitar palabra de confirmación

#### Consultas de Datos

- **Obligatorio**: Usar React Query en hooks `use-<feature>-<action>.ts`
- **Patrón**: Separar lógica de presentación

#### Tablas y Listados

- **Obligatorio**: Usar React Table para tablas complejas
- **Componente**: Crear `<feature>-list.tsx`

### 🎨 Demos de Componentes

- **Ubicación**: `/app/demo`
- **Propósito**: Solo para componentes reutilizables de `../ui`
- **Restricción**: Features específicas NO van en demo

### 🛠️ Herramientas de Calidad

```bash
pnpm format     # Formatear código (obligatorio antes de commit)
pnpm typecheck  # Verificar tipos TypeScript
pnpm lint       # Verificar reglas de ESLint
```

### 🏗️ Estados Globales

- **Herramienta**: Zustand
- **Uso**: Solo cuando sea estrictamente necesario
- **Patrón**: Preferir estados locales cuando sea posible
