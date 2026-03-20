'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  // TODO: Implement login with your preferred auth provider
  console.log('Login attempt:', formData.get('email'))
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  // TODO: Implement signup with your preferred auth provider
  console.log('Signup attempt:', formData.get('email'))
  redirect('/dashboard')
}

export async function signOut() {
  // TODO: Implement sign out with your preferred auth provider
  redirect('/login')
}

export type User = {
  id: string;
  email?: string;
  fullName?: string;
  avatarUrl?: string;
};

export async function getUser(): Promise<User | null> {
  // TODO: Implement get user with your preferred auth provider
  // This is a placeholder that always returns null for now.
  // In a real app, you would fetch this from your auth session.
  return null
}
