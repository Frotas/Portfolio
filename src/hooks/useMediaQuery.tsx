"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook that determines if the current screen width matches or exceeds a given breakpoint.
 * @param {number} [breakpoint=640] The minimum width (in pixels) to trigger the mobile layout. Defaults to 640px.
 * @returns {boolean} Returns `true` if the current window width is greater than or equal to the breakpoint + 1, indicating a non-mobile screen size.
 * @example
 * const isNonMobile = useMediaQuery(768);
 * console.log(isNonMobile); // true if the window width is 769px or greater
 */
export const useMediaQuery = (breakpoint: number = 640): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= breakpoint + 1);
    };

    // Verifica o tamanho inicial da tela
    handleResize();

    // Escuta por mudanças no tamanho da tela
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
