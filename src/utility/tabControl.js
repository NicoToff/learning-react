/**
 * Opens a new link in the browser.
 * @param {string} url The url to go to.
 * @param {string} option "sameTab" or "newTab"; defaults to "sameTab".
 */
export const openUrl = (url, option = "sameTab") => {
    let tab;
    switch (option) {
        case "newTab":
            tab = "_blank";
            break;
        default:
            tab = "_self";
            break;
    }
    window.open(url, tab, "noopener,noreferrer");
};
