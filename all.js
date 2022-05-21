
// const workItems = document.querySelectorAll('.work');

// workItems.forEach(function (element) {
//     const titleItem = element.querySelectorAll('.title');
//     const pTag = element.querySelectorAll('.answer');
//     titleItem[0].addEventListener('click', function () {
//         if (pTag[0].style.display == 'none') {
//             pTag[0].style.display = '';
//         } else {
//             pTag[0].style.display = 'none';
//         }
//     });
//     titleItem[1].addEventListener('click', function () {
//         if (pTag[1].style.display == 'none') {
//             pTag[1].style.display = '';
//         } else {
//             pTag[1].style.display = 'none';
//         }
//     });
//     titleItem[2].addEventListener('click', function () {
//         if (pTag[2].style.display == 'none') {
//             pTag[2].style.display = '';
//         } else {
//             pTag[2].style.display = 'none';
//         }
//     });
// });

const work_li = document.querySelectorAll('.work_ul > li');
      //要先抓到work底下的li log出來會有3個li的部分
      work_li.forEach(function (e) { //再去跑回圈
        const li_Title = e.querySelector('.title'); 
        const li_P = e.querySelector('p');
        //在這邊抓出li裡面的元素也就是title跟p

        li_Title.addEventListener('click', function () {
          li_P.style.display == 'none'
            ? (li_P.style.display = '')
            : (li_P.style.display = 'none');
        });
});




