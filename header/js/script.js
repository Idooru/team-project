$("#search").on("click", function () {
  $("#my-form").toggleClass("invisible");
});

if (JSON.parse(sessionStorage.getItem("logindUser"))) {
  const $myPageEle = $("#my-page");

  $myPageEle.children("i").attr({ class: "fa-solid fa-user" });
  $myPageEle.parent("a").attr({ href: "../profile.html" });
}
