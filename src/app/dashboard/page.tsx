
import type { Metadata } from 'next';
import DashboardPage from '@/components/dashboard/dashboard-page';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Circula',
  description: 'Manage blood order requests and other administrative tasks.',
};

export default function AdminDashboardRoute() {
  return <DashboardPage />;
}
