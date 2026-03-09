import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(ref, animationType = 'fade-up', delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tween;
    const commonConfig = {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      ease: 'power3.out',
      delay,
    };

    switch (animationType) {
      case 'fade-up':
        gsap.set(el, { opacity: 0, y: 50 });
        tween = gsap.to(el, { opacity: 1, y: 0, ...commonConfig });
        break;
      case 'fade-in':
        gsap.set(el, { opacity: 0 });
        tween = gsap.to(el, { opacity: 1, ...commonConfig });
        break;
      case 'slide-right':
        gsap.set(el, { opacity: 0, x: -50 });
        tween = gsap.to(el, { opacity: 1, x: 0, ...commonConfig });
        break;
      case 'scale-up':
        gsap.set(el, { opacity: 0, scale: 0.9 });
        tween = gsap.to(el, { opacity: 1, scale: 1, ...commonConfig });
        break;
      default:
        gsap.set(el, { opacity: 0, y: 50 });
        tween = gsap.to(el, { opacity: 1, y: 0, ...commonConfig });
    }

    return () => {
      if (tween && tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      gsap.killTweensOf(el);
    };
  }, [ref, animationType, delay]);
}
