!function(){var n=20;window.addEventListener("load",function(){var e=document.getElementById("nav").offsetHeight+n,o=document.body;o.classList.contains("no-fixed")||window.addEventListener("scroll",function(){window.scrollY>e?o.classList.add("header-fixed"):o.classList.remove("header-fixed")}),sessionStorage.getItem("cookie-consent-accept")||$("#cookie-consent").collapse("show"),$("#accept").on("click",function(){sessionStorage.setItem("cookie-consent-accept",!0),$("#cookie-consent").collapse("hide")})})}();