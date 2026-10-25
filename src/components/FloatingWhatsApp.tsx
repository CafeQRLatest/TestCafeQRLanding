import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/917012120844?text=Hi%20CafeQR!%20I%20run%20a%20restaurant/cafe%20and%20would%20like%20a%20free%205-minute%20live%20demo%20and%20pricing%20details.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp for Free Live Demo"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-700/50 hover:shadow-emerald-600/60 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs sm:text-sm tracking-tight hidden sm:inline">
          Chat for Live Demo
        </span>
      </a>
    </div>
  );
}
