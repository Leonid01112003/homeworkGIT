"use strict";

var toast = {
  style: {
    wrapper: {
      position: 'fixed',
      left: '20px',
      top: '20px',
      width: '350px',
      padding: '15px',
      color: '#fff',
      borderRadius: '5px',
      zIndex: '10000'
    },
    toast: {
      padding: '15px',
      color: '#fff',
      borderRadius: '5px',
      marginBottom: '10px'
    }
  },
  show: function show(text, type) {
    if ($('#toast-wrapper').length === 0) {
      $('body').prepend('<div id="toast-wrapper"></div>');
      $('#toast-wrapper').css(this.style.wrapper);
    }

    switch (type) {
      case 'success':
        this.style.toast.backgroundColor = 'rgba(5, 184, 5, .8)';
        break;

      case 'danger':
        this.style.toast.backgroundColor = 'rgba(195, 22, 22, .8)';
        break;

      case 'warning':
        this.style.toast.backgroundColor = 'rgba(255, 184, 30, .8)';
        break;

      case 'info':
        this.style.toast.backgroundColor = 'rgba(30, 199, 255, .8)';
        break;
    }

    var toastDiv = $("\n    <div id=\"my-toast-".concat($('.my-toast').length, "\" \n    class=\"my-toast toast-").concat(type, "\"><div>").concat(text, "</div></div>"));
    toastDiv.css(this.style.toast);
    $('#toast-wrapper').prepend(toastDiv);
    $('.my-toast').on('click', function () {
      $(this).remove();
    });
    setTimeout(function () {
      toastDiv.remove();
    }, 5000);
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