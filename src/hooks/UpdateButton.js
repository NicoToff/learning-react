import { useState } from "react";
import "../css/bootswatch-darkly.css";

export default function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className="btn btn-sm btn-primary m-1" onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
