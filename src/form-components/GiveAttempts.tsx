import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [attemptsRequested, setAttemptsRequested] = useState("");

    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAttemptsRequested(event.target.value);
    };

    const useAttempt = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const gainAttempts = () => {
        const requested = parseInt(attemptsRequested, 10);
        if (!isNaN(requested)) {
            setAttemptsLeft(attemptsLeft + requested);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsRequested}
                onChange={handleRequestChange}
                aria-label="Requested Attempts"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
