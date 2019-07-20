var reverse = (el) => {
    var kids = el.childNodes;
    var n;
    for (let i = 0; i < kids.length; i++) {
        n = kids[i];
        el.removeChild(n);
        el.appendChild(n);
    }
};