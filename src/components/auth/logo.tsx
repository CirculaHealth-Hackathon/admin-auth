import { CirculaCLogo } from '@/components/icons/circula-c-logo';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <CirculaCLogo className="h-8 w-8" />
      <h1 className="text-2xl">
        <span className="font-bold text-foreground">CIRCULA</span>
        <span className="font-normal text-muted-foreground">ADMIN</span>
      </h1>
    </div>
  );
}
