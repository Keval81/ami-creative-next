import { ExpandableCard } from "@/components/ui/expandable-card";

const CARDS = [
  {
    num: "01",
    title: "London Met Talk",
    description: "Inspiring the next gen",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjtM4oqsuLzqUcFKFvOtx6bDUD7jEbn6rHsLq52qeyzbOMjaVZ7eUSWsaBcZyoOIiy6asX7o825SpSCDn8WXO49QAu-Rek1uOsAMz_uoxQ6yUx87rtedmAqFUBbuVJdRpHK-pmRHzimpDfFIcCooyNKgjD8ek7Lx0VCLS-IWZsCZCFaJ5or_DxRv7T1LqMFhD88tR0Lalx3toTEONh_MGoP646qoRhEcxvAxTFno1lsJaD04voMWSTxk1v--uAA5nKgMi1BNw1RyOi",
    body: "Nia was invited to speak at London Metropolitan University, sharing her journey in creative marketing and inspiring the next generation of designers and brand strategists.",
    pos: "top-0 left-0 md:left-10",
    size: "w-64 md:w-72",
    rotate: "rotate-[-3deg]",
    z: "z-10",
  },
  {
    num: "02",
    title: "Filming Day",
    description: "Action! Behind the lens",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAhetHT8rswzFpn-AHDhTUeTV-Gdf7DJppICG06vGshT5A9X3Q6omn6J_3kkKsvTXp6QwI8WbGVRts9UYCzNP4rbAYXLSRXQoJaZ484hR_-ZQjxIJ58Ch3zLTvdKoj9IjFGjvMWGHI2V0z5IxdigLhmBsN9oHUyAQ53tholSGv4ybKQOu8Hq206bgr-bksclW1a7bCv8foUpY3FP2NmHHItw7v1OPv46WtJJ-9uOsqUc7bxz0CQe-GUQ6GJgZkQkr96UIRNyjUqElN",
    body: "A full day on set directing and producing brand video content — from concept to camera, bringing stories to life through motion and narrative.",
    pos: "top-64 md:top-20 right-0 md:right-32",
    size: "w-72 md:w-80",
    rotate: "rotate-[2deg]",
    z: "z-10",
  },
  {
    num: "03",
    title: "Brand Launch",
    description: "Pop, clink, cheer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsx9C5IjSERqKbMy5eLeUQvT-Jwj6i7o38pNpR660NzxmT0c9oXrthTzUPnuixxiYIIRrE3cTDk9iWVq7jh045nqgWUX5zWi0Pq_3DqHj8MCLs9u1Uqhw-XIvB4I8V5FF99dToF64hlGFuYtnKlM3J7CZbBOFVJLLvGxjPZQt032n9GgrlvBqU-_v_08cIYVJ3Bf051svMv5njzATmvcUE5il5mIgkncqnzjjZl4hCcJ23ciQdv5rk_SMEb80ihbJbtAVZeS0d30cV",
    body: "The excitement of a live brand launch — months of strategy, design and preparation culminating in one memorable moment. This project marked a major milestone for the client's identity.",
    pos: "top-[480px] md:top-72 left-8 md:left-[10%]",
    size: "w-60 md:w-64",
    rotate: "rotate-[-5deg]",
    z: "z-20",
  },
  {
    num: "04",
    title: "Creative Workshop",
    description: "Ideas flowing",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4_o9vuJcwTx1rPSyClWPVvS476d076Et1_W0-4sr6aktyUz-wZuLWv_3LQFRiv6ofb-uqSfoPih48FEGd3v-GEpDkM_5qiBUCzeTIEyIjRaAmXvOaOVtKTpzbrVwEF6vYBHzRJEkzbB5pfQhaxCXMJgVd0HSdgXu_Ot7Yzrhx2MtDfhMenfWm3CW-qfJpy51kUFzOforCme714gxdGznNQUP24Wt-hor8_yr75avUlpPIk0ioPkL9Vs2AHKmcSPAbu9qFDSogtU0X",
    body: "Facilitating a creative workshop for a team of marketers — exploring brand voice, visual language and storytelling techniques to unlock fresh thinking.",
    pos: "hidden md:block top-[380px] right-20",
    size: "w-64",
    rotate: "rotate-[4deg]",
    z: "z-30",
  },
  {
    num: "05",
    title: "Awards Night",
    description: "Winning moments",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSBy5xWrCOIokNaRZqyO4l2I8yYFa1HCrxlH9pm0VM_jJiaTzfYUAebkIf__tY53q8ruj2NOegKkmFLDwriWC2of9l8k51cHYZgsm93T4uopCarUdP0T5zjmUhQvY3G-_dz9juMOda5kRouDiHcD0e3WDihdA5PlZU3KI058YmzPsF4OAbczkT3Q_nDAntwRegj0z_MXfqhEfQ6NnA0vx8w_yaUE_HgvJUMSZ9-rihxoNxx30GvtB5srFPKO-YplL09FReXM7w-jUn",
    body: "Recognised for excellence in creative direction at a prestigious industry awards evening — a celebration of the work, the team, and the craft.",
    pos: "hidden md:block top-[550px] left-[45%]",
    size: "w-60",
    rotate: "rotate-[-1deg]",
    z: "z-10",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 relative z-10">
          <div className="absolute -left-4 top-2 w-2 h-16 bg-primary rounded-full" />
          <h2 className="font-heading text-6xl md:text-7xl font-black leading-none tracking-tighter mb-4 text-navy pl-4">
            Highlights
          </h2>
          <p className="text-primary text-xl md:text-2xl font-medium pl-4">
            Nia&apos;s career journey so far
          </p>
        </div>
        <div className="relative w-full h-[1000px] md:h-[800px] px-4">
          {/* Decorative path */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
            <svg
              className="w-full h-[700px]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="opacity-60"
                d="M120 150 C 300 250, 600 50, 800 150 S 900 300, 750 450 S 300 350, 200 550 S 400 650, 500 650"
                stroke="#2e2d4d"
                strokeDasharray="12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
          {CARDS.map((c) => (
            <div
              key={c.num}
              className={`absolute ${c.pos} ${c.size} transform ${c.rotate} hover:rotate-0 hover:z-50 transition-all duration-300 ${c.z} group`}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-heading font-bold shadow-md border-4 border-cream z-20 transition-transform group-hover:scale-110">
                {c.num}
              </div>
              <ExpandableCard
                title={c.title}
                src={c.src}
                description={c.description}
              >
                <p>{c.body}</p>
              </ExpandableCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
