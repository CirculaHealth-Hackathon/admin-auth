
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
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Create your account</h2>
            <p className="mt-2 text-muted-foreground">
              To help ensure a steady flow of life-saving blood for those who need it the most
            </p>
          </div>
          {/* <AuthForm /> Temporarily commented out */}
          <p className="text-center text-muted-foreground">Auth form is temporarily hidden for debugging.</p>
           <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Background Section (Right on Desktop, Top on Mobile) */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen relative order-1 lg:order-2 bg-slate-200 flex items-center justify-center">
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
        {/* <div className="absolute bottom-8 left-8 text-white text-3xl md:text-4xl font-medium leading-tight">
          <p>Circulating blood to</p>
          <p><span className="font-bold text-primary">those</span> who</p>
          <p><span className="font-bold text-primary">need it the most</span></p>
        </div> */}
        <p className="text-xl text-slate-700">Background section temporarily simplified for debugging.</p>
      </div>
    </div>
  );
}
