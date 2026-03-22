"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-md h-full w-full z-10"
            style={{ backgroundColor: 'rgba(46, 45, 77, 0.6)' }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] sm:mt-16">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] h-full flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] sm:rounded-t-3xl shadow-2xl relative",
                classNameExpanded
              )}
              style={{ backgroundColor: '#f5ece6' }}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t before:from-[#f5ece6]">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-80 object-cover object-center"
                  />
                </div>
              </motion.div>
              <div className="relative h-full">
                <div className="flex justify-between items-start p-8 h-auto">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-lg font-medium"
                      style={{ color: '#e75a7c' }}
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="font-bold text-4xl mt-1"
                      style={{ color: '#2e2d4d' }}
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none"
                    style={{ backgroundColor: '#f5ece6', borderColor: '#e75a7c', color: '#2e2d4d' }}
                    onClick={() => setActive(false)}
                  >
                    <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-6 sm:px-8 pb-10">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-base flex flex-col items-start gap-4"
                    style={{ color: '#2e2d4d' }}
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="button"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "p-3 flex flex-col justify-between items-center rounded-2xl cursor-pointer border transition-shadow hover:shadow-lg",
          className
        )}
        style={{ backgroundColor: '#e4f0fa', borderColor: 'rgba(46,45,77,0.15)' }}
      >
        <div className="flex gap-4 flex-col w-full">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="w-full h-48 rounded-xl object-cover object-center"
            />
          </motion.div>
          <div className="flex justify-between items-center px-1 pb-1">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: '#e75a7c' }}
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="font-bold text-base mt-0.5"
                style={{ color: '#2e2d4d' }}
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none"
              style={{ backgroundColor: '#f5ece6', borderColor: '#e75a7c', color: '#e75a7c' }}
            >
              <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
