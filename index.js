var dc = document;
var children;
var lastList;
var child;
var testChild;
var finalChild;
var isEnd = false;

var pages = dc.getElementsByClassName('page');

if(pages.length > 0) {
    if(pages[0].hasChildNodes()) {
        children = pages[0].childNodes;
        child = children[children.length - 2];
        if(child.nodeName === "TABLE") {
            lastList = child.childNodes[1].childNodes;
            finalChild = lastList[lastList.length - 2]
        } else {
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
        }
        console.log('testChild:', testChild, 'child:', child, 'lastList:', lastList, 'finalChild:', finalChild);
    }
}