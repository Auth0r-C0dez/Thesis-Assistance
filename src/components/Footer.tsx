import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Dissertation", href: "/dissertation/topic-selection" },
    { label: "Thesis Writing", href: "/thesis/synopsis" },
    { label: "Proposal Help", href: "/dissertation/proposal-writing" },
    { label: "Editing", href: "/thesis/editing" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-hero font-bold text-slate-900 hover:text-accent transition-colors">
              MyThesis
            </Link>
            <p className="mt-4 text-sm text-slate-600 max-w-xs leading-relaxed">
              Your trusted partner for thesis and dissertation success. Expert guidance at every step.
            </p>
          </div>

          <div>
            <h4 className="font-hero font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-hero font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-hero font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 MyThesis. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Crafted with care for academic excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
