import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptNum, setAttemptNum] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attemptNum > 0) {
            setInProgress(true);
            setAttemptNum(attemptNum - 1);
        }
    }
    function endQuiz(): void {
        setInProgress(false);
    }
    function addAttempt(): void {
        setAttemptNum(attemptNum + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || attemptNum === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={endQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attempts remaining: {attemptNum}</div>
            <div>Quiz in progress: {inProgress ? "Yes" : "No"}</div>
        </div>
    );
}
