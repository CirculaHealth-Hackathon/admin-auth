import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* 
        Replace the src below with the path to your actual logo image.
        For example, if you place your logo in 'public/images/circula-admin-logo.png',
        the src should be '/images/circula-admin-logo.png'.
      */}
      <Image
        src="https://placehold.co/150x40.png" 
        alt="Circula Admin Logo" // Updated alt text
        width={150} // Desired width for the logo
        height={40} // Desired height for the logo
        className="h-10 w-auto" // Tailwind class for height, width adjusts automatically
        priority 
        data-ai-hint="company logo"
      />
    </div>
  );
}
