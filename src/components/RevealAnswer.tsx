import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visable, setVisable] = useState<boolean>(false);
    function flipVisability(): void {
        setVisable(!visable);
    }
    return (
        <div>
            <Button onClick={flipVisability}>Reveal Answer</Button>
            {visable && <div>42</div>}
        </div>
    );
}
