import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Card from "./Card";
import Home from "./Home"
import RoomCode from "./RoomCode";
import "./css/style.css"

const App = () => {
    return (
        <>
            <Router root={Header}>
                <Route path="/" component={Home} />
                <Route path="/room-code" component={RoomCode} />
            </Router> 
        </>
    )    
}

export default App