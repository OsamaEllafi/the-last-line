import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ endValue, prefix = '', suffix = '', duration = 2, className = '' }) {
  const [value, setValue] = useState(0);
  const containerRef = useRef(null);

  // We use a simple object to hold the tweened value
  const counterObj = useRef({ val: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let tween = gsap.to(counterObj.current, {
      val: endValue,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        // Update state to trigger re-render
        // We handle decimals if endValue is a float
        const currentVal = counterObj.current.val;
        const isFloat = !Number.isInteger(endValue);
        setValue(isFloat ? currentVal.toFixed(1) : Math.round(currentVal));
      }
    });

    return () => {
      if (tween.scrollTrigger) {
          tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [endValue, duration]);

  return (
    <div ref={containerRef} className={className}>
      {prefix}{value}{suffix}
    </div>
  );
}
