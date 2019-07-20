var split = function() {
    clean(document.body);

    var pages = document.querySelectorAll('.page');
    if(!pages) {
        console.error('There is no pages!');
        return;
    }

    var page;
    var rest;
    var children;
    var children2;
    var child;
    var child2;
    var finalChild;
    var container;
    var fragment = document.createDocumentFragment();
    var newPage;

    for (let index = 0; index < pages.length; index++) {
        page = pages[index];
        if(page.clientHeight > 1123) {
            rest = page.clientHeight - 1123;
            children = page.childNodes;
            for (let i = 1; i < children.length; i++) {
                child = children[children.length - i]; //elements are checking from end
                container = child.cloneNode(false);
                children2 = concat(child);
                for (let i2 = 1; i2 <= children2.length; i2++) {
                    child2 = children2[children2.length - i2];

                    rest -= child2.clientHeight;
                    container.appendChild(child2); //the order is the most important

                    if(rest <= child2.clientHeight) break;
                }
                reverse(container);
                finalChild = container;
                fragment.appendChild(finalChild);

                if(rest <= child2.clientHeight) break;
            }
            reverse(fragment);
            if(pages[index+1]) {
                pages[i+1].appendChild(fragment);
            } else {
                newPage = document.createElement('div');
                newPage.className = 'page';
                newPage.appendChild(fragment);
                pages[0].parentNode.appendChild(newPage);
            }
        }
    }
};