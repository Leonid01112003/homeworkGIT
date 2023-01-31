
  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  // уcтанавливает cookie
  /**
   * 
   * @param {*} name 
   * @param {*} value 
   * @param {*} props 
   *  expires - кількість секунд, або у форматі YYYY-MM-DDTHH:MM:SS - 2023-01-30T20:00:00
   *  60*60*24*30
   */

  function setCookie(name, value, props = {}) {
    let exp = props.expires
    if (typeof exp == "number" && exp) {
        let d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }
    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    let updatedCookie = name + "=" + value
    for(let propName in props){
        updatedCookie += "; " + propName
        const propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
    document.cookie = updatedCookie
  }

  // удаляет cookie
  function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
  }
  deleteCookie('user_log3');
  setCookie('user_log3', '123456787654321', {expires: 7*24*60*60, path: '/', domain: '127.0.0.1', secure: true})
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  