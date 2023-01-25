"use strict";

// document.body.insertAdjacentHTML("")
function myToast(text) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  if (document.getElementById("my-toast")) {
    document.getElementById("my-toast").remove();
  }

  var html = "<div id=\"my-toast\" class=\"".concat(type, "\">\n    <div>").concat(text, "</div>\n  </div> ");
}

var toast = {
  style: {
    position: 'fixed',
    right: '20px',
    top: '20px',
    width: '350px',
    padding: '15px',
    color: '#fff',
    'border-radius': ' 5px',
    'z-index': '10000'
  },
  show: function show(text, type) {
    if (document.getElementById("my-toast")) {
      document.getElementById("my-toast").remove();
    }

    var styleString = '';

    for (var prop in this.style) {
      styleString += "".concat(prop, " :").concat(this.style[prop], ";");
    }

    switch (type) {
      case "success":
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
    } //     const html = `<div id="my-toast" class="toast-${type}" style="${styleString}">
    //     <div>${text}</div>
    //   </div> `;
    //   document.body.insertAdjacentHTML("afterbegin", html);


    var div = document.createElement('div');
    div.id = 'my-toast';
    div.classList.add("toast - ".concat(type));
    div.setAttribute('style', styleString);
    var divtext = document.createElement('div');
    divtext.innerText = text;
    div.prepend(divtext);
    document.body.prepend(div);
    setTimeout(function () {
      if (document.getElementById("my-toast")) {
        document.getElementById("my-toast").remove();
      }
    }, 3000);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'success');
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'danger');
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'warning');
  },
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'info');
  }
};