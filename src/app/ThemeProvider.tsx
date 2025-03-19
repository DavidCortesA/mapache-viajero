'use client';

import { useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
}