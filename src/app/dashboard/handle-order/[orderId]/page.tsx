
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Handle Blood Order - Circula',
  description: 'Handle a specific blood order request.',
};

interface HandleOrderPageProps {
  params: {
    orderId: string;
  };
}

export default function HandleOrderPage({ params }: HandleOrderPageProps) {
  const { orderId } = params;

  // In a real app, you would fetch order details here using the orderId
  // For now, we'll just display the ID

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Handle Blood Order Request</CardTitle>
          <CardDescription>
            You are currently handling order ID: <span className="font-semibold text-primary">{orderId}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This is a placeholder page for handling the blood order. 
            In a real application, you would see more details about the order
            and have options to update its status, assign it to a courier, etc.
          </p>
          {/* Placeholder for form or actions */}
          <div>
            <h3 className="font-semibold mb-2">Order Details (Example)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>User: (Fetch User Name)</li>
              <li>Blood Type: (Fetch Blood Type)</li>
              <li>Amount: (Fetch Amount)</li>
              <li>Hospital: (Fetch Hospital)</li>
            </ul>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline">Mark as Pending</Button>
            <Button>Mark as Handled & Notify</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
