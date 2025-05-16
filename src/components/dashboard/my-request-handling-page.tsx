
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Filter, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { BloodOrder } from "@/lib/types";

// Mock data based on the image
const mockHandledRequests: BloodOrder[] = [
  {
    id: "1",
    user: "Sarah Taylor",
    bloodType: "A+",
    amount: "1 unit",
    hospital: "RS Hermina Depok", // Origin
    destination: "Rumah Sakit Siloam Jakarta", // Destination
    location: "Jakarta", // General location if needed, or infer from destination
    distance: "N/A", // Not directly in the new image
    dateUploaded: "Jan 10, 2025, 22:10 WIB", // Date Requested
    status: "Handled",
  },
];

export default function MyRequestHandlingPage() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [requests, setRequests] = React.useState<BloodOrder[]>(mockHandledRequests); // Initialize with mock data

  // In a real app, you'd fetch and filter data based on the activeTab
  const filteredRequests = requests.filter(req => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return req.status === "Active"; // Assuming "Active" is a possible status
    if (activeTab === "completed") return req.status === "Completed" || req.status === "Handled";
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header-like navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="outline" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to All Requests
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders"
                className="pl-9 pr-3 py-2 h-10 w-full sm:w-[200px] lg:w-[250px]"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            My Request Handling
          </h1>
          <p className="text-muted-foreground">
            Your last request handling for Rumah Sakit Siloam Jakarta has been completed.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </Tabs>

        {filteredRequests.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Date Requested</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.user}</TableCell>
                    <TableCell>{order.bloodType}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.hospital}</TableCell>
                    <TableCell>{order.destination}</TableCell>
                    <TableCell>{order.dateUploaded}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          order.status === "Handled" || order.status === "Completed"
                            ? "default" // Using default which is primary color based on theme
                            : order.status === "Active"
                            ? "secondary" // Or another appropriate variant
                            : "outline"
                        }
                         className={
                            order.status === "Handled" || order.status === "Completed"
                            ? "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200" // Mimicking image style for Handled
                            : ""
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 border-2 border-dashed rounded-lg">
            <ClipboardCheck className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              You have not actively handled any requests
            </h3>
            <p className="text-muted-foreground">
              Requests you are actively handling or have completed will appear here.
            </p>
          </div>
        )}
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
