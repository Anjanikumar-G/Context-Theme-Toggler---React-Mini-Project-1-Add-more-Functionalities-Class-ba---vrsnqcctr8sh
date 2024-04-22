import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
    const { theme } = useContext(ThemeContext);
    const [localTheme, setLocalTheme] = useState('light');

    const toggleLocalTheme = () => {
        setLocalTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Update local theme when global theme changes
    useEffect(() => {
        setLocalTheme(theme);
    }, [theme]);

    return (
        <div id="local-themed-box" className={bg-${localTheme}}>
            <p id="local-themed-text-container" className={txt-${localTheme}}>
                Local Themed Text
            </p>
            <button
                id="local-theme-toggler"
                className={btn ${localTheme === 'light' ? 'btn-light' : 'btn-dark'} txt-${localTheme}}
                onClick={toggleLocalTheme}
            >
                Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
            </button>
        </div>
    );
};

export { LocalThemedBox };
