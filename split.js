clean(document.body);
var pages = document.querySelectorAll('.page');

var page;
var rest;
var children;
var children2;
var child;
var child2;
var finalChild;
var container;
var fragment = document.createDocumentFragment();

for (let index = 0; index < pages.length; index++) {
    page = pages[index];
    if(page.clientHeight > 1123) {
        rest = page.clientHeight - 1123;
        children = page.childNodes;
        for (let i = 1; i < children.length; i++) {
            child = children[children.length - i]; //elements are checking from end
            container = child.cloneNode(false);
            children2 = child.childNodes;
            console.log(children2[0]);
            for (let i2 = 1; i2 < children2.length; i2++) {
                child2 = children2[children2.length - i2];
                if(rest <= child2.clientHeight) {
                    container.appendChild(child2);
                    rest -= child2.clientHeight;
                    finalChild = container;
                    break;
                } else {
                    container.appendChild(child2);
                    rest -= child2.clientHeight;
                    console.log(rest,child2, container);
                }
            }
            console.log(finalChild);
            fragment.appendChild(finalChild);
        }
    }
}