(function (window) {
    let images = Array.prototype.slice.call(document.querySelectorAll('img[data-original]'));

    function elementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const height = window.innerHeight || document.documentElement.clientHeight;
        return rect.top >= 0 && rect.left >= 0 && (rect.top - 240) < height;
    }

    function loadImage(el, fn) {
        const img = new Image()
            , src = el.getAttribute('data-original');
        img.onload = function () {
            el.src = src;
            fn ? fn() : null;
        };
        img.src = src;
    }

    function processImages() {
        for (let i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
                (function (index) {
                    const loadingImage = images[index];
                    loadImage(loadingImage, function () {
                        images = images.filter(function (t) {
                            return loadingImage !== t;
                        });
                    });
                })(i);
            }
        }
    }

    function throttle(method, context) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function () {
            method.call(context);
        }, 500);
    }

    processImages();

    window.addEventListener('scroll', function () {
        throttle(processImages, window);
    });

})(this);
