import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);
    function rollDie1(): void {
        setDie1(d6());
    }
    function rollDie2(): void {
        setDie2(d6());
    }
    function snakeEyes(): boolean {
        return die1 === 1 && die2 === 1;
    }
    function gameResult(): string {
        if (snakeEyes()) {
            return "Lose";
        } else if (die1 === die2) {
            return "Win";
        } else {
            return "";
        }
    }

    return (
        <div>
            Left Die: <span data-testid="left-die">{die1}</span>
            Right Die: <span data-testid="right-die">{die2}</span>
            <Button onClick={rollDie1}>Roll Left</Button>
            <Button onClick={rollDie2}>Roll Right</Button>
            <div>{gameResult()}</div>
        </div>
    );
}
