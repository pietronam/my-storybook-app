import React, { useState } from "react";
import { Button } from "./Button";

type UserCardProps = {
    name: string;
    email: string;
};

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    const handleClick = async () => {
        return new Promise<void>(
            (resolve) => setTimeout(() => {
                setIsConfirmed(true);
                resolve();
            }, 2000)
        )
    }

    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{name ? name : "Errore: utente non trovato"}</h3>
            <p>{email ? email : "Errore: email non trovata"}</p>
            <Button
                label="Conferma"
                onClick={handleClick}
            />
            <div>
                {isConfirmed ? "User confirmed!" : ""}
            </div>
        </div>
    );
};