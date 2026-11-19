import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Card from "./Card";
import Home from "./Home"
import RoomCode from "./RoomCode";
import "./css/style.css"
import DisplayCode from "./DisplayCode"
import WaitingRoom from "./WaitingRoom";

const App = () => {
    return (
        <>
            <Router root={Header}>
                <Route path="/" component={Home} />
                <Route path="/room-code" component={RoomCode} />
                <Route path="/display-code" component={DisplayCode} />
                <Route path="/waiting-room" component={WaitingRoom} />
            </Router> 
        </>
    )    
}

export default App