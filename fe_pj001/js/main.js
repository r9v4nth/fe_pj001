function getCurrentUser(){try{return JSON.parse(localStorage.getItem("ax_user")||"null")}catch(_){return null}}
function requireLogin(){if(!localStorage.getItem("ax_token")){window.location.href="login.html";return false}return true}
function logout(){localStorage.removeItem("ax_token");localStorage.removeItem("ax_user");window.location.href="login.html"}
document.addEventListener("DOMContentLoaded",()=>{if(!document.body.dataset.protected)return;if(!requireLogin())return;const user=getCurrentUser();document.querySelectorAll("[data-user-name]").forEach(e=>e.textContent=user?.name||user?.username||"User");document.querySelectorAll("[data-user-username]").forEach(e=>e.textContent=user?.username||"");document.querySelectorAll("[data-user-initial]").forEach(e=>e.textContent=(user?.name||user?.username||"U").charAt(0).toUpperCase())});
document.querySelectorAll("[data-logout]").forEach(btn=>btn.addEventListener("click",logout));
