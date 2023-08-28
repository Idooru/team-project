$(".header").load("./header/header.html", function () {
  $("#search").on("click", function () {
    $("#my-form").toggleClass("invisible");
  });

  if (JSON.parse(sessionStorage.getItem("logindUser"))) {
    const $myPageEle = $("#my-page");

    $myPageEle.children("i").attr({ class: "fa-solid fa-user" });
    $myPageEle.parent("a").attr({ href: "../profile.html" });
  }

  const shopCart = false;

  if (shopCart) {
    const $shopCartEle = $("#shopcart");

    $shopCartEle.children("i").attr({ class: "fa-solid fa-cart-shopping" });
    $shopCartEle.parent("a").attr({ href: "../shopCart.html" });
  }
});
$(".footer").load("./footer/footer.html");
