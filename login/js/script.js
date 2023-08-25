const registerBtnEle = $("#register__btn");
const loginBtnEle = $("#login__btn");
const registerMessageEle = $(".register__message");
const loginMessageEle = $(".login__message");

$("#login__btn").on("click", function () {
  const loginBtnEle = $(this);

  const loginBtnEleClass = loginBtnEle.attr("class");

  if (!loginBtnEleClass) {
    registerBtnEle.removeClass("black__line");
    loginBtnEle.addClass("black__line");
    loginMessageEle.removeClass("invisible");
    registerMessageEle.addClass("invisible");
  }
});

$("#register__btn").on("click", function () {
  const registerBtnEle = $(this);

  const registerBtnEleClass = registerBtnEle.attr("class");

  if (!registerBtnEleClass) {
    loginBtnEle.removeClass("black__line");
    registerBtnEle.addClass("black__line");
    registerMessageEle.removeClass("invisible");
    loginMessageEle.addClass("invisible");
  }
});

$("#submit__login").on("click", function () {
  const id = $("#input__email").val();
  const password = $("#input__password").val();

  if (id && password) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("password", password);

    location.href = "../../index.html";
  } else {
    alert("아이디와 비밀번호를 입력해주세요.");
  }
});
