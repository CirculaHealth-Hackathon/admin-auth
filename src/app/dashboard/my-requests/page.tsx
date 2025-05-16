
import type { Metadata } from 'next';
import MyRequestHandlingPage from '@/components/dashboard/my-request-handling-page';

export const metadata: Metadata = {
  title: 'My Request Handling - Circula',
  description: 'View and manage your handled blood order requests.',
};

export default function MyRequestsRoute() {
  return <MyRequestHandlingPage />;
}
