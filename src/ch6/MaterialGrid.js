import {Button, Grid2} from "@mui/material";

export default function MaterialGrid() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={6}>
                <Button variant={"contained"} fullWidth>1</Button>
            </Grid2>
            <Grid2 size={2}>
                <Button variant={"contained"} fullWidth>3</Button>
            </Grid2>
            <Grid2 size={3}>
                <Button variant={"contained"} fullWidth>3</Button>
            </Grid2>
            <Grid2 size={12}>
                <Button variant={"contained"} fullWidth>4</Button>
            </Grid2>
        </Grid2>
    )

};
