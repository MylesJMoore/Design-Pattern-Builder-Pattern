import React, { useState } from "react";
import "./ProfileBuilder.css";

function ProfileBuilder() {
    const [theme, setTheme] = useState("");
    const [font, setFont] = useState("");
    const [features, setFeatures] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost/builder-pattern/ProfileBuilder.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ theme, font, features: features.split(",") })
        });
        const data = await response.json();
        alert("Profile created: " + JSON.stringify(data.profile));
    };

    return (
        <div className="ProfileBuilder">
            <form onSubmit={handleSubmit}>
                <label>
                    Theme:
                    <input value={theme} onChange={(e) => setTheme(e.target.value)} />
                </label>
                <label>
                    Font:
                    <input value={font} onChange={(e) => setFont(e.target.value)} />
                </label>
                <label>
                    Features (comma-separated):
                    <input value={features} onChange={(e) => setFeatures(e.target.value)} />
                </label>
                <button type="submit">Build Profile</button>
            </form>
        </div>
    );
}

export default ProfileBuilder;