import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("Red");
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Brown"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div
                style={{ backgroundColor: selectedColor }}
                data-testid="colored-box"
            >
                {selectedColor}
            </div>
            <form>
                {colors.map((color) => (
                    <label key={color} style={{ margin: "0 10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={(e) => setSelectedColor(e.target.value)}
                        />
                        {color}
                    </label>
                ))}
            </form>
        </div>
    );
}
