const a=[[{numberOfDay:1,dayName:"Понеділок",events:["Урок #1"]},{numberOfDay:2,dayName:"Понеділок"},{numberOfDay:3,dayName:"Понеділок",events:["Урок #2","Дедлайн ДЗ#1"]},{numberOfDay:4,dayName:"Понеділок"},{numberOfDay:5,dayName:"Понеділок"}],[{numberOfDay:1,dayName:"Вівторок",events:["Урок #3"]},{numberOfDay:2,dayName:"Вівторок",events:["Дедлайн ДЗ#2"]},{numberOfDay:3,dayName:"Вівторок"},{numberOfDay:4,dayName:"Вівторок",events:["Урок #4"]},{numberOfDay:5,dayName:"Вівторок"}],[{numberOfDay:1,dayName:"Середа",events:["Урок #5","Дедлайн ДЗ#3"]},{numberOfDay:2,dayName:"Середа"},{numberOfDay:3,dayName:"Середа",events:["Тестове НМТ"]},{numberOfDay:4,dayName:"Середа"},{numberOfDay:5,dayName:"Середа"}],[{numberOfDay:1,dayName:"Четвер"},{numberOfDay:2,dayName:"Четвер",events:["Урок #6","Дедлайн ДЗ#4"]},{numberOfDay:3,dayName:"Четвер"},{numberOfDay:4,dayName:"Четвер",events:["Q&A #1"]},{numberOfDay:5,dayName:"Четвер"}],[{numberOfDay:1,dayName:"П'ятниця",events:["Урок #7"]},{numberOfDay:2,dayName:"П'ятниця",events:["Дедлайн ДЗ#5"]},{numberOfDay:3,dayName:"П'ятниця"},{numberOfDay:4,dayName:"П'ятниця"},{numberOfDay:5,dayName:"П'ятниця",events:["Q&A #2"]}],[{numberOfDay:1,dayName:"Субота"},{numberOfDay:2,dayName:"Субота",events:["Дедлайн ДЗ#6"]},{numberOfDay:3,dayName:"Субота"},{numberOfDay:4,dayName:"Субота"},{numberOfDay:5,dayName:"Субота"}],[{numberOfDay:1,dayName:"Неділя",events:["Як вибрати спеціальність?"]},{numberOfDay:2,dayName:"Неділя"},{numberOfDay:3,dayName:"Неділя"},{numberOfDay:4,dayName:"Неділя"},{numberOfDay:5,dayName:"Неділя"}]],e=[[{numberOfDay:1,dayName:"Понеділок",events:["Урок #1"]},{numberOfDay:2,dayName:"Понеділок"},{numberOfDay:3,dayName:"Понеділок",events:["Урок #3","Дедлайн ДЗ#2"]},{numberOfDay:4,dayName:"Понеділок",events:["Дедлайн ДЗ#3","Урок #4"]},{numberOfDay:5,dayName:"Понеділок",events:["Урок #5"]}],[{numberOfDay:1,dayName:"Вівторок"},{numberOfDay:2,dayName:"Вівторок",events:["Урок #6","Дедлайн ДЗ#4"]},{numberOfDay:3,dayName:"Вівторок",events:["Урок #7"]},{numberOfDay:4,dayName:"Вівторок"},{numberOfDay:5,dayName:"Вівторок",events:["Екзамен #1"]}],[{numberOfDay:1,dayName:"Середа",events:["Урок #8"]},{numberOfDay:2,dayName:"Середа",events:["Урок #9"]},{numberOfDay:3,dayName:"Середа"},{numberOfDay:4,dayName:"Середа",events:["Практика #1"]},{numberOfDay:5,dayName:"Середа"}],[{numberOfDay:1,dayName:"Четвер"},{numberOfDay:2,dayName:"Четвер",events:["Практика #2","Дедлайн ДЗ#5"]},{numberOfDay:3,dayName:"Четвер",events:["Урок #10"]},{numberOfDay:4,dayName:"Четвер"},{numberOfDay:5,dayName:"Четвер"}],[{numberOfDay:1,dayName:"П'ятниця"},{numberOfDay:2,dayName:"П'ятниця",events:["Урок #11","Дедлайн ДЗ#6"]},{numberOfDay:3,dayName:"П'ятниця"},{numberOfDay:4,dayName:"П'ятниця"},{numberOfDay:5,dayName:"П'ятниця",events:["Екзамен #2"]}],[{numberOfDay:1,dayName:"Субота"},{numberOfDay:2,dayName:"Субота"},{numberOfDay:3,dayName:"Субота",events:["Екзамен #3"]},{numberOfDay:4,dayName:"Субота"},{numberOfDay:5,dayName:"Субота"}],[{numberOfDay:1,dayName:"Неділя"},{numberOfDay:2,dayName:"Неділя"},{numberOfDay:3,dayName:"Неділя"},{numberOfDay:4,dayName:"Неділя"},{numberOfDay:5,dayName:"Неділя"}]],m=[[{numberOfDay:1,dayName:"Понеділок",events:["Лекція #1"]},{numberOfDay:2,dayName:"Понеділок",events:["Лекція #2"]},{numberOfDay:3,dayName:"Понеділок",events:["Дедлайн ДЗ#1","Лекція #3"]},{numberOfDay:4,dayName:"Понеділок",events:["Експеримент"]},{numberOfDay:5,dayName:"Понеділок",events:["Лекція #4"]}],[{numberOfDay:1,dayName:"Вівторок"},{numberOfDay:2,dayName:"Вівторок",events:["Лекція #5","Дедлайн ДЗ#2"]},{numberOfDay:3,dayName:"Вівторок",events:["Практика"]},{numberOfDay:4,dayName:"Вівторок",events:["Лекція #6"]},{numberOfDay:5,dayName:"Вівторок"}],[{numberOfDay:1,dayName:"Середа",events:["Лекція #7"]},{numberOfDay:2,dayName:"Середа"},{numberOfDay:3,dayName:"Середа",events:["Дедлайн ДЗ#3"]},{numberOfDay:4,dayName:"Середа"},{numberOfDay:5,dayName:"Середа",events:["Лабораторна робота"]}],[{numberOfDay:1,dayName:"Четвер",events:["Лекція #8"]},{numberOfDay:2,dayName:"Четвер",events:["Дедлайн ДЗ#4"]},{numberOfDay:3,dayName:"Четвер"},{numberOfDay:4,dayName:"Четвер"},{numberOfDay:5,dayName:"Четвер",events:["Огляд тем"]}],[{numberOfDay:1,dayName:"П'ятниця"},{numberOfDay:2,dayName:"П'ятниця",events:["Лекція #9","Дедлайн ДЗ#5"]},{numberOfDay:3,dayName:"П'ятниця"},{numberOfDay:4,dayName:"П'ятниця"},{numberOfDay:5,dayName:"П'ятниця",events:["Кінцевий тест"]}],[{numberOfDay:1,dayName:"Субота"},{numberOfDay:2,dayName:"Субота"},{numberOfDay:3,dayName:"Субота",events:["Лабораторна робота"]},{numberOfDay:4,dayName:"Субота"},{numberOfDay:5,dayName:"Субота"}],[{numberOfDay:1,dayName:"Неділя"},{numberOfDay:2,dayName:"Неділя"},{numberOfDay:3,dayName:"Неділя"},{numberOfDay:4,dayName:"Неділя"},{numberOfDay:5,dayName:"Неділя"}]],y=document.getElementById("course-selector"),n=document.querySelector(".table__cards");function d(a){n.innerHTML=a.map((a=>`<div class="table__day">\n         ${a.map((a=>`<div class="table__card">\n                <div class = "table__text">\n                  <p class="table__numberofday">${a.numberOfDay}</p>\n                  <p class="table__nameofday ${1===a.numberOfDay?"table__nameofday--first":""}">\n                    ${a.dayName}\n                  </p>\n                  </div>\n                  <div class="table__events">\n                  ${a.events&&a.events.length>0?a.events.map((a=>`<p class="table__nameofevent">${a}</p>`)).join(""):""}\n                </div>\n                </div>\n            `)).join("")}\n       </div>`)).join("")}d([[{numberOfDay:1,dayName:"Понеділок"},{numberOfDay:2,dayName:"Понеділок"},{numberOfDay:3,dayName:"Понеділок"},{numberOfDay:4,dayName:"Понеділок"},{numberOfDay:5,dayName:"Понеділок"}],[{numberOfDay:1,dayName:"Вівторок"},{numberOfDay:2,dayName:"Вівторок"},{numberOfDay:3,dayName:"Вівторок"},{numberOfDay:4,dayName:"Вівторок"},{numberOfDay:5,dayName:"Вівторок"}],[{numberOfDay:1,dayName:"Середа"},{numberOfDay:2,dayName:"Середа"},{numberOfDay:3,dayName:"Середа"},{numberOfDay:4,dayName:"Середа"},{numberOfDay:5,dayName:"Середа"}],[{numberOfDay:1,dayName:"Четвер"},{numberOfDay:2,dayName:"Четвер"},{numberOfDay:3,dayName:"Четвер"},{numberOfDay:4,dayName:"Четвер"},{numberOfDay:5,dayName:"Четвер"}],[{numberOfDay:1,dayName:"П'ятниця"},{numberOfDay:2,dayName:"П'ятниця"},{numberOfDay:3,dayName:"П'ятниця"},{numberOfDay:4,dayName:"П'ятниця"},{numberOfDay:5,dayName:"П'ятниця"}],[{numberOfDay:1,dayName:"Субота"},{numberOfDay:2,dayName:"Субота"},{numberOfDay:3,dayName:"Субота"},{numberOfDay:4,dayName:"Субота"},{numberOfDay:5,dayName:"Субота"}],[{numberOfDay:1,dayName:"Неділя"},{numberOfDay:2,dayName:"Неділя"},{numberOfDay:3,dayName:"Неділя"},{numberOfDay:4,dayName:"Неділя"},{numberOfDay:5,dayName:"Неділя"}]]),y.addEventListener("change",(function(){switch(this.value){case"math":d(a);break;case"english":d(e);break;case"chemistry":d(m);break;default:d(julyDefault)}}));const r=document.querySelector(".to-top__button");let u=0;const b=document.querySelector(".calendar"),f=document.querySelector(".form__close--calendar"),D=()=>{const a=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;a>1500&&a>u?window.scrollTo(0,1500):u=a};f.addEventListener("click",(()=>{b.style.display="none",window.removeEventListener("scroll",D)})),r.addEventListener("click",(()=>{b.style.display="block",window.addEventListener("scroll",D,{passive:!0})}));
//# sourceMappingURL=index.7e1c6927.js.map