// document.body.insertAdjacentHTML("")

function myToast(text, type= 'success'){
    if(document.getElementById("my-toast")){
        document.getElementById("my-toast").remove();
    }
    const html = `<div id="my-toast" class="${type}">
    <div>${text}</div>
  </div> `;
  
  

}

const toast = {
    style: {
      position: 'fixed',
      right: '20px',
      top: '20px',
      width: '350px',
      padding: '15px',
      color: '#fff',
      'border-radius':' 5px',
      'z-index': '10000'
    },

    show: function (text, type){
        if(document.getElementById("my-toast")){
            document.getElementById("my-toast").remove();
        }
        let styleString = '';
        for(let prop in this.style){
            styleString += `${prop} :${this.style[prop]};`;
        }
        switch(type){
            case `success`:
                styleString += 'background-color: greenyellow;';
            break;
            case 'danger':
                styleString += 'background-color: red;';
            break;
            case 'warning':
                styleString += 'background-color: orange;';
            break;
            case 'info':
                styleString += 'background-color: blue;';
            break;
        }
    //     const html = `<div id="my-toast" class="toast-${type}" style="${styleString}">
    //     <div>${text}</div>
    //   </div> `;
    //   document.body.insertAdjacentHTML("afterbegin", html);

    const div = document.createElement('div');
    div.id = 'my-toast';
    div.classList.add(`toast - ${type}`);
    div.setAttribute('style', styleString);
    const divtext = document.createElement('div');
    divtext.innerText = text;
    div.prepend(divtext);
    
    document.body.prepend(div);



      setTimeout(function(){
        if(document.getElementById("my-toast")){
        document.getElementById("my-toast").remove();
        }
      }, 3000);
},
success: function(text=''){
    this.show(text, 'success');

},
danger: function(text=''){
    this.show(text, 'danger');
},
warning: function(text=''){
    this.show(text, 'warning')
},
info: function(text=''){
    this.show(text, 'info')
}
}