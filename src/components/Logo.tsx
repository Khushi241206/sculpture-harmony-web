import logo from "@/assets/logo.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed top-4 right-4 md:top-6 md:right-6 z-30 ${className}`}>
      <div className="bg-background/85 backdrop-blur-md rounded-xl p-2 md:p-3 shadow-elegant border border-border">
        <img src={logo} alt="Sculpture by Vibgyor Reality" className="h-14 md:h-20 w-auto" />
      </div>
    </div>
  );
}
