'use client'
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import scrollToTop from "@/app/utils/scrollToTop";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const routePath = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [routePath]);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 bg-custom-black right-10 opacity-50 rounded-4xl p-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <ArrowUp color="" size={24} />
        </button>
      )}
    </>
  );
}
