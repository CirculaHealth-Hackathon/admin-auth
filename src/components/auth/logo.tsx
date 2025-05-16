
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* 
        Ensure your logo file in public/images/ is named 'circula-admin-logo.png'
        or update the src below to match your exact filename (e.g., /images/your-logo.svg).
        The path is case-sensitive.
      */}
      <Image
        src="/images/circula-admin-logo.png" 
        alt="Circula Admin Logo"
        width={150} 
        height={40} 
        className="h-10 w-auto" // This sets height to 40px, width adjusts to maintain aspect ratio
        priority 
        data-ai-hint="company logo"
      />
    </div>
  );
}
