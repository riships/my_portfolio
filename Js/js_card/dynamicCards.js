// main div
const mainDiv = document.getElementsByClassName('card-wrapper')[0];

fetch('Js/js_card/cardsData.json') // Replace 'data.json' with the path to your JSON file
    .then(response => response.json())
    .then(data => {
        const sliderData = data.sliderData;
        sliderData.forEach(slide => {
            // child div first
            const firstDiv = document.createElement('div');
            const secondDiv_1 = document.createElement('div');
            const secondDiv_2 = document.createElement('div');
            const imgSlid = document.createElement('img');
            const headIngThree = document.createElement('h3')
            const descPara = document.createElement('p');
            const linksDiv = document.createElement('div');


            // Set some attributes or properties for the new div
            // newDiv.id = 'myNewDiv';
            firstDiv.className = 'card swiper-slide';
            // firstDiv.textContent = 'Hello this is demo'
            secondDiv_1.className = 'card-header';
            secondDiv_2.className = 'card-body';
            // heading part content and styling
            headIngThree.className = 'tag tag-teal';
            headIngThree.textContent = slide.title;
            descPara.textContent = slide.desc;
            // imgSlid.setAttribute = ('width', '100%');
            imgSlid.src = slide.imgUrl; // Use direct property assignment
            imgSlid.alt = slide.title;

            // linksAdd.href = slide.repolink[1];
            const linksAdd = document.createElement('a');
            const linksAdd2 = document.createElement('a');

            linksAdd.href = slide.link;
            linksAdd2.href = slide.preView;
            linksDiv.appendChild(linksAdd);
            linksDiv.appendChild(linksAdd2);

            linksAdd.innerText = 'Repo';
            linksAdd2.innerText = 'Preview';




            // insert a div to add links inside that
            linksDiv.className = 'project-links';



            mainDiv.appendChild(firstDiv);
            firstDiv.appendChild(secondDiv_1);
            firstDiv.appendChild(secondDiv_2);
            secondDiv_2.appendChild(headIngThree);
            secondDiv_2.appendChild(descPara);
            secondDiv_2.appendChild(linksDiv);
            secondDiv_1.appendChild(imgSlid);
        })
    }).catch(error => console.error('Error fetching data:', error));

