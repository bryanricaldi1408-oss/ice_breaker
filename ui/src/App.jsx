import {Header} from "./Header"
import { Route, Router } from "@solidjs/router"
import Card from "./Card";
import Home from "./Home"
import "./css/style.css"
>>>>>>> fc94c62c76b7f63c0ea5d3a66b7ac1f5c3a6d31f

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