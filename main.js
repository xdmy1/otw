var stickyElement = document.querySelector('.nav');
var parent = stickyElement.parentElement;
while (parent) {
    var hasOverflow = getComputedStyle(parent).overflow;
    if(hasOverflow != 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
} 