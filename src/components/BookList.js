import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

const BookList = () => {
    const {dark, light, isLightTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>The Bible</li>
                <li style={{background: theme.ui}}>1985</li>
                <li style={{background: theme.ui}}>Cook Book</li>
            </ul>
        </div>
    );
};

export default BookList;
