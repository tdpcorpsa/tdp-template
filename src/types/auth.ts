import { User, Session } from '@supabase/supabase-js'

// Re-export Supabase types for convenience
export type { User, Session } from '@supabase/supabase-js'

// Auth state interface
export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}

// Auth context type
export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

// Auth error type
export interface AuthError {
  message: string
  status?: number
}

// Sign in/up credentials
export interface AuthCredentials {
  email: string
  password: string
}

// User profile type (extend as needed)
export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// Auth response type
export interface AuthResponse {
  user: User | null
  session: Session | null
  error: AuthError | null
}

// Middleware types
export interface MiddlewareResponse {
  supabaseResponse: Response
  user: User | null
}

// Protected route configuration
export interface ProtectedRouteConfig {
  path: string
  requiresAuth: boolean
  allowedRoles?: string[]
}

// Redirect configuration
export interface RedirectConfig {
  loginUrl: string
  redirectParam?: string
  preserveQuery?: boolean
}

// Environment-specific login URLs
export interface LoginUrls {
  development: string
  production: string
  fallback: string
}
