const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "PhD Graduate, Stanford",
    text: "MyThesis transformed my dissertation journey. The expert guidance on data analysis and the meticulous editing helped me achieve a distinction. Truly exceptional service!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Chen",
    role: "MBA Candidate, Harvard",
    text: "From proposal to final submission, the team was incredibly supportive. The topic selection workshop alone was worth every penny. Highly recommend to any graduate student.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Aisha Patel",
    role: "Research Scholar, MIT",
    text: "The plagiarism check and formatting services saved me weeks of work. Professional, timely, and the quality exceeded my expectations. Will use again for my next paper.",
    rating: 5,
    avatar: "AP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/15 border border-accent/25 mb-6">
            Testimonials
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-hero font-bold text-slate-900">
            Trusted by Thousands
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            See what our clients say about their experience with MyThesis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-4xl font-serif text-primary/40 mb-4">&ldquo;</div>
              <StarRating count={item.rating} />
              <p className="mt-5 text-slate-700 leading-relaxed">
                {item.text}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-white font-hero font-semibold text-sm">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-hero font-semibold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
