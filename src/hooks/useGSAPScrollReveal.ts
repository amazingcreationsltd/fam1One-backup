import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRevealOptions {
  headerSelector?: string;
  itemsSelector?: string;
  stagger?: number;
  start?: string;
  yOffset?: number;
  blurAmount?: number;
}

export const useGSAPScrollReveal = (
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) => {
  const {
    headerSelector = '.section-header',
    itemsSelector,
    stagger = 0.14,
    start = 'top 85%',
    yOffset = 42,
    blurAmount = 10,
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Reveal Section Header with Cinematic Blur
      if (headerSelector) {
        const header = container.querySelector(headerSelector);
        if (header) {
          gsap.fromTo(
            header.children,
            {
              y: 28,
              opacity: 0,
              filter: `blur(${blurAmount}px)`,
            },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.85,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'filter,willChange',
              scrollTrigger: {
                trigger: header,
                start,
                once: true,
              },
            }
          );
        }
      }

      // 2. Reveal Staggered Cards / Items with Blur
      if (itemsSelector) {
        const items = container.querySelectorAll(itemsSelector);
        if (items.length > 0) {
          gsap.fromTo(
            items,
            {
              y: yOffset,
              opacity: 0,
              filter: `blur(${blurAmount}px)`,
              scale: 0.98,
            },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              scale: 1,
              duration: 0.95,
              stagger,
              ease: 'power3.out',
              clearProps: 'filter,scale,willChange',
              scrollTrigger: {
                trigger: items[0],
                start,
                once: true,
              },
            }
          );
        }
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef, headerSelector, itemsSelector, stagger, start, yOffset, blurAmount]);
};
