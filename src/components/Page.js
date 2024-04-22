import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    // Using context to get the global theme
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`container ${theme === 'light' ? 'bg-light' : 'bg-dark'}`} id="themed-page">
            {/* Themed Text */}
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            {/* Themed Button */}
            <button className={`btn ${theme === 'light' ? 'btn-light txt-light' : 'btn-dark txt-dark'}`} id="themed-button">
                Themed Button
            </button>
            {/* LocalThemedBox */}
            <LocalThemedBox />
        </div>
    );
};
export { Page };
