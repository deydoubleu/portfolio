import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // or /outline
import { cn } from "@/lib/utils";

export const ChangeTheme = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme == 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    const switchTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        setIsDarkMode(!isDarkMode);
    }

    return (
    <button onClick={switchTheme} 
        className={cn("fixed top-4 right-1 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-none"
        )}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
        {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
         ) : ( 
         <MoonIcon className="h-6 w-6 text-blue-900" /> 
         ) }
    </button> 
    );
}