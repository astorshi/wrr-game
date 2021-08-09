import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <div className="mainHedDiv">
            <Link to="/">Home</Link>
            <Link to="/list">Все воины</Link>
            <Link to="/create">Создать воина</Link>
        </div>
    )
}