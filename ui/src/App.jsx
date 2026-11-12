import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Home from "./Home"
import "./css/style.css"
const App = () => {
    return (
        <>
            <Router root={Header}>
                <Route path="/" component={Home} />
            </Router> 
        </>
    )    
}

export default App