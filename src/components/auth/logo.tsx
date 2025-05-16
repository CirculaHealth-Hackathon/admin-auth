
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* 
        This component expects an image file to be located at:
        public/images/circula-admin-logo.png

        Ensure:
        1. The 'public' folder is at the root of your project.
        2. Inside 'public', there is an 'images' folder.
        3. Inside 'public/images/', your logo file is named EXACTLY 'circula-admin-logo.png'.
           The name is case-sensitive.
      */}
      <Image
        src="/images/circula-admin-logo.png" 
        alt="Circula Admin Logo"
        width={150} 
        height={40} 
        className="h-10 w-auto" // This Tailwind class sets the display height to 40px, and width adjusts.
        priority 
        data-ai-hint="company logo"
      />
    </div>
  );
}
