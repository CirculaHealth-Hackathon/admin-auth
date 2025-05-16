
import Link from 'next/link';
import AuthForm from '@/components/auth/auth-form';
import Logo from '@/components/auth/logo';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Section (Left on Desktop, Bottom on Mobile) */}
      <div className="w-full lg:w-1/2 bg-background flex flex-col justify-center items-center p-6 sm:p-8 order-2 lg:order-1">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-center lg:justify-start">
            <Link href="/" aria-label="Go to homepage">
              <Logo />
            </Link>
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

      {/* Animated Background Section (Right on Desktop, Top on Mobile) */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen relative order-1 lg:order-2 overflow-hidden bg-gradient-to-r from-primary via-accent to-blue-800 bg-[length:400%_400%] animate-animated-gradient">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-8 left-8 text-white p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl font-medium leading-tight">
            Circulating blood to <br />
            <span className="font-bold">those</span> who <br />
            <span className="font-bold">need it the most</span>
          </h1>
        </div>
      </div>
    </div>
  );
}