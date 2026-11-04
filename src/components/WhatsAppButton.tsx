import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import type { Locale } from "@/i18n";

export function WhatsAppButton({ lang, label }: { lang: Locale; label: string }) {
  return (
    <a
      href={whatsappLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
