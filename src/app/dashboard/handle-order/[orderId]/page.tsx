
"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from "react";
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/auth/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // CardHeader and CardTitle removed as they are not used for this layout
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

// export const metadata: Metadata = { // Metadata needs to be defined in a server component or a generateMetadata function
//   title: 'Blood Order Details - Circula',
//   description: 'View and manage a specific blood order request.',
// };
// For dynamic metadata with client components, you'd use generateMetadata

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
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  // Add state for form fields if we need to collect them
  // For now, the submit action is simple

  const handleSubmitConfirm = async () => {
    setIsSubmitting(true);
    // In a real app, you would gather form data and send it to a server action here
    console.log("Order submission confirmed for orderId:", orderId);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "Order details submitted successfully.",
    });
    setIsSubmitting(false);
    router.push('/dashboard'); // Redirect to dashboard after successful submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
          <h1 className="text-3xl font-bold tracking-tight text-center mb-8 text-foreground">
            Blood Order Details
          </h1>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg rounded-lg border bg-card text-card-foreground">
          <CardContent className="p-6 space-y-6">
            {/* Order Details Section */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <Label htmlFor="user" className="text-sm font-medium text-muted-foreground">User</Label>
                <p id="user" className="font-semibold text-card-foreground">{mockOrderData.user}</p>
              </div>
              <div>
                <Label htmlFor="bloodType" className="text-sm font-medium text-muted-foreground">Blood Type</Label>
                <p id="bloodType" className="font-semibold text-card-foreground">{mockOrderData.bloodType}</p>
              </div>
              <div>
                <Label htmlFor="amount" className="text-sm font-medium text-muted-foreground">Amount</Label>
                <p id="amount" className="font-semibold text-card-foreground">{mockOrderData.amount}</p>
              </div>
              <div>
                <Label htmlFor="origin" className="text-sm font-medium text-muted-foreground">Origin</Label>
                <p id="origin" className="font-semibold text-card-foreground">{mockOrderData.origin}</p>
              </div>
              <div>
                <Label htmlFor="location" className="text-sm font-medium text-muted-foreground">Location</Label>
                <p id="location" className="font-semibold text-card-foreground">{mockOrderData.location}</p>
              </div>
              <div>
                <Label htmlFor="distance" className="text-sm font-medium text-muted-foreground">Distance</Label>
                <p id="distance" className="font-semibold text-card-foreground">{mockOrderData.distance}</p>
              </div>
              <div className="col-span-2">
                <Label htmlFor="dateRequested" className="text-sm font-medium text-muted-foreground">Date Requested</Label>
                <p id="dateRequested" className="font-semibold text-card-foreground">{mockOrderData.dateRequested}</p>
              </div>
            </div>

            <hr className="my-6 border-border" />

            {/* Status Checkboxes and Inputs Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox id="orderHandled" defaultChecked className="h-5 w-5" />
                <Label htmlFor="orderHandled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-card-foreground">
                  Order has been handled
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="orderConfirmed" className="h-5 w-5" />
                <Label htmlFor="orderConfirmed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-card-foreground">
                  Order has confirmed with hospital
                </Label>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="bloodCode" className="text-sm font-medium text-card-foreground">Blood Code:</Label>
                <Input id="bloodCode" placeholder="Enter blood code" className="bg-background border-input text-foreground placeholder:text-muted-foreground" />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="deliverySet" className="h-5 w-5" />
                <Label htmlFor="deliverySet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-card-foreground">
                  Order has been set with delivery service
                </Label>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="deliveryLink" className="text-sm font-medium text-card-foreground">Delivery Status Link</Label>
                <Input id="deliveryLink" placeholder="Enter delivery status link" className="bg-background border-input text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      *Only submit after you tick all the boxes and input all the information needed
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmitConfirm} disabled={isSubmitting}>
                      Yes
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      </main>
       {/* Footer */}
      <footer className="py-6 md:px-8 md:py-0 border-t mt-auto bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Circula. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// For dynamic metadata with client components, you can export a generateMetadata function
// if you need to access params. Example:
// export async function generateMetadata({ params }: HandleOrderPageProps): Promise<Metadata> {
//   return {
//     title: `Order ${params.orderId} - Circula`,
//     description: `Manage blood order request ${params.orderId}.`,
//   };
// }
