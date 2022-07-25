import logo from "./img/logo.svg";
import "./css/App.css";
import SimpleButton from "./hooks/Button.js";
import { openUrl } from "./utility/tabControl.js";
import Skills from "./hooks/List.js";
import UpdateButton from "./hooks/UpdateButton.js";

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
                <p>These are some of my skills:</p>
                <Skills />
                <p>I'm a master at React, behold!</p>
                <UpdateButton />
                <UpdateButton />
                <UpdateButton />
            </header>
        </div>
    );
}
