import logo from "./img/logo.svg";
import "./css/App.css";
import SimpleButton from "./hooks/Button.js";
import { openUrl } from "./utility/tabControl.js";
import Badge from "./hooks/Badge";
import ts from "./img/skills/ts.svg";
import * as skills from "./img/skills/skills.js";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is my first React App.</p>
                <SimpleButton
                    text="Learn Here"
                    onClickEvent={() => openUrl("https://beta.reactjs.org/", "newTab")}
                />
                <div>
                    <h1>Choose your skills</h1>
                    <Badge img={ts} /> <skills.Git />
                </div>
            </header>
        </div>
    );
}
