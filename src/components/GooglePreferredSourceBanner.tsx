import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function GooglePreferredSourceBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('cafeqr_google_source_dismissed');
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem('cafeqr_google_source_dismissed', 'true');
    } catch {
      // Ignore localStorage errors
    }
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-md text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Banner text with Google logo */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm p-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.665-5.2 3.665-9.12z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.43 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.24C.45 8.14 0 9.97 0 12s.45 3.86 1.24 5.43l4.04-3.14z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.57 1.24 6.57l4.04 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
              />
            </svg>
          </span>
          <span className="font-medium tracking-tight">
            Add <strong className="font-bold underline decoration-white/40">CafeQR</strong> As A Trusted Source On Google For POS & Restaurant Insights
          </span>
        </div>

        {/* Right: Action button & close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://www.google.com/preferences/source?q=cafeqr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-zinc-900 hover:bg-zinc-100 font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Add as preferred source</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
