
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronsUpDown } from 'lucide-react'; // ChevronsUpDown might not be needed, keeping ArrowLeft for back button
import Logo from '@/components/auth/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata: Metadata = {
  title: 'Blood Order Details - Circula',
  description: 'View and manage a specific blood order request.',
};

interface HandleOrderPageProps {
  params: {
    orderId: string;
  };
}

// Mock data based on the image
const mockOrderData = {
  user: "Sarah Taylor",
  bloodType: "A+",
  amount: "1 unit",
  origin: "Rumah Sakit Hermina",
  location: "Yogyakarta",
  distance: "2 km",
  dateRequested: "Jan 1, 2025",
};

export default function HandleOrderPage({ params }: HandleOrderPageProps) {
  const { orderId } = params; // orderId is available for future data fetching

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
          <Button variant="outline" asChild>
            <Link href="/dashboard">Go to My Request Handling</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          <h1 className="text-3xl font-bold tracking-tight text-center mb-8">
            Blood Order Details
          </h1>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg rounded-lg">
          <CardContent className="p-6 space-y-6">
            {/* Order Details Section */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <Label htmlFor="user" className="text-sm font-medium text-muted-foreground">User</Label>
                <p id="user" className="font-semibold">{mockOrderData.user}</p>
              </div>
              <div>
                <Label htmlFor="bloodType" className="text-sm font-medium text-muted-foreground">Blood Type</Label>
                <p id="bloodType" className="font-semibold">{mockOrderData.bloodType}</p>
              </div>
              <div>
                <Label htmlFor="amount" className="text-sm font-medium text-muted-foreground">Amount</Label>
                <p id="amount" className="font-semibold">{mockOrderData.amount}</p>
              </div>
              <div>
                <Label htmlFor="origin" className="text-sm font-medium text-muted-foreground">Origin</Label>
                <p id="origin" className="font-semibold">{mockOrderData.origin}</p>
              </div>
              <div>
                <Label htmlFor="location" className="text-sm font-medium text-muted-foreground">Location</Label>
                <p id="location" className="font-semibold">{mockOrderData.location}</p>
              </div>
              <div>
                <Label htmlFor="distance" className="text-sm font-medium text-muted-foreground">Distance</Label>
                <p id="distance" className="font-semibold">{mockOrderData.distance}</p>
              </div>
              <div className="col-span-2">
                <Label htmlFor="dateRequested" className="text-sm font-medium text-muted-foreground">Date Requested</Label>
                <p id="dateRequested" className="font-semibold">{mockOrderData.dateRequested}</p>
              </div>
            </div>

            <hr className="my-6 border-border" />

            {/* Status Checkboxes and Inputs Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="orderHandled" defaultChecked />
                <Label htmlFor="orderHandled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Order has been handled
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="orderConfirmed" />
                <Label htmlFor="orderConfirmed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Order has confirmed with hospital
                </Label>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="bloodCode" className="text-sm font-medium">Blood Code:</Label>
                <Input id="bloodCode" placeholder="Enter blood code" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="deliverySet" />
                <Label htmlFor="deliverySet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Order has been set with delivery service
                </Label>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="deliveryLink" className="text-sm font-medium">Delivery Status Link</Label>
                <Input id="deliveryLink" placeholder="Enter delivery status link" />
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Button size="lg">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </main>
       {/* Footer (optional) */}
      <footer className="py-6 md:px-8 md:py-0 border-t mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Circula. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
