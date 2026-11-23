import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Home from "./Home"
import RoomCode from "./RoomCode";
import CreateGame from "./CreateGame";
import "./css/style.css"

import MainLayout from "./MainLayout";
import DisplayCode from "./DisplayCode";
const App = () => {
    return (
        <>
            <Router>
                <Route component={MainLayout}>
                    <Route path="/" component={Home} /> 
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/display-code" component={DisplayCode} />
                </Route>

                <Route path="/room-code" component={RoomCode}/>
            </Router> 
        </>
    )    
}

export default App