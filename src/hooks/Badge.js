import "../css/bootswatch-darkly.css";

export default function Badge({ img }) {
    return <img className="img-fluid m-2" alt="logo" src={img} style={{ width: "100px" }} />;
}
