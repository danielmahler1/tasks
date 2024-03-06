import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler({ onDouble }: { onDouble: () => void }): JSX.Element {
    return <Button onClick={onDouble}>Double</Button>;
}

function Halver({ onHalve }: { onHalve: () => void }): JSX.Element {
    return <Button onClick={onHalve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const handleDouble = () => {
        setDhValue(dhValue * 2);
    };
    const handleHalve = () => {
        setDhValue(dhValue * 0.5);
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onDouble={handleDouble}></Doubler>
            <Halver onHalve={handleHalve}></Halver>
        </div>
    );
}
