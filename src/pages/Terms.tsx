import { ArrowLeft, Shield } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
  posLoginUrl: string;
}

export default function Terms({ onBack, posLoginUrl }: TermsProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center p-5 lg:px-8 bg-white/70 backdrop-blur-2xl border-b border-zinc-200/50 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cafe QR Logo" className="w-8 h-8 object-contain rounded-md" />
            <span className="text-base font-bold tracking-tight text-zinc-900">Cafe QR ERP</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={posLoginUrl}
            className="px-5 py-2 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors text-xs"
          >
            POS Login
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-4">
            <Shield className="w-3.5 h-3.5" /> Legal Agreement & Policy
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-zinc-500 text-sm font-medium">
            Effective Date: August 19, 2026 • CafeQR LLP
          </p>
        </div>

        {/* Legal Cards Container */}
        <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-xl p-8 sm:p-12 space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">01</span>
              <h3>Software License & Subscriptions</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              CafeQR POS software is licensed on a yearly subscription basis. Each subscription grants a non-exclusive, non-transferable 1-year license to access the core POS features (Billing, Reports, Digital Menu, Tableside QR Ordering, and Account Management).
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Optional ERP add-on sachets (Kitchen Order Tickets / KOT, Inventory & Purchase ERP, Customer CRM, and Credit Ledger) can be purchased as annual add-ons. Standard core renewal is available at <strong>₹999/year</strong>.
            </p>
          </section>

          {/* Section 2 - Hardware */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">02</span>
              <h3>Hardware Sales & Warranty Disclaimer</h3>
            </div>
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-amber-900 text-sm leading-relaxed space-y-2">
              <p className="font-bold flex items-center gap-2 text-amber-950">
                ⚠️ Reseller Status & Manufacturer Warranty Notice
              </p>
              <p>
                <strong>CafeQR LLP acts solely as a reseller and is NOT the manufacturer of any hardware products</strong> (including 58mm and 80mm Bluetooth thermal receipt printers). All hardware products are manufactured by third-party companies (such as SHREYANS, Hoin, or OEM suppliers).
              </p>
              <p>
                Hardware warranty, including repair, technical service, and part replacement, is provided <strong>exclusively by the original hardware manufacturer</strong> or their designated service network. <strong>CafeQR LLP expressly disclaims all warranties, whether statutory, express, or implied, relating to hardware products.</strong>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">03</span>
              <h3>Returns & Refund Policy</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 text-sm leading-relaxed">
              <li>
                <strong>Hardware Products:</strong> Physical printers may be returned within <strong>7 days of delivery</strong> provided the unit is unopened, unused, and in its original sealed packaging. Return shipping charges are the responsibility of the customer.
              </li>
              <li>
                <strong>Software Licenses:</strong> Subscription fees and software activation charges are <strong>strictly non-refundable</strong> once the account is activated and credentials have been issued.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">04</span>
              <h3>Shipping, Delivery & Risk of Loss</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Hardware orders are dispatched via courier services within 1 to 2 business days following payment confirmation. Estimated transit time across India is <strong>3 to 5 business days</strong>. Title and risk of loss pass to the customer upon handover to the courier carrier.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">05</span>
              <h3>Limitation of Liability</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              In no event shall CafeQR LLP, its directors, or affiliates be liable for any indirect, special, incidental, or consequential damages (including loss of profits, business interruption, or data corruption) arising out of the use or inability to use the software or hardware. Total aggregate liability under any purchase shall not exceed the actual purchase price paid.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-lg border-b border-zinc-100 pb-2">
              <span className="w-7 h-7 rounded-xl bg-orange-100 text-primary flex items-center justify-center text-xs font-black">06</span>
              <h3>Privacy & Information Use</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We collect customer details (Name, Phone number, Email address, and Shipping address) solely for order processing, courier delivery, support, and account onboarding. We do not sell or share personal information with third parties except as necessary to complete payment and shipping transactions.
            </p>
          </section>

          {/* Contact footer inside card */}
          <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>For legal inquiries: <a href="mailto:pnriyas50@gmail.com" className="text-primary font-bold hover:underline">pnriyas50@gmail.com</a></p>
            <p>© {new Date().getFullYear()} CafeQR LLP. All rights reserved.</p>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-all shadow-md"
          >
            ← Back to CafeQR Homepage
          </button>
        </div>
      </main>
    </div>
  );
}
