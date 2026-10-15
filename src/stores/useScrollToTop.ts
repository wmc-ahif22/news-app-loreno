import { useState, useEffect } from 'react';
import type {RefObject } from 'react'

export const useScrollToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > threshold;
      setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    };

    // Initialen Status setzen
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = (targetRef?: RefObject<HTMLElement | null>) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { isVisible, scrollToTop };
};