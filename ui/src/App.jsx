import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Home from "./Home"
import RoomCode from "./RoomCode";
import CreateGame from "./CreateGame";
import "./css/style.css"
import DisplayCode from "./DisplayCode";
import WaitingRoom from "./WaitingRoom";
import Preview from "./Preview";

import MainLayout from "./MainLayout";
const App = () => {
    return (
        <>
            <Router>
                <Route component={MainLayout}>
                    <Route path="/" component={Home} /> 
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/display-code" component={DisplayCode} />
                </Route>

                <Route path="/waiting-room" component={WaitingRoom} />
                <Route path="/room-code" component={RoomCode}/>
                <Route path="/preview" component={Preview}/>
            </Router> 
        </>
    )    
}

export default App