import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Card from "./Card";
import Home from "./Home"
<<<<<<< HEAD
import "./css/style.css"
=======
import RoomCode from "./RoomCode";
import "./css/style.css"
import DisplayCode from "./DisplayCode"
>>>>>>> 2306a31cac9ccb772699feb15d1e9efc0f77e400

const App = () => {
    return (
        <>
            <Router root={Header}>
                <Route path="/" component={Home} />
                <Route path="/room-code" component={RoomCode} />
                <Route path="/display-code" component={DisplayCode} />
            </Router> 
        </>
    )    
}

export default App