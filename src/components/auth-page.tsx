import Image from 'next/image';
import AuthForm from '@/components/auth/auth-form';
import Logo from '@/components/auth/logo';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Section (Left on Desktop, Bottom on Mobile) */}
      <div className="w-full lg:w-1/2 bg-background flex flex-col justify-center items-center p-6 sm:p-8 order-2 lg:order-1">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-center lg:justify-start">
            <Logo />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Create your account</h2>
            <p className="mt-2 text-muted-foreground">
              To help ensure a steady flow of life-saving blood for those who need it the most
            </p>
          </div>
          <AuthForm />
        </div>
      </div>

      {/* Image Section (Right on Desktop, Top on Mobile) */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen relative order-1 lg:order-2">
        <Image
          src="https://placehold.co/1080x1920.png"
          alt="Crowd at sunset"
          layout="fill"
          objectFit="cover"
          className="rounded-none lg:rounded-none"
          data-ai-hint="crowd sunset"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-8 left-8 text-white text-3xl md:text-4xl font-medium leading-tight">
          <p>Circulating blood to</p>
          <p><span className="font-bold text-primary">those</span> who</p>
          <p><span className="font-bold text-primary">need it the most</span></p>
        </div>
      </div>
    </div>
  );
}
