import { useState } from 'react';
import { Star, CheckCircle2, ExternalLink, MapPin } from 'lucide-react';

interface RealReview {
  name: string;
  badge?: string;
  quote: string;
  rating: number;
  date: string;
  tag: string;
  ownerReply?: string;
}

const realReviews: RealReview[] = [
  {
    name: 'Dharsan Ram',
    badge: 'Local Guide • 26 reviews',
    quote: 'Using this system for a few months, better than many softwares available in the market, user friendly can use in multiple device and android and windows version which can be used simultaneously. Above all really good customer service. Happy to use cafeqr pos',
    rating: 5,
    date: '1 month ago',
    tag: 'POS',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Suryanath Ravindranathan',
    badge: 'Verified Customer • 2 photos',
    quote: 'Very user friendly software and good customer support 👍🏽👍🏽👍🏽',
    rating: 5,
    date: '2 weeks ago',
    tag: 'User-friendly',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Aditya Prakash',
    badge: 'Local Guide • 23 reviews',
    quote: 'Best support team and easy to use billing software ❤️',
    rating: 5,
    date: '1 week ago',
    tag: 'Support',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Ashwin Jinan',
    badge: '7 reviews • 1 photo',
    quote: 'Cafe QR handles our daily billing smoothly and keeps order tracking straightforward. It’s a practical, easy-to-use tool that reliably meets our operational needs.',
    rating: 5,
    date: '2 weeks ago',
    tag: 'Operations',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Sebastian Zacharias',
    badge: '3 reviews',
    quote: 'cafe qr is user friendly software with many features. price reasonable with excellent after sales. we recommend cafe qr to other parties also.',
    rating: 5,
    date: '1 month ago',
    tag: 'User-friendly',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Babu Francis Ptb',
    badge: 'Verified Customer • 2 photos',
    quote: 'I am using cafe QR more than 6 months. Really very good program, easy to use for beginners also',
    rating: 5,
    date: '1 month ago',
    tag: 'User-friendly',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Tax Bridge',
    badge: 'Business Account',
    quote: 'Excellent experience with Cafe QR POS & ERP. The system is user-friendly, efficient, and makes managing cafe operations much easier. The features are well-designed and the overall experience has been exceptional. Highly recommended!',
    rating: 5,
    date: '1 month ago',
    tag: 'ERP',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Cma Grp2',
    badge: 'Cafe Owner',
    quote: 'A fantastic POS and ERP solution for cafes. It makes billing, order management, and day-to-day operations smooth and hassle-free. Easy to use, efficient, and highly recommended for cafe businesses.',
    rating: 5,
    date: '1 month ago',
    tag: 'ERP',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Adham Muhammed',
    badge: 'Verified Customer',
    quote: 'It is an excellent billing software with a simple and user-friendly interface. It makes billing quick, accurate, and convenient. The features are useful for managing daily business operations, and the overall experience has been smooth',
    rating: 5,
    date: '1 month ago',
    tag: 'Operations',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Mk Shakeer',
    badge: '5 reviews • 3 photos',
    quote: 'I’m really impressed with Cafe QR POS and the entire Cafe QR team. The system is user-friendly, reliable, and makes day-to-day cafe operations much easier and more efficient.',
    rating: 5,
    date: '1 month ago',
    tag: 'POS',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Theertha Sukumar',
    badge: '3 reviews',
    quote: 'I really like how simple CafeQR is to use. It makes ordering quick and convenient without any unnecessary steps.',
    rating: 5,
    date: '1 month ago',
    tag: 'User-friendly',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
  {
    name: 'Sariga Uk',
    badge: 'Verified Customer',
    quote: 'Cafe QR is a really useful system for managing daily cafe operations. The billing and order management are easy to handle, and the reports are helpful for keeping track of the business. Overall, a smooth and convenient experience.',
    rating: 5,
    date: '1 month ago',
    tag: 'Operations',
    ownerReply: 'Thank you for your feedback. Happy to have you onboard.',
  },
];

const topics = ['All', 'User-friendly', 'POS', 'ERP', 'Operations', 'Support'];

export default function GoogleReviewsSection() {
  const [activeTopic, setActiveTopic] = useState('All');

  const filteredReviews =
    activeTopic === 'All'
      ? realReviews
      : realReviews.filter((r) => r.tag === activeTopic || (activeTopic === 'Support' && r.quote.toLowerCase().includes('support')));

  const googleMapsUrl =
    'https://www.google.com/maps/place/Cafe+QR/data=!4m7!3m6!1s0x45bf4233c195000b:0x8513df64a1a601b6!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11yp0wt4vl!19sChIJCwCVwTNCv0URtgGmoWTfE4U?authuser=0&hl=en';
  const writeReviewUrl = 'https://g.page/r/CbYBpqFk3xOFEBM/review';

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/20 relative z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-zinc-200 shadow-xs rounded-full text-xs font-bold text-zinc-800 mb-4">
            <span className="flex items-center justify-center w-4 h-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.665-5.2 3.665-9.12z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.43 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.24C.45 8.14 0 9.97 0 12s.45 3.86 1.24 5.43l4.04-3.14z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.57 1.24 6.57l4.04 3.14c.95-2.83 3.6-4.96 6.72-4.96z" />
              </svg>
            </span>
            <span>Google Maps Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Rated 5.0 Stars by Restaurant Owners
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-sm text-zinc-600 font-medium">
            <span className="text-amber-500 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-extrabold text-zinc-900 text-base">5.0 / 5.0</span>
            <span className="text-zinc-400">•</span>
            <span className="font-semibold text-zinc-700">29 Google Business Reviews</span>
            <span className="text-zinc-400 hidden sm:inline">•</span>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold hover:underline text-xs"
            >
              <MapPin className="w-3.5 h-3.5" /> View on Google Maps
            </a>
          </div>

          {/* Topic Filter Chips (Mirroring Google Maps UI) */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTopic === t
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-zinc-600 border border-zinc-200/80 shadow-2xs'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Real Reviews Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {filteredReviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium">{r.date}</span>
                </div>
                <p className="text-zinc-800 text-xs sm:text-sm leading-relaxed mb-4">
                  "{r.quote}"
                </p>

                {r.ownerReply && (
                  <div className="bg-zinc-50 border-l-2 border-primary/60 p-2.5 rounded-r-xl mb-4 text-[11px] text-zinc-600">
                    <span className="font-bold text-zinc-800 block text-[10px] mb-0.5">Response from Cafe QR Owner:</span>
                    {r.ownerReply}
                  </div>
                )}
              </div>

              <div className="pt-3.5 border-t border-zinc-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-orange-100 text-primary font-extrabold text-sm flex items-center justify-center shrink-0 border border-primary/20">
                  {r.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-zinc-900 truncate">{r.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  </div>
                  <p className="text-[10px] text-zinc-500 truncate">{r.badge || 'Verified Google User'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons to View and Write Reviews */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-50 text-zinc-800 text-xs sm:text-sm font-bold rounded-full border border-zinc-200 shadow-xs hover:shadow transition-all"
          >
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Read all 29 Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-orange-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Star className="w-4 h-4 fill-white" />
            <span>Write a Google Review</span>
          </a>
        </div>

      </div>
    </section>
  );
}
