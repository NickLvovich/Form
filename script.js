/**
 * FormJs
 * Copyright 2019 WEB-group
 * version 1.0
 * author Шилов М.Л.
 */
;
(function () {
  function lossOfFocus() {
    // отлавливаем все элементы с штмл и задаем им оброботчик событий
    let name = document.querySelector('.col-form-name .name').addEventListener('blur', getValueName);
    let email = document.querySelector('.col-form-email .email').addEventListener('blur', getValueEmail);
    let phone = document.querySelector('.col-form-phone .phone').addEventListener('blur', getValuePhone);
    console.log(name);
    // в функции описываем обработку имени
    function getValueName() {
      console.log(this.value);
      let check = /^\w{6,30}$/;
      if ( this.value.search(check) == -1) {
        document.querySelector('.col-form-name .error').style.display = 'block';
      } else {
        document.querySelector('.col-form-name .error').style.display = 'none';
      }
    }
    // в функции описываем обработку имейла
    function getValueEmail() {
      console.log(this.value);
      let check = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
      if ( this.value.search(check) == -1) {
        document.querySelector('.col-form-name .error').style.display = 'block';
      } else {
        document.querySelector('.col-form-name .error').style.display = 'none';
      }
    }
    // в функции описываем обработку номера телефона
    function getValuePhone() {
      let check = /^\d{10}$/;
      console.log(this.value);
      if ( this.value.search(check) == -1) {
        document.querySelector('.col-form-phone .error').style.display = 'block';
      } else {
        document.querySelector('.col-form-phone .error').style.display = 'none';
      }
    }
  }
  lossOfFocus()
})();