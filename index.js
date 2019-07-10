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

if(pages.length > 0) {
    if(pages[0].hasChildNodes()) {
        children = pages[0].childNodes;

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
        switch (child.nodeName) {
            case "TABLE":
                lastList = child.childNodes[1].childNodes;
                finalChild = lastList[lastList.length - 2];
                break;

            case "list":
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