'use client'

import useDarkMode from "@/hooks/useDarkMode";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/16/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline";

export default function Header(){
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="fixed w-full z-10 bg-white shadow-lg dark:bg-dark-blue">
      <nav className="flex justify-between items-center container mx-auto py-4">
        <h3 className="text-xl font-semibold text-dark-blue dark:text-white">Mapache Viajero</h3>
        <div className="text-sm font-semibold text-dark-blue dark:text-white">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-dark-blue dark:text-white"
          >
            {isDarkMode ? <MoonIconOutline className="w-4 h-4" /> : <MoonIconSolid className="w-4 h-4" /> }{" "}Dark Mode
          </button>
        </div>
      </nav>
    </header>
  )
}