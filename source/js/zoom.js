var images = document.getElementsByClassName('zoomable-image');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        if (this.classList.contains('zoomed')) {
            this.classList.remove('zoomed');
        } else {
            this.classList.add('zoomed');
        }
    });
}
