import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userAnswer} onChange={handleChange} />
            <span>{userAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
