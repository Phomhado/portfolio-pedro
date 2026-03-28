'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const dotOpacity = useMotionValue(0);
  const ringOpacity = useMotionValue(0);
  const dotScale = useMotionValue(1);
  const ringSize = useMotionValue(30);

  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600 });
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 160 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 160 });
  const smoothScale = useSpring(dotScale, { damping: 20, stiffness: 300 });
  const smoothRingSize = useSpring(ringSize, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotOpacity.set(1);
      ringOpacity.set(0.45);

      const target = e.target as HTMLElement;
      const hovering =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button');

      dotScale.set(hovering ? 1.8 : 1);
      ringSize.set(hovering ? 48 : 30);
    };

    const handleMouseLeave = () => {
      dotOpacity.set(0);
      ringOpacity.set(0);
    };
    const handleMouseEnter = () => {
      dotOpacity.set(1);
      ringOpacity.set(0.45);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, dotOpacity, ringOpacity, dotScale, ringSize]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent-r)',
          mixBlendMode: 'difference',
          opacity: dotOpacity,
          scale: smoothScale,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid var(--fg)',
          mixBlendMode: 'difference',
          opacity: ringOpacity,
          width: smoothRingSize,
          height: smoothRingSize,
        }}
      />
    </>
  );
}
