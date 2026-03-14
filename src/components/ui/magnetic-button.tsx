'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonType = {
  children: React.ReactNode;
  distance?: number;
  href?: string;
  className?: string;
  variant?: 'default' | 'pink';
};

function MagneticButton({ children, distance = 0.6, href, className, variant = 'default' }: MagneticButtonType) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        if (isHovered) {
          x.set(distanceX * distance);
          y.set(distanceY * distance);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };
    document.addEventListener('mousemove', calculateDistance);
    return () => document.removeEventListener('mousemove', calculateDistance);
  }, [ref, isHovered, distance, x, y]);

  const handleClick = () => {
    if (href) window.location.href = href;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ x: springX, y: springY, display: 'inline-block', cursor: 'pointer' }}
    >
      <div className={`rounded-full border-2 px-8 py-3 font-semibold text-base transition-colors duration-200 ${className || ''}`}
        style={variant === 'pink'
          ? { borderColor: '#e75a7c', color: 'white', backgroundColor: '#e75a7c' }
          : { borderColor: '#2e2d4d', color: '#2e2d4d', backgroundColor: 'white' }
        }>
        {children}
      </div>
    </motion.div>
  );
}

export { MagneticButton };
