/**@jsxImportSource @emotion/react */
import {Button} from '@mui/material';
import {css} from '@emotion/react';

export default function MaterialBasic() {
    const font = css`
      text-transform: none;
    `
    return (
        <>
            <Button variant={"text"} css={font}>Text</Button>
            <Button variant={"contained"} css={font}>Contained</Button>
            <Button variant={"outlined"} css={font} color={"secondary"}>Outlined</Button>

        </>
    );
};