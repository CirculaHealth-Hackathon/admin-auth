
export type BloodOrder = {
  id: string;
  user: string;
  bloodType: string;
  amount: string;
  hospital: string;
  location: string;
  distance: string;
  dateUploaded: string;
  status: "Handled" | "Not Handled" | "Pending"; // Added Pending for more flexibility
};
