import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p><Link to="/game">Play</Link></p>
            <p><Link to="/rules">Edit rules</Link></p>
        </div>
    )
}