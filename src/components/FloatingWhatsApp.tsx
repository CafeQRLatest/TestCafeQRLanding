import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/917012120844?text=Hi%20CafeQR!%20I%20run%20a%20restaurant/cafe%20and%20would%20like%20a%20free%205-minute%20live%20demo%20and%20pricing%20details.";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp for Live Demo"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-700/40 hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs sm:text-sm tracking-tight hidden xs:inline sm:inline">
          Chat for Live Demo
        </span>
      </a>
    </div>
  );
}
