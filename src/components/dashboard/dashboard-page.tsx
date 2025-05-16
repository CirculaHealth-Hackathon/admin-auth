
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BloodOrderTable from "./blood-order-table";
import Logo from "@/components/auth/logo"; // Import the Logo component

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/dashboard">
              <Logo /> {/* Use the Logo component here */}
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/my-requests">My Request Handling</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-8">
        <section className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Circulating Blood to <span className="text-primary">Those</span>
            <br />
            Who <span className="text-primary">Need It Most</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center">
            Help ensure a steady flow of life-saving blood for those who need it
          </p>
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-grow">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for blood type or location"
                className="w-full pl-10"
              />
            </div>
            <Button type="submit">Search</Button> 
          </div>
        </section>

        <section>
          <BloodOrderTable />
        </section>
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
