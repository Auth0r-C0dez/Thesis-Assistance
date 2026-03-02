export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      {/* Move content up using -translate-y */}
      <div className="relative z-10 w-full max-w-5xl text-center -translate-y-12">
        <div className="px-0 sm:px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-slate-700">
              Academic Excellence, Delivered
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-hero font-bold leading-[1.15] tracking-tight text-slate-900">
            <span className="text-gradient">Thesis & Dissertation</span>
            <br />
            <span>Made Simple</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From topic selection to final submission — expert guidance at every step.
            Your academic success, our missiondoesn't easily support, use the style prop. This overrides all other CSS.
          </p>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-hero font-bold text-slate-900">
                10K+
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Projects Delivered
              </div>
            </div>

            <div className="w-px h-10 bg-slate-200 hidden sm:block" />

            <div>
              <div className="text-2xl sm:text-3xl font-hero font-bold text-slate-900">
                98%
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Success Rate
              </div>
            </div>

            <div className="w-px h-10 bg-slate-200 hidden sm:block" />

            <div>
              <div className="text-2xl sm:text-3xl font-hero font-bold text-slate-900">
                24/7
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[11px] text-slate-500">Scroll to explore</span>
        <svg
          className="w-5 h-5 text-primary/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}