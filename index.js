console.log('here');

const slide = document.querySelector('.slide-container');

slide.addEventListener('scroll', function () {
    const scroll = slide.scrollTop / (slide.scrollHeight - slide.offsetHeight);
    console.log({ scroll });
    document.body.style.setProperty('--scroll', scroll);
    document.body.style.setProperty('--scroll-top', slide.scrollTop);
}, false);