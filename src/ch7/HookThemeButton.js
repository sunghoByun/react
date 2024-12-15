import {Button} from "@mui/material";
import {useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function HookThemeButton() {
    const {mode, toggleMode} = useContext(ThemeContext);
    return (
        <>
            <Button variant="contained" onClick={toggleMode}>
                Mode {mode}
            </Button>
        </>
    );
};
