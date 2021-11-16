window.addEventListener("DOMContentLoaded", function (){ //устанавливает начало работы скрипта сразу после загрузки DOM дерева
   'use strict'
    let tab = document.querySelectorAll('.info-header-tab'), //получаю элементы со страницы
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a) { //функция скрывает классы с инфой
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); //
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); //вызывается функция начиная с элемента с индексом 1

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){ //проверяет содержит ли класс hide
            tabContent[b].classList.remove('hide'); //если содержит то удаляет hide
            tabContent[b].classList.add('show'); //и добавляет класс show - оба класса прописаны только в css
        }
    }
    //функция showTabContent вызывается дальше по клику
    info.addEventListener("click", function (event){
       let target = event.target; //создал переменную в которую записывается на что я кликнул
       if(target && target.classList.contains('info-header-tab')){ //если то, куда я кликнул содержит класс info-header-tab
           for(let i = 0; i < tab.length; i++){ //то выполняется этот цикл
               if(target == tab[i]){ //target это на что я кликнул, tab название переменной в js для info-header-tab
                   hideTabContent(0); //выполняет функция для всех элементов; 0 - означает что для всех;
                   showTabContent(i); //показывает элемент на который кликнул
                   break; //на этом прерывает функцию
               }
           }
       }

    });







});