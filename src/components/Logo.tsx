import logo from "@/assets/logo.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed top-3 right-3 md:top-4 md:right-4 z-30 ${className}`}>
      <div className="bg-background/85 backdrop-blur-md rounded-lg p-1.5 md:p-2 shadow-elegant border border-border">
        <img src={logo} alt="Sculpture by Vibgyor Reality" className="h-9 md:h-12 w-auto" />
      </div>
    </div>
  );
}
