import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Context } from "../context/Context";

export const DarkMode = () => {

    const { isDarkMode, toggleDarkMode } = useContext(Context);

    //Metodo que se ejecute al hacer clic en el icono
    const handleToggleDarkMode = () => {
        toggleDarkMode();
        localStorage.setItem('dark-mode', !isDarkMode);  // Almacena el estado del darkMode en el localstorage para que persista entre sesiones
    }

    return (
        <button onClick={handleToggleDarkMode} className="dark-mode-button">
            {isDarkMode ? (
                <FaSun className="dark-mode-icon dark-mode-icon-sun" />
            ) : (
                <FaMoon className="dark-mode-icon dark-mode-icon-moon" />
            )}
        </button>
    );
};
