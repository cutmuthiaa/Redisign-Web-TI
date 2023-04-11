const multipleItemCarousel = document.querySelector('#carouselBerita')


if(window.matchMedia("(min-width:576px").matches){

    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false

    })


    var carouselWidth = $('.berita')[0].scrollWidth;
    var cardWidth = $('.isi-berita').width();

    var scrollPosition = 0; 

    $('.tombol-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWidth*4))){
            console.log('next'); 
            scrollPosition = scrollPosition + cardWidth;
            $('.berita').animate({scrollLeft: scrollPosition},600)
    }
    }); 

    $('.tombol-prev').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev'); 
            scrollPosition = scrollPosition - cardWidth;
            $('.berita').animate({scrollLeft: scrollPosition},600)
        }
    }); 
    
}else{

    $(multipleItemCarousel).addClass('slide');
    
}




