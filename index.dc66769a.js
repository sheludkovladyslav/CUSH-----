(()=>{const e=document.querySelector("[data-login-open]"),o=document.querySelector("[data-login-close]"),t=document.querySelector("[data-login-menu]"),c=document.querySelector("[data-login-button]"),l=document.querySelector("[data-backdrop]");e.addEventListener("click",(()=>{t.classList.remove("hidden"),document.body.classList.toggle("no-scroll"),l.classList.toggle("backdrop")})),o.addEventListener("click",(()=>{t.classList.toggle("hidden"),document.body.classList.remove("no-scroll"),l.classList.remove("backdrop")})),c.addEventListener("click",(()=>{const o=document.querySelector("[data-login-name]").value;document.querySelector("[data-login-email]").value;document.body.classList.remove("no-scroll"),t.classList.toggle("hidden"),e.innerHTML=o}))})();
//# sourceMappingURL=index.dc66769a.js.map