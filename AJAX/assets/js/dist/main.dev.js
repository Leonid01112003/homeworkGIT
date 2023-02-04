"use strict";

// fetch('assets/js/data.json')
// .then((resp)=>{
//     console.log(resp);
//     return resp.json();
// })
// .then((resp)=>{
//     console.log(resp);
//     userInfo(resp)
// })
// function userInfo(user){
//     const info = document.getElementById('user-info');
//     for(let k in user){
//         info.insertAdjacentHTML('afterbegin',`<p><b>${k}:</b> ${user[k]}</p>`)
//     }
// }
// fetch('pages/about.html')
//     .then(resp=>resp.text())
//     .then(html=>document.getElementById('page-content').innerHTML = html)
Array.from(document.querySelectorAll('#main_menu a')).forEach(function (anch) {
  anch.addEventListener('click', function (e) {
    e.preventDefault();
    loadPage(anch.getAttribute('href'));
  });
}); // function loadPage(page){
//     fetch(`pages/${page}.html`, {
//         method: 'post',
//         body: {
//             title: 'My news',
//             text: ''
//         }
//     })
//         .then(resp=>{
//             if(resp.ok) {
//                 return resp.text()
//             }else {
//                return loadPage('404')
//             }
//         })
//         .then(html=>document.getElementById('page-content').innerHTML = html)
// }
// function loadPage(page){
//     // $.get(`pages/${page}.html`, function(html){
//     //     document.getElementById('page-content').innerHTML = html
//     // })
//     let loading = true;
//     $.ajax({
//         url: `pages/${page}.html`,
//         data: {
//         },
//         method: 'get',
//         dataType: 'html',
//         // success: function(html){
//         //     document.getElementById('page-content').innerHTML = html
//         // },
//         // error: function(err){
//         //     console.log(err);
//         // }
//     })
//     .done(function(html){
//         document.getElementById('page-content').innerHTML = html
//     })
//     .fail(function(err){
//         console.log(err);
//         loadPage('404')
//     })
//     .always(function(){
//         loading = false;
//     })
// }

function loadPage(page) {
  axios.get("pages/".concat(page, ".html")).then(function (resp) {
    console.log(resp);
    document.getElementById('page-content').innerHTML = resp.data;
  })["catch"](function (err) {
    console.log(err);

    if (page !== '404') {
      loadPage('404');
    }
  });
}

loadPage('main');
var NEWSAPI_KEY = '8c4e0b087e40494f8dd495898432f7db';