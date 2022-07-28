let brends = [
    './img/blocks/repair/lenovo.svg',
    './img/blocks/repair/samsung.svg',
    './img/blocks/repair/apple.svg',
    './img/blocks/repair/viewsonic.svg',
    './img/blocks/repair/bosch.svg',
    './img/blocks/repair/hp.svg',
    './img/blocks/repair/acer.svg',
    './img/blocks/repair/sony.svg',
    './img/blocks/repair/lenovo.svg',
    './img/blocks/repair/samsung.svg',
    './img/blocks/repair/apple.svg'
];

let template = document.querySelector('#brend-template').content;
let listBrends = document.querySelector('.repair__pool');

let creatBtn = function (srcImg, id) {
    let itemList = template.querySelector('.repair__item').cloneNode(true);
    let iconBrend = itemList.querySelector('.repair__icon');

    iconBrend.style.backgroundImage = `url("${srcImg}")`;

    return itemList;
}

for (var i = 0; i < brends.length; i++) {
    listBrends.append(creatBtn(brends[i], i));
}