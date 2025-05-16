import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* 
        Replace the src below with the path to your actual logo image.
        For example, if you place your logo in 'public/images/my-logo.png',
        the src should be '/images/my-logo.png'.
      */}
      <Image
        src="https://placehold.co/150x40.png" 
        alt="Company Logo"
        width={150}
        height={40}
        className="h-10 w-auto" // Adjust height (h-10) as needed, width will scale automatically
        priority // Add priority if this is a an LCP element on the page
        data-ai-hint="company logo"
      />
    </div>
  );
}
