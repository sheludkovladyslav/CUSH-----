document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("searchInput"),t=document.querySelectorAll(".courses__card");e.addEventListener("input",(()=>{const o=e.value.toLowerCase();t.forEach((e=>{e.querySelector(".cours__title").textContent.toLowerCase().includes(o)?e.style.display="block":e.style.display="none"}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".courses__card"),t=document.getElementById("findCourseForm"),o=document.getElementById("course-selection"),n=document.querySelector(".courses"),s=t=>{""===t.trim()?e.forEach((e=>{e.style.display="block"})):e.forEach((e=>{e.querySelector(".cours__title").textContent.toLowerCase().includes(t)?e.style.display="block":e.style.display="none"}))};t.addEventListener("submit",(e=>{e.preventDefault();const t=o.options[o.selectedIndex].text.toLowerCase();console.log("Selected Course:",t),s(t),n.scrollIntoView({behavior:"smooth"})}));document.querySelectorAll(".hero__button").forEach((e=>{"Знайти курс"===e.textContent.trim()&&e.addEventListener("click",(()=>{const e=o.options[o.selectedIndex].text.toLowerCase();console.log("Selected Course:",e),s(e),n.scrollIntoView({behavior:"smooth"})}))}))}));
//# sourceMappingURL=index.24efa7e1.js.map