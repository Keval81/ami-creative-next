import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
          <div className="relative inline-block mb-6">
            <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-navy leading-tight">
              Let&apos;s
              <br />
              Talk.
            </h2>
            <svg
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-24 h-24 text-primary hidden lg:block opacity-80"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 50 Q 50 10 90 50 T 90 90"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="8"
              />
              <path
                d="M70 40 L 90 50 L 80 70"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
            </svg>
          </div>
          <p className="text-lg text-navy/70 mb-12 max-w-md">
            Have a project in mind, a question, or just want to say hi?
            I&apos;m always open to discussing design work or partnership
            opportunities.
          </p>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 bg-light-blue rounded-3xl transform translate-x-4 translate-y-4 -z-10 hidden sm:block" />
          <div className="bg-light-blue rounded-3xl shadow-xl p-8 sm:p-10 border border-navy/5 relative z-10">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <label className="flex flex-col flex-1 group">
                  <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                    Name
                  </span>
                  <input
                    className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors placeholder:text-slate-400 font-medium"
                    placeholder="Jane Doe"
                    required
                    type="text"
                  />
                </label>
                <label className="flex flex-col flex-1 group">
                  <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                    Email
                  </span>
                  <input
                    className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors placeholder:text-slate-400 font-medium"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </label>
              </div>
              <label className="flex flex-col group">
                <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                  Subject
                </span>
                <select className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors appearance-none font-medium">
                  <option>Project Inquiry</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                  <option>Just Saying Hi</option>
                </select>
              </label>
              <label className="flex flex-col group">
                <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                  Message
                </span>
                <textarea
                  className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors min-h-[160px] resize-y placeholder:text-slate-400 font-medium"
                  placeholder="Tell me about your project..."
                  required
                />
              </label>
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <ShimmerButton
                  background="rgba(231, 90, 124, 1)"
                  shimmerColor="#ffffff"
                  borderRadius="100px"
                  className="px-8 py-3 font-semibold w-full"
                  type="submit"
                >
                  Send Message
                </ShimmerButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
