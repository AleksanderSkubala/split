var dc = document;

var children;
var lastList;
var child;
var testChild;
var finalChild;
var isEnd = false;
var rest;
var fragment = dc.createDocumentFragment();

var entry;
var el;
var newPage;

var pages = dc.getElementsByClassName('page');

if(pages.length > 0) {
    for (let i = 0; i < pages.length; i++) {
        if(pages[i].hasChildNodes() && pages[i].clientHeight > 1123) {
            rest = pages[i].clientHeight - 1123;
            children = pages[i].childNodes;

            for(var entry of children.entries()) { //deleting comments sections from NodeList
                if(entry[1].nodeName === '#comment') {
                    el = children[entry[0]];
                    el.parentNode.removeChild(el);

                    el = children[entry[0]-1];
                    el.parentNode.removeChild(el); //deleting NodeText

                    children = pages[i].childNodes;
                }
            }

            child = children[children.length - 2];
            for (let i2 = 1; i2 < children.length; i2++) {
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
                fragment.appendChild(finalChild);
                //appending el to other fragment, if rest is larger than finalChild.clientheight section with switch is repeating
                if(finalChild.nodeName !== '#text') {
                    if(rest > finalChild.clientHeight) {
                        child = children[children.length - 2];
                        rest -= finalChild.clientHeight;
                    } else break;
                }
            }
            console.log(fragment);
            if(pages[i+1]) {
                pages[i+1].appendChild(fragment);
            } else {
                newPage = dc.createElement('div');
                newPage.className = 'page';
                newPage.appendChild(fragment);
                console.log(newPage);
                pages[0].parentNode.appendChild(newPage);
                pages = dc.getElementsByClassName('page');
            }
        }
    }
}