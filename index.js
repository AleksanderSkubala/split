var dc = document;

var children;
var lastList;
var child;
var testChild;
var finalChild;
var isEnd = false;

var entry;
var el;

var pages = dc.getElementsByClassName('page');
console.log(pages);

if(pages.length > 0) {
    for (let i = 0; i < pages.length; i++) {
        if(pages[i].hasChildNodes() && pages[i].clientHeight > 1123) {
            children = pages[i].childNodes;

            for(var entry of children.entries()) { //deleting comments sections from NodeList
                if(entry[1].nodeName === '#comment') {
                    el = children[entry[0]];
                    el.parentNode.removeChild(el);

                    el = children[entry[0]-1];
                    el.parentNode.removeChild(el); //deleting NodeText

                    children = pages[0].childNodes;
                }
            }

            child = children[children.length - 2];
            console.log(child);
            switch (child.nodeName) {
                case "TABLE":
                    lastList = child.childNodes[1].childNodes;
                    finalChild = lastList[lastList.length - 2];
                    break;

                case "list":
                    finalChild = child;
                    break;

                default:
                    lastList = child.childNodes;
                    while (isEnd === false) {
                        testChild = lastList[lastList.length -2];
                        if(testChild.childNodes.length === 1) {
                            isEnd =  true;
                            finalChild = testChild;
                        } else {
                            lastList = testChild.childNodes;
                        }
                    }
                    break;
            }
            console.log(finalChild);
        }
    }
}