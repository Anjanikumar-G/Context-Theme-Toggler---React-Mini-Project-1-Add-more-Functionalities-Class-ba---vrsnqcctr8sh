import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    // State to manage the current theme
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
