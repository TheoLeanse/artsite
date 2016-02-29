window.onload = () => {

    const imageNodes = document.querySelectorAll('.display');
    const images = Array.from(imageNodes);

    images.forEach(image => {
        image.addEventListener('click', event => {
            if(!event.target.classList.contains('hidden')) {
                images.forEach(element => {
                    element.classList.toggle('hidden');
                });
            }
        });
    });
};
