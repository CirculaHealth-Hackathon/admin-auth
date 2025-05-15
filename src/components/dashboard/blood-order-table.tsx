
"use client";

import type { BloodOrder } from "@/lib/types";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

const mockOrders: BloodOrder[] = [
  {
    id: "1",
    user: "Sarah Taylor",
    bloodType: "A+",
    amount: "100 Unit",
    hospital: "Rumah Sakit Hermina",
    location: "Yogyakarta",
    distance: "2 km",
    dateUploaded: "Jan 10, 2025, 22:10",
    status: "Handled",
  },
  {
    id: "2",
    user: "aji",
    bloodType: "A+",
    amount: "100 Unit",
    hospital: "Palang Merah Indonesia",
    location: "Yogyakarta",
    distance: "1,5 km",
    dateUploaded: "Jan 10, 2025, 22:10",
    status: "Not Handled",
  },
  {
    id: "3",
    user: "Budi",
    bloodType: "A+",
    amount: "100 Unit",
    hospital: "Palang Merah Indonesia",
    location: "Yogyakarta",
    distance: "1,8 km",
    dateUploaded: "Jan 10, 2025, 22:10",
    status: "Handled",
  },
  {
    id: "4",
    user: "Lina",
    bloodType: "A+",
    amount: "100 Unit",
    hospital: "RS Panti Rapih",
    location: "Yogyakarta",
    distance: "1,8 km",
    dateUploaded: "Jan 10, 2025, 22:10",
    status: "Handled",
  },
  {
    id: "5",
    user: "Dewi",
    bloodType: "O-",
    amount: "50 Unit",
    hospital: "RS Sardjito",
    location: "Yogyakarta",
    distance: "3 km",
    dateUploaded: "Jan 11, 2025, 09:15",
    status: "Pending",
  },
];

export default function BloodOrderTable() {
  const [filter, setFilter] = React.useState<string>("all");
  const [searchTerm, setSearchTerm] = React.useState<string>(""); // For future use with actual search input

  const filteredOrders = mockOrders.filter((order) => {
    const matchesFilter =
      filter === "all" || order.status.toLowerCase().replace(" ", "-") === filter;
    // Basic search logic (can be expanded)
    const matchesSearch =
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Blood Order Requests
          </h2>
          <p className="text-muted-foreground">
            Filter and manage blood order requests from hospitals and
            organizations.
          </p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Handed Status</SelectItem>
            <SelectItem value="handled">Handled</SelectItem>
            <SelectItem value="not-handled">Not Handled</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Blood Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Hospital/Organization</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Distance</TableHead>
              <TableHead>Date Uploaded</TableHead>
              <TableHead className="text-right">Order Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.user}</TableCell>
                  <TableCell>{order.bloodType}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.hospital}</TableCell>
                  <TableCell>{order.location}</TableCell>
                  <TableCell>{order.distance}</TableCell>
                  <TableCell>{order.dateUploaded}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        order.status === "Handled"
                          ? "default"
                          : order.status === "Not Handled"
                          ? "destructive"
                          : "secondary"
                      }
                      className={
                        order.status === "Handled" ? "bg-green-500/20 text-green-700 border-green-500/30 hover:bg-green-500/30" : 
                        order.status === "Not Handled" ? "" :
                        order.status === "Pending" ? "bg-yellow-500/20 text-yellow-700 border-yellow-500/30 hover:bg-yellow-500/30" : ""
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
