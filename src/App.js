import logo from "./logo.svg";
import "./App.css";
import SimpleButton from "./Button.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is my first React App.</p>
                <SimpleButton
                    text="Learn Here"
                    onClickEvent={() => openInNewTab("https://beta.reactjs.org/")}
                />
            </header>
        </div>
    );
}

const openInNewTab = url => window.open(url, "_blank", "noopener,noreferrer");

export default App;
