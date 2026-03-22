"use client";

import { useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

async function handleSubmitRequest(
  e: React.FormEvent<HTMLFormElement>,
  setStatus: (s: "idle" | "submitting" | "success" | "error") => void
) {
  e.preventDefault();
  if (!endpoint) return;
  setStatus("submitting");
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
            {status === "success" ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <p className="text-xs tracking-widest uppercase text-primary font-medium">Message sent</p>
                <h3 className="font-heading font-black text-3xl text-navy">Thanks!</h3>
                <p className="text-navy/70 text-lg">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => handleSubmitRequest(e, setStatus)}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex flex-col flex-1 group">
                    <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                      Name
                    </span>
                    <input
                      className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors placeholder:text-slate-400 font-medium"
                      name="name"
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
                      name="email"
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
                  <select
                    className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors appearance-none font-medium"
                    name="subject"
                  >
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
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                  />
                </label>
                <div className="pt-4 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={!endpoint || status === "submitting"}
                    title={!endpoint ? "Contact form not yet configured" : undefined}
                    className="w-full py-4 px-8 rounded-full font-heading font-bold text-white bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">
                      Something went wrong — please email{" "}
                      <a href="mailto:hello@amicreative.com" className="underline">
                        hello@amicreative.com
                      </a>{" "}
                      directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
