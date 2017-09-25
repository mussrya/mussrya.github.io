/*
 Ryan Musselwhite's Portfolio JS
 */

document.addEventListener("keyup", function () {
    portfolioApp.removeContent();
});

// Primary Object Definition
let portfolioApp = {
    contentClick: function () {

        let elems = document.getElementsByClassName('u-hoverBlock');

        for (let i = 0, max = elems.length; i < max; i++) {
            elems[i].removeEventListener('click', function () {});
            elems[i].addEventListener('click', function () {
                const portfolioItem = this;

                const options = {
                    title: portfolioItem.getAttribute('data-title'),
                    skills: portfolioItem.getAttribute('data-skills'),
                    content: portfolioItem.getAttribute('data-content'),
                    port: portfolioItem.getAttribute('data-port'),
                    link: portfolioItem.getAttribute('data-link'),
                    gh: portfolioItem.getAttribute('data-gh'),
                    images: portfolioItem.getAttribute('data-images')
                };

                portfolioApp.outputContent(options);
            }, false);
        }
    },
    outputContent: function (options) {

        document.body.innerHTML += `<div id="loadedPortfolio" class="u-portfolioEntry inactive text-center"></div>`;

        const el = document.getElementById('loadedPortfolio');
        el.classList.remove('inactive');
        el.classList.add('active');

        el.innerHTML = `<div class="row-fluid">
                <div class="col-sm-12 col-md-3 padding0">
                <div class="menuBlock u-animate col-md-3"> 
                <h1 class="u-animate">${options.title}</h1>
                <h3 class="u-animate">${options.skills}</h3>
                <p class="u-marginTop u-animate">${options.content}</p>
                ${options.link ? `<a href="${options.link}" class="u-animate buttonCustom">VIEW</a>` : ``}
                ${options.gh ? `<a href="${options.gh}" class="u-animate buttonCustom">GITHUB</a>` : ``}
                </div>
                </div>
                <div class="col-sm-12 col-md-9">
                ${generateImages(options.port, parseInt(options.images))}
                </div>
                </div>
                <span id="close" class="u-closeButton u-animate">X</span>`;

        function generateImages(port, numberOfImages)
        {
            let htmlImages = '';
            for (let i = 0; i < numberOfImages; i++) {
                htmlImages += `<div class="u-thumbnail u-animate">
                <img class="img-responsive" src="/img/${port}/${i + 1}.jpg"></div>`;
            }
            return htmlImages;
        }

        setTimeout(function () {
            const el = document.getElementById('close');
            el.addEventListener('click', function () {
                portfolioApp.removeContent();
            });
            portfolioApp.animateContent();
        }, 300);
    },
    removeContent: function () {
        const el = document.getElementById('loadedPortfolio');
        if (el) {
            el.parentNode.removeChild(el);
            portfolioApp.contentClick();
        }
    },
    animateContent: function () {
        const elems = document.getElementsByClassName('u-animate');

        for (let i = 0, max = elems.length; i < max; i++) {
            setTimeout(function () {
                if (typeof(elems[i]) !== 'undefined'
                    && typeof(elems[i].classList) !== 'undefined'
                    && elems[i].classList.length) {
                    elems[i].classList.add('u-animated');
                }
            }, 50);
        }
    }
};

window.onload = function () {
    const el = document.getElementById('loader');
    el.parentNode.removeChild(el);
    portfolioApp.contentClick();
    portfolioApp.animateContent();
};