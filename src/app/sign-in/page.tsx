
import type { Metadata } from 'next';
import SignInPage from '@/components/sign-in-page';

export const metadata: Metadata = {
  title: 'Sign In - Circula Admin',
  description: 'Sign in to your Circula Admin account.',
};

export default function SignInRoute() {
  return <SignInPage />;
}
