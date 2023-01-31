"use strict";

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
} // уcтанавливает cookie

/**
 * 
 * @param {*} name 
 * @param {*} value 
 * @param {*} props 
 *  expires - кількість секунд, або у форматі YYYY-MM-DDTHH:MM:SS - 2023-01-30T20:00:00
 *  60*60*24*30
 */


function setCookie(name, value) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var exp = props.expires;

  if (typeof exp == "number" && exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }

  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;

  for (var propName in props) {
    updatedCookie += "; " + propName;
    var propValue = props[propName];

    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
} // удаляет cookie


function deleteCookie(name) {
  setCookie(name, null, {
    expires: -1
  });
}

deleteCookie('user_log3');
setCookie('user_log3', '123456787654321', {
  expires: 7 * 24 * 60 * 60,
  path: '/',
  domain: '127.0.0.1',
  secure: true
});