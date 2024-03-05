import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holidays = "🕎" | "🦃" | "🎃" | "🇺🇸" | "🍀";
    const [holiday, setHoliday] = useState<holidays>("🕎");
    const ALPHABETIC: Record<holidays, holidays> = {
        "🇺🇸": "🕎",
        "🕎": "🎃",
        "🎃": "🍀",
        "🍀": "🦃",
        "🦃": "🇺🇸"
    };
    const YEARLY: Record<holidays, holidays> = {
        "🍀": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🦃",
        "🦃": "🕎",
        "🕎": "🍀"
    };

    return (
        <div>
            Holiday: {holiday}
            <Button onClick={() => setHoliday(ALPHABETIC[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(YEARLY[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}
