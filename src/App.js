import React from 'react';
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContext from "./contexts/BookContext";


function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar/>
                    <BookContext>
                        <BookList/>
                    </BookContext>
                    <ThemeToggle/>
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
