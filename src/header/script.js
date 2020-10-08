//Send e-mail
function send(e) {
    e.preventDefault();
    window.location.href="mailto:example@example.com"
    $(".alert").show()
}

//Menu Burger
function menuBurger() {
    var burger = document.getElementById("menu");
    if(burger.className === "header-nav") {
        burger.className += " responsive"
    } else {
        burger.className = "header-nav"
    }
}