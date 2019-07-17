var dc = document;

var children;
var lastList;
var child;
var testChild;
var isOne;
var container = null;
var lastContainer = dc.createElement('div');
var finalChild;
var isEnd = false;
var rest;
var fragment = dc.createDocumentFragment();

var entry;
var el;
var newPage;
var i3;

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
            for (let i2 = 0; i2 < children.length; i2++) {
                switch (child.nodeName) {
                    case "TABLE":
                        lastList = child.childNodes[1].childNodes;
                        isOne = lastList.length === 0 ? true : false
                        finalChild = lastList[lastList.length - 2];
                        container = finalChild.parentNode.parentNode.cloneNode(false);
                        break;

                    case "UL":
                    case "LI":
                        console.log(child.childNodes);
                        finalChild = child.childNodes[child.childNodes.length - 2];
                        isOne = child.parentNode.childNodes.length === 0 ? true : false
                        container = finalChild.cloneNode(false);
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
                                isOne = lastList.length === 0 ? true : false
                            }
                        }
                        container = finalChild.parentNode.cloneNode(false);
                        break;
                    }
                console.log(finalChild);
                if(lastContainer.cloneNode(false).isEqualNode(container) && finalChild.nodeName !== '#text') {
                    lastContainer.appendChild(finalChild);
                    fragment.appendChild(lastContainer);
                } else if(finalChild.nodeName !== '#text') {
                    container.appendChild(finalChild);
                    fragment.appendChild(container);
                    lastContainer = container;
                }
                //appending el to other fragment, if rest is larger than finalChild.clientheight section with switch is repeating
                if(finalChild.nodeName !== '#text') {
                    if(rest > finalChild.clientHeight) {
                        child = children[children.length - (i2*2 + 2)];//first it's going back to -2, next -4 ...
                        rest -= finalChild.clientHeight;
                    } else break;
                }
            }
            if(pages[i+1]) {
                pages[i+1].appendChild(fragment);
            } else {
                newPage = dc.createElement('div');
                newPage.className = 'page';
                newPage.appendChild(fragment);
                console.log(newPage);
                pages[0].parentNode.appendChild(newPage);
                children = pages[i].childNodes;
            }
        }
    }
}