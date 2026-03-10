import { createContext, useContext, useState, useRef } from "react";

type HeroSlideContextType = {
  current: number;
  goTo: (index: number) => void;
  fading: boolean;
};

const HeroSlideContext = createContext<HeroSlideContextType>({
  current: 0,
  goTo: () => {},
  fading: false,
});

export function HeroSlideProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 350);

    // Reset auto-advance timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2); // 2 = total slides
    }, 8000);
  };

  return (
    <HeroSlideContext.Provider value={{ current, goTo, fading }}>
      {children}
    </HeroSlideContext.Provider>
  );
}

export function useHeroSlide() {
  return useContext(HeroSlideContext);
}