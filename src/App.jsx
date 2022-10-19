import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem";
import { Container } from "@mui/material";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Container maxWidth="sm">
                <TaskItem />
            </Container>
        </div>
    );
}

export default App;
