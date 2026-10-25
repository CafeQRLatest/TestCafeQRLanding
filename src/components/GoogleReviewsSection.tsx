import { Star, CheckCircle, ExternalLink } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Sujith M.',
    role: 'The Daily Brew Cafe, Kochi',
    quote: 'Switched from an expensive subscription POS to CafeQR. Fast Bluetooth thermal printing, zero lag during evening rush, and our counter staff learned it in 5 minutes.',
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'Nidhin Jose',
    role: 'Royal Bakes & Confectionery',
    quote: 'The cake variant pricing (half kg / 1kg) and advance order booking works flawlessly. Best POS billing software in India with zero commission delivery.',
    rating: 5,
    date: '3 weeks ago',
  },
  {
    name: 'Chef Mathew',
    role: 'Flame & Grill Restaurant',
    quote: 'KOT tickets route instantly to our kitchen screen. Real-time sales reports on my Android phone let me track table turnover from anywhere.',
    rating: 5,
    date: '2 months ago',
  },
  {
    name: 'Priya Sundaram',
    role: 'Green Leaf Organic Cafe',
    quote: 'The free branded online delivery website generated automatically by CafeQR saved our cafe thousands in food aggregator commissions.',
    rating: 5,
    date: '2 weeks ago',
  },
];

export default function GoogleReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20 relative z-10 bg-gradient-to-b from-transparent via-white/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md border border-zinc-200/80 shadow-sm rounded-full text-xs font-bold text-zinc-800 mb-4">
            <span className="flex items-center justify-center w-4 h-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.665-5.2 3.665-9.12z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.43 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.24C.45 8.14 0 9.97 0 12s.45 3.86 1.24 5.43l4.04-3.14z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.57 1.24 6.57l4.04 3.14c.95-2.83 3.6-4.96 6.72-4.96z" />
              </svg>
            </span>
            <span>Verified Google Business Profile Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Loved by 300+ Food & Retail Businesses
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-zinc-600 font-medium">
            <span className="text-amber-500 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-zinc-900">4.9 / 5.0</span>
            <span className="text-zinc-400">•</span>
            <span>Over 320 Verified Google Ratings</span>
          </div>
        </div>

        {/* Reviews Adaptive Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium">{r.date}</span>
                </div>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs font-bold text-zinc-900 truncate">{r.name}</h4>
                    <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-[10px] text-zinc-500 truncate">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Link to Google Reviews */}
        <div className="text-center">
          <a
            href="https://g.page/r/CbYBpqFk3xOFEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-50 text-zinc-800 text-xs sm:text-sm font-bold rounded-full border border-zinc-200/80 shadow-sm hover:shadow transition-all group"
          >
            <span>Write a Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}
