import Image from "next/image";

export function DesktopFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl bg-charcoal shadow-[0_30px_80px_-20px_rgba(43,43,43,0.45)] ring-1 ring-charcoal/20">
      <div className="flex items-center gap-1.5 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/30" />
      </div>
      <Image src={src} alt={alt} width={1440} height={900} priority={priority} sizes="(min-width:1024px) 640px, 90vw" className="block h-auto w-full" />
    </div>
  );
}

export function PhoneFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-[6px] border-charcoal bg-charcoal shadow-[0_30px_70px_-15px_rgba(43,43,43,0.5)]">
      <Image src={src} alt={alt} width={780} height={1688} priority={priority} sizes="200px" className="block h-auto w-full" />
    </div>
  );
}
