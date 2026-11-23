import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Home from "./Home"
import RoomCode from "./RoomCode";
import "./css/style.css"

import MainLayout from "./MainLayout";
const App = () => {
    return (
        <>
            <Router>
                <Route component={MainLayout}>
                    <Route path="/" component={Home} /> 
                </Route>

                <Route path="/room-code" component={RoomCode}/>
            </Router> 
        </>
    )    
}

export default App