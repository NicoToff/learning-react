import { openUrl } from "../utility/tabControl.js";

const products = [
    { name: "TypeScript", isLanguage: true, url: "https://www.typescriptlang.org/", id: 1 },
    { name: "C++", isLanguage: true, url: "https://devdocs.io/cpp/", id: 2 },
    { name: "React", isLanguage: false, url: "https://beta.reactjs.org/", id: 3 },
];

export default function ShoppingList() {
    const listItems = products.map(skill => (
        <li
            key={skill.id}
            style={{
                color: skill.isLanguage ? "#008080" : "#61DBFB",
            }}
            onClick={() => openUrl(skill.url, "newTab")}
        >
            {skill.name}
        </li>
    ));

    return <ul>{listItems}</ul>;
}
