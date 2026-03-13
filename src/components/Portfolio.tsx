const PROJECTS = [
  { title: "Project Alpha", category: "Branding", aspect: "aspect-[3/4]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1Itqs5TeW7JGREGqAUtCYh6cUQJZOKOzsuOEIRrXEdyWcgyFzTFVVsg6axnXYCF-bEjtGH9Cepe8SrvzHEkZVY0RJh8xbeIYj3tW6YbCOynOrU5GCDHybzqM-oCt9BzwYV6EXrQ7JI3XQmjMX1nmIWKpb9LIcoXCLqlJgBZzfL7ZD-VESb__V5Z9VIBvIfenEZ-hedsyBi_6zdCCQXs0cq3cgkktvqLCWaiEgTCMgkmgEFepLzUZEVqLOQmrvM7dNSbDoXlhkVm6" },
  { title: "Brand Refresh", category: "Web Design", aspect: "aspect-square", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcDq7i81ua0Po7wDQKLmzhhL8Ti7W_uiTXqHWfApW4elSeNbDXM4bBZSOyKID_FnNqXPJ7PgcXWiOhxRjyzRjVGM62uzL96i24fASX-d13M1-LI8MqbzChVMR50ZyxikQYL9Yy4W5TMyXJc7Wx40eaWuuxFg9hwHKcXMTEZxhYjITH_hiuECtHC-7MKUsrVTD7FcEsxE3bpjZwkBXgzhwRRuYdW7CYCbWX1hcBfnXUnrjegUNhCc3bAYYUVnJYdYgxKVQHvo_HHH_r" },
  { title: "Web App Redesign", category: "UX/UI", aspect: "aspect-[4/3]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIaQy1_4e424hXZ2BJA1daYtICaEcetBUPVGr6jiAw26ykgWdvxllw0vSSjrBZATYiNO7DEBXwfzamc8R-SribDcxgp5zG8m6Q3c66Qsw3cdNmJz7MpdDVvHarHQF931c1TEhJBKUG9aaEV2kpSxCbN7g7OJCEDwRxwaQ5V7XfhM9it9HhdCqBqz5iDZdx1HiFPLJVIcqdDpjWIulgrPh650_uF-8MKZWMhl87ZJnaCBhhn-LaDvAlDK99XZF94hCjJ36_9-gBkSd6" },
  { title: "Editorial Illustration", category: "Illustration", aspect: "aspect-[2/3]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVU7VhTfEccCoSDzs1rRphmkmYZ6eqMcjHMRHH0jznBQJs6PJ0BSEBp9dteeoDK7KUzDepn-BrHidvMRM6FPyE0hw2b0caWXoxgEfjMvJqc1jodTZqZkS0a288kdioDhEPN2kCPeM8NZm85MP3S7THL305zW6arjj1YqpNRXoPnfjmeTCAibD_kfntHeFPHoO9eXIjOjZD-vm-18gk-r993qMnYMr6MJoe19rS6wx8ucG-bbamfQYQUPacDik-39IckRIfQ8vfJ8HF" },
  { title: "Social Campaign", category: "Marketing", aspect: "aspect-square", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0i0Ag62CrqP4PC7sxFwpfnAPkjgXqYedrO1wL566WlwilHQ-yVhLZEcJVO6ss916V69gZ2L6-EZaznin9FCvbJfj4KPx1a93WN92dLyVrRgTVBUobe5TJ-E0Jf31NqD_GVEqAs5CKLi9jLPjPglu9rc0SmQaJU5xFtoGc4x2b-WlMg7akZovmSezQlmqhumYYUU9Sl_t1ZmyU_NOpatoCBRMLC_ff0cDfF0AcH2AU1qtwpzZ4xUTRXuMMFID8bbdjlqorddKT8-VV" },
  { title: "Packaging Design", category: "Packaging", aspect: "aspect-[4/5]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2OIsrMCAvP8cTtJst0o32g0eKLBTwV8gmdk-XsR9jkkFrIIRxttmFG54wi9jypgd_yTXyEuExO-6WP-0v6wEkDPMtFyH7MUuZSVq7yLyBg3Xfw6dwZTzytA2mNh7tSYfxLGsUMcuvwxjev6QMIe8J9NFgMeYTCYo16S0gLdyaXNQsyuw1r-E3YM4_E9XIjph0sWwigYoKyQS9K3UOFuXgJy2D8xKEWevEiT0taKEEpoaM-NgAyGMYsDsKQoqto943E96klnEOZvY2" },
  { title: "Neon Vibes", category: "Digital Art", aspect: "aspect-video", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3eTGg9DoxQeyvG8MfzYRDFHH67ULlYMJfPn8n3H1nHELClWMFv2Qdvze-SHQojVuhl3i2fEnDN1JfH3TPnUcYzXXPj2yhWIO7pk6ZmT6vFobBAQGns9QSqqAP97DSqFOOKcYUDtG8X_wai-jl_NJflc83MtrwvT8TnyqXTHv05YO_-sQE84ujPJ3pt_tIdA3UNTeAdiFLLovmqxzBiNYkYocM3MCKJiEP6IO1HSEcCFf5bFFw34E2_DkuUQR2vkO_UIQ7d3qpU-jE" },
];

const FILTERS = ["All Work", "Branding", "Web Design", "Illustration"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-heading text-5xl lg:text-7xl font-black leading-none tracking-tight text-navy">
              Selected
              <br />
              Projects
            </h2>
            <p className="text-lg text-navy/70 font-medium max-w-md mt-4">
              A dynamic showcase of our recent creative work, exploring
              boundaries in digital spaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`flex h-10 items-center justify-center rounded-full px-6 text-sm cursor-pointer ${
                  i === 0
                    ? "bg-primary text-white font-semibold shadow-sm hover:shadow transition-all"
                    : "bg-light-blue text-navy font-medium hover:bg-primary/10 transition-colors"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="break-inside-avoid group cursor-pointer flex flex-col bg-light-blue rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <div
                className={`w-full ${p.aspect} bg-center bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url("${p.img}")` }}
                role="img"
                aria-label={p.title}
              />
              <div className="p-6">
                <p className="text-navy text-xl font-heading font-semibold mb-1">
                  {p.title}
                </p>
                <p className="text-primary text-sm font-medium tracking-wide uppercase">
                  {p.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-primary text-primary text-sm font-heading font-bold tracking-wide hover:bg-primary hover:text-white transition-colors">
            Load More Work
          </button>
        </div>
      </div>
    </section>
  );
}
