// main div
const mainDiv = document.getElementsByClassName('card-wrapper')[0];


const sliderData = [
    { imgUrl: '../../icons/img/slider_image/first_img.png', title: 'Product Landing Page' },
    { imgUrl: '../../icons/img/slider_image/second_img.png' },
    { imgUrl: '../../icons/img/slider_image/third_img.png' },
    { imgUrl: '../../icons/img/slider_image/fourth_img.png' },
    { imgUrl: '../../icons/img/slider_image/fifth_img.png' },
    { imgUrl: '../../icons/img/slider_image/sixth_img.png' },
    { imgUrl: '../../icons/img/slider_image/seventh_img.png' },

]
sliderData.map(slide => {
    // child div first
    const firstDiv = document.createElement('div');
    const secondDiv_1 = document.createElement('div');
    const secondDiv_2 = document.createElement('div');
    const imgSlid = document.createElement('img');
    const headIngThree = document.createElement('h3')


    // Set some attributes or properties for the new div
    // newDiv.id = 'myNewDiv';
    firstDiv.className = 'card swiper-slide';
    // firstDiv.textContent = 'Hello this is demo'
    secondDiv_1.className = 'card-header';
    secondDiv_2.className = 'card-body';
    // heading part content and styling
    headIngThree.className = 'tag tag-teal';
    headIngThree.textContent = slide.title;
    // imgSlid.setAttribute = ('width', '100%');
    imgSlid.src = slide.imgUrl; // Use direct property assignment
    imgSlid.alt = slide.title;

    mainDiv.appendChild(firstDiv);
    firstDiv.appendChild(secondDiv_1);
    firstDiv.appendChild(secondDiv_2);
    secondDiv_2.appendChild(headIngThree);
    secondDiv_1.appendChild(imgSlid);
})