import './App.css';
import NewUnit from "./Components/NewUnit/NewUnit";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/list">
                    <List/>
                </Route>
                <Route exact path="/create">
                    <NewUnit/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
