import {useState} from "react";
import {Button, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {amber, grey} from "@mui/material/colors";

export default function MaterialMode() {
    // const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    const [mode, setMode] = useState('light');
    const toggleMode = () => setMode(prev =>
        prev === 'light' ? 'dark' : 'light');

    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light' ? {
                primary: amber,


            } : {
                primary: {
                    main: grey[500],
                    contrastText: '#fff'
                },
                backgroud:{
                    default: grey[500],
                    paper: grey[900],
                }
            })
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Button variant={"contained"} onClick={toggleMode}>
                Mode {mode}
            </Button>
        </ThemeProvider>
    );
};