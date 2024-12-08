import { useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode

    // Toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const htmlElement = document.documentElement; // Reference to <html> element
        if (isDarkMode) {
            htmlElement.setAttribute('data-theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-800 text-white rounded-full fixed top-4 right-4"
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
