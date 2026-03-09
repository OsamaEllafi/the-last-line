import { useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Section({ children, className = '', animationType = 'fade-up', delay = 0, bgColor = 'var(--color-background)' }) {
  const sectionRef = useRef(null);

  // Hook handles applying entrance animations based on scroll
  useScrollAnimation(sectionRef, animationType, delay);

  // Optional: Update CSS variables or data attributes for background color shifting when this section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.style.setProperty('--bg-current', bgColor);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [bgColor]);

  return (
    <section ref={sectionRef} className={`relative min-h-screen py-24 flex flex-col justify-center overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
