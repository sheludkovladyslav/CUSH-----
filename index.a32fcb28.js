!function(){var e,o,t,c,n;e=document.querySelector("[data-login-open]"),o=document.querySelector("[data-login-close]"),t=document.querySelector("[data-login-menu]"),c=document.querySelector("[data-login-button]"),n=document.querySelector("[data-backdrop]"),e.addEventListener("click",(function(){t.classList.remove("hidden"),document.body.classList.toggle("no-scroll"),n.classList.toggle("backdrop")})),o.addEventListener("click",(function(){t.classList.toggle("hidden"),document.body.classList.remove("no-scroll"),n.classList.remove("backdrop")})),c.addEventListener("click",(function(){var o=document.querySelector("[data-login-name]").value;document.querySelector("[data-login-email]").value,document.body.classList.remove("no-scroll"),t.classList.toggle("hidden"),e.innerHTML=o}))}();
//# sourceMappingURL=index.a32fcb28.js.map