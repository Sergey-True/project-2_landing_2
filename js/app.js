/*import { Fancybox } from "@fancyapps/ui";
import "fancyapps/ui/dist/fancybox.css";*/
$(function(){

$('.slider-inner, .news-slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
});

$('select').styler();

});