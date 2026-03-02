export default function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="relative z-10 max-w-4xl mx-auto text-center rounded-3xl p-10 sm:p-14 bg-white border border-slate-200 shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-hero font-bold text-slate-900">
          Ready to Ace Your Thesis?
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful graduates. Get expert support from topic selection to final submission — and make your academic journey stress-free.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-10 py-4 rounded-2xl bg-accent text-slate-900 font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Start Your Project
          </a>
          <a
            href="#"
            className="px-10 py-4 rounded-2xl border border-slate-300 text-slate-900 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02]"
          >
            Talk to an Expert
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Free consultation • No commitment • 100% confidential
        </p>
      </div>
    </section>
  );
}
