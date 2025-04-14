import React, { useState } from "react";

type ButtonProps = {
    label: string,
    onClick: () => Promise<void>,
    disabled?: boolean,
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    const [isDisabled, setIsDisabled] = useState(disabled);

    const handleClick = async () => {
        setIsDisabled(true);
        await onClick();
        setIsDisabled(false);
    }

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}