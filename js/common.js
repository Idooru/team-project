$("header").load("../header/header.html", function () {
  $("#search").on("click", function () {
    $("#my-form").toggleClass("invisible");
  });

  $("#list").on("click", function () {
    $(".nav__rwd").toggleClass("invisible");
  });

  if (JSON.parse(sessionStorage.getItem("logindUser"))) {
    const $myPageEle = $("#my-page");
    const $logoutEle = $("#logout");

    $myPageEle.children("i").attr({ class: "fa-solid fa-user" });
    $myPageEle.parent("a").attr({ href: "../../profile/profile.html" });

    $logoutEle.attr({ style: "display: inline-block;" });
    $logoutEle.on("click", function () {
      const result = confirm("로그 아웃 하시겠습니까?");

      if (result) {
        sessionStorage.clear();
        alert("로그아웃 되었습니다.");
        location.href = "../index.html";
      }
    });
  }

  const shopCart = false;

  if (shopCart) {
    const $shopCartEle = $("#shopcart");

    $shopCartEle.children("i").attr({ class: "fa-solid fa-cart-shopping" });
    $shopCartEle.parent("a").attr({ href: "../shopCart.html" });
  }
});

$("footer").load("../footer/footer.html");
