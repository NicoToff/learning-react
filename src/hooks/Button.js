import "../css/bootswatch-darkly.css";

export default function SimpleButton({ text, onClickEvent }) {
    return (
        <button className="btn btn-lg btn-primary" onClick={onClickEvent}>
            {text}
        </button>
    );
}

// info from: https://bobbyhadz.com/blog/react-open-link-in-new-tab
