import {Button, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {amber, grey} from "@mui/material/colors";
import ThemeContext from "./ThemeContext";
import {useState} from "react";

export default function MyThemeProvider({children}) {
    const [mode, setMode] = useState('light');

    const themeConfig = {
        mode,
        toggleMode: () => {
            setMode(prev =>
                prev === 'dark' ? 'light' : 'dark');
        }
    };
    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light' ? {
                primary: amber,
            } : {
                primary: {
                    main: grey[500],
                    contrastText: '#fff',

                },
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
            })
        }
    })

    return (
        <ThemeContext.Provider value={themeConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};