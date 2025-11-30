import { useEffect, useState } from "react";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showMenu]);

    return (
        <div className="nav-bar">
            <nav className="navigation">
                <ul className="desk-nav">
                    <h1 className="logo">Kick</h1>
                    <li>live</li>
                    <li>replays</li>
                    <li>league</li>
                    <li>scores</li>
                    <li>fixtures</li>
                    <li>transfers</li>
                    <li>teams</li>
                    <li>tables</li>
                </ul>
                <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                    <li>live</li>
                    <li>replays</li>
                    <li>league</li>
                    <li>scores</li>
                    <li>fixtures</li>
                    <li>transfers</li>
                    <li>teams</li>
                    <li>tables</li>
                </ul>
                <ul className="nav-extras">
                    <li><span>powered by</span>&nbsp; espn fc</li>
                    <li className="icn"><ion-icon name="search-outline"></ion-icon></li>
                    <li className="icn"><ion-icon name="person-circle-outline"></ion-icon></li>
                    <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                        <span className="first"></span>
                        <span className="second"></span>
                    </div>
                </ul>
            </nav>
        </div>
    )
}