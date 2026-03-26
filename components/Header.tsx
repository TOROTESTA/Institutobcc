import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[var(--primary)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_sin_fondo.png"
            alt="Logo del instituto"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
          <div className="text-center">
            <p className="text-lg font-extrabold leading-none">Instituto BCC</p>
            <p className="text-sm text-white/80">English Practice</p>
          </div>
        </Link>
      </div>
    </header>
  );
}