'use client'

import { createContext, useContext } from 'react'
import { useGetAppBySubdomain } from '@/hooks/apps/use-get-app-by-subdomain'
import { Tables } from '@/types/supabase.types'

type App = Tables<'apps'>

type AppContextType = {
  currentApp: App | null
  isLoading: boolean
  error: Error | null
}

const AppContext = createContext<AppContextType>({
  currentApp: null,
  isLoading: true,
  error: null,
})

const getSubdomainFromHostname = (hostname: string, domain?: string) => {
  if (domain && hostname.endsWith(domain)) {
    const part = hostname.replace(`.${domain}`, '')
    if (part !== hostname) {
      return part
    }
  }

  if (hostname.includes('localhost')) {
    const parts = hostname.split('.')
    if (parts.length > 1 && parts[parts.length - 1] === 'localhost') {
      return parts[0]
    }
  }

  return ''
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const subdomain =
    typeof window === 'undefined'
      ? ''
      : getSubdomainFromHostname(
          window.location.hostname,
          process.env.NEXT_PUBLIC_DOMAIN
        )

  const { data: app, isLoading, error } = useGetAppBySubdomain(subdomain)

  return (
    <AppContext.Provider
      value={{
        currentApp: app ?? null,
        isLoading: isLoading && subdomain.length > 0,
        error: error as Error | null,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
