const features = [
  {
    title: "Topic Selection",
    desc: "Expert guidance to choose compelling, research-worthy topics that align with your academic goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Proposal Writing",
    desc: "Structured proposals that impress committees and set a clear roadmap for your research journey.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Data Analysis",
    desc: "Rigorous statistical analysis and interpretation to strengthen your research findings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Editing & Formatting",
    desc: "Polished manuscripts that meet institutional guidelines and publication standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/15 border border-primary/25 mb-6">
            Our Services
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-hero font-bold text-slate-900">
            Everything You Need For Success
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive thesis and dissertation support at every stage of your academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-hero font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
