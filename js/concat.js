var concat = function (node) {
    var children = node.childNodes;
    var child;
    var final = [];
    for (let i = 0; i < children.length; i++) {
        child = children[i];
        if(child.childNodes.length > 1) {
            final = final.concat(concat(child));
        } else {
            final.push(child);
        }
    }
    return final;
};