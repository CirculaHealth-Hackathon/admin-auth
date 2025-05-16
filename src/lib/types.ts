
export type BloodOrder = {
  id: string;
  user: string;
  bloodType: string;
  amount: string;
  hospital: string; // Corresponds to 'Origin' in some contexts
  location: string; // Can be part of Origin or Destination, or a general location
  destination?: string; // New field for destination hospital/place
  distance: string;
  dateUploaded: string; // Corresponds to 'Date Requested'
  status: "Handled" | "Not Handled" | "Pending" | "Active" | "Completed";
};

