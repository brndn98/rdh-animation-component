function sequenceAnimationInitialize() {
    var sequenceAnimationParent = document.querySelectorAll(".rdh-sequence-animation");
    sequenceAnimationParent.forEach(parent => {
        var sequenceDelay = parent.dataset.sequenceDelay || "1";
        var sequenceChildren = parent.children;
        var childrenIndex = 0; // Children index, in case there are other elements in between
        for(var i=0; i<sequenceChildren.length; i++) {
            if(sequenceChildren[i].classList.contains("rdh-sequence-child")) {
                var childDelay = childrenIndex * sequenceDelay;
                sequenceChildren[i].style.animationDelay = childDelay + "s"; // Adds delay for the sequence
                childrenIndex++;
            }
        }
    });
}

function scrollAnimationInitialize() {
    var scrollAnimationParent = document.querySelectorAll(".rdh-scroll-animation");
    window.addEventListener("scroll", function() {
        scrollAnimationParent.forEach(parent => {
            var windowScroll = window.scrollY + window.innerHeight;
            if(windowScroll > parent.offsetTop && !parent.classList.contains("rdh-animated")) {
                var scrollChildren = parent.children;
                for(var i=0; i<scrollChildren.length; i++) {
                    if(scrollChildren[i].classList.contains("rdh-animate")) {
                        var animationClass = scrollChildren[i].dataset.animationClass;
                        scrollChildren[i].classList.add(animationClass); // Adds animation class to element
                    }
                }
                parent.classList.add("rdh-animated");
            }
        });
    })
}

function basicAnimationInitialize() {
    var basicAnimationElement = document.querySelectorAll(".rdh-animation");
    basicAnimationElement.forEach(element => {
        var animationClass = element.dataset.animationClass;
        element.classList.add(animationClass);
    });
}

/* function applyElementAnimation() {
    var elementsToAnimate = document.querySelectorAll(".rdh-animate");
    elementsToAnimate.forEach(element => {
        var animationClass = element.dataset.animationClass;
        element.classList.add(animationClass);
    });
} */