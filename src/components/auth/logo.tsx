
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* 
        If your logo file in public/images/ has a different name 
        than 'circula-admin-logo.png', please update the src below.
      */}
      <Image
        src="/images/circula-admin-logo.png" 
        alt="Circula Admin Logo"
        width={150} 
        height={40} 
        className="h-10 w-auto"
        priority 
        data-ai-hint="company logo"
      />
    </div>
  );
}
