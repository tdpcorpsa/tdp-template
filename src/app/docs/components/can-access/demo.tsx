'use client'

import CanAccess from '@/components/ui/can-access'
import { Button } from '@/components/ui/button'
import { ProfileContext } from '@/providers/profile-provider'

const mockProfile = {
  id: '1',
  email: 'demo@example.com',
  first_name: 'Demo',
  last_name: 'User',
  is_superuser: false,
  avatar_url: '',
  roles: [
    {
      id: 'role1',
      name: 'Demo Role',
      app_perms: [
        {
          subdomain: 'marketing',
          campaigns: {
            create: true,
            update: false,
          },
        },
      ],
    },
  ],
}

// Mock context value
const mockContextValue = {
  profile: mockProfile as any,
  isLoading: false,
  error: null,
  refetch: () => {},
}

export function CanAccessDemo() {
  return (
    <ProfileContext.Provider value={mockContextValue}>
      <div className="flex flex-col gap-4 p-4 border rounded-lg">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">
            Permiso Concedido (marketing:campaigns:create)
          </h4>
          <CanAccess subdomain="marketing" resource="campaigns" action="create">
            <Button>Crear Campaña</Button>
          </CanAccess>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">
            Permiso Denegado (marketing:campaigns:update) - Variant: disabled
          </h4>
          <CanAccess
            subdomain="marketing"
            resource="campaigns"
            action="update"
            variant="disabled"
          >
            <Button>Editar Campaña</Button>
          </CanAccess>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">
            Permiso Denegado - Variant: page (default)
          </h4>
          <div className="border p-4 rounded-md">
            <CanAccess
              subdomain="marketing"
              resource="campaigns"
              action="update"
              variant="page"
            >
              <p>Contenido protegido</p>
            </CanAccess>
          </div>
        </div>
      </div>
    </ProfileContext.Provider>
  )
}
