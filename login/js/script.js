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
    const userAccount = JSON.parse(
      localStorage.getItem("userAccount")
        ? localStorage.getItem("userAccount")
        : "[]"
    );
    const idFound = userAccount.find((user) => user.id === id);
    const pwFound = userAccount.find((user) => user.password === password);

    if (idFound && pwFound) {
      if (idFound.nickName === pwFound.nickName) {
        const logindUser = JSON.parse(
          sessionStorage.getItem("logindUser")
            ? sessionStorage.getItem("loginedUser")
            : "[]"
        );

        logindUser.push(idFound);

        sessionStorage.setItem("logindUser", JSON.stringify(logindUser));

        location.href = "../../index.html";
        alert("로그인에 성공하였습니다!");
      }
    }
  }
  alert("아이디와 비밀번호가 일치하지 않습니다.");
});
