import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee({ text, direction = 'left', speed = 1, className = '' }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    // Clone the text content multiple times to ensure seamless scrolling
    const clones = 3;
    for (let i = 0; i < clones; i++) {
      const clone = textEl.cloneNode(true);
      container.appendChild(clone);
    }

    const totalWidth = textEl.offsetWidth;

    // Animate the entire container holding all clones
    let tween = gsap.to(container, {
      x: direction === 'left' ? -totalWidth : totalWidth,
      ease: 'none',
      duration: totalWidth / (50 * speed),
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth) // Ensures seamless looping
      }
    });

    return () => {
      // Clean up clones added to the DOM to avoid duplication on re-renders
      if (container) {
         while (container.childNodes.length > 1) {
             container.removeChild(container.lastChild);
         }
      }
      if (tween) {
          tween.kill();
      }
    };
  }, [direction, speed]);

  return (
    <div className={`overflow-hidden whitespace-nowrap flex py-8 border-y border-white/10 ${className}`}>
      <div ref={containerRef} className="flex font-display font-black text-6xl md:text-9xl tracking-tighter uppercase text-transparent [-webkit-text-stroke:1px_#FF6F61] opacity-60 mix-blend-screen w-max">
        <span ref={textRef} className="px-8">{text}</span>
      </div>
    </div>
  );
}
