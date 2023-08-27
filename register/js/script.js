const formEle = $("form").children().toArray();

const styler = {
  settingBorderBottom(style, ele, eleStyle) {
    eleStyle.borderBottom = style;
    ele.css({ ...eleStyle });
  },

  settingLabel(style, ele, eleStyle) {
    eleStyle.color = style;
    ele.css({ ...eleStyle });
  },
};

formEle.forEach((element) => {
  const $inputEle = $(element).children("input");
  const $inputEleStyle = { borderBottom: $inputEle.css("borderBottom") };

  const $lableEle = $(element).children("label");
  const $lableEleStyle = { color: $lableEle.css("color") };

  $inputEle.focus(() => {
    styler.settingBorderBottom(
      "1px solid rgb(0, 0, 0)",
      $inputEle,
      $inputEleStyle
    );

    styler.settingLabel("rgb(0, 0, 0)", $lableEle, $lableEleStyle);
  });

  $inputEle.blur(() => {
    styler.settingBorderBottom(
      "1px solid rgb(214, 214, 214)",
      $inputEle,
      $inputEleStyle
    );

    styler.settingLabel("rgb(95, 95, 95)", $lableEle, $lableEleStyle);
  });
});

$("#user__id").focus();

$("#submit__button").on("click", function () {
  let flag = true;
  const $inputEle = $(".customer__content form input");
  const formInfos = $inputEle
    .toArray()
    .map((item) => ({ itemTag: item, itemValue: item.value }));

  const nullValue = formInfos.filter((info) => info.itemValue == false);

  if (nullValue.length) {
    nullValue
      .map((value) => "#" + value.itemTag.id)
      .forEach((item) => {
        const $inputTag = $(item);
        const $spanEle = $(item).parent().children("span");

        $spanEle.text("값 미입력").css({ display: "block" });
        $inputTag.on("input", function () {
          $spanEle.css({ display: "none" });
        });
      });
  }

  const [
    id,
    password,
    passwordRe,
    gender,
    firstName,
    lastName,
    tell,
    nickName,
    email,
  ] = formInfos.map(({ itemValue }) => itemValue);

  const userAccount = JSON.parse(
    localStorage.getItem("userAccount")
      ? localStorage.getItem("userAccount")
      : "[]"
  );

  if (userAccount.find((user) => user.id === id)) {
    const $idSpanEle = $("#user__id").parent().children("span");
    $idSpanEle.text("중복된 아이디").css({ display: "block" });
    flag = false;
  }

  if (password !== passwordRe) {
    const $passwordConfirmSpanEle = $("#user__password__confirm")
      .parent()
      .children("span");
    $passwordConfirmSpanEle.text("비밀번호 불일치").css({ display: "block" });
    flag = false;
  }

  if (gender !== "남" && gender !== "여") {
    const $genderSpanEle = $("#user__gender").parent().children("span");
    $genderSpanEle.text("입력 불일치").css({ display: "block" });
    flag = false;
  }

  if (tell.includes("-")) {
    const $tellSpanEle = $("#user__tell").parent().children("span");
    $tellSpanEle.text("숫자로만 입력").css({ display: "block" });
    flag = false;
  }

  if (userAccount.find((user) => user.nickName === nickName)) {
    const $nickNameSpan = $("#user__nickname").parent().children("span");
    $nickNameSpan.text("중복된 닉네임").css({ display: "block" });
    flag = false;
  }

  if (!email.includes("@")) {
    const $emailSpan = $("#user__email").parent().children("span");
    $emailSpan.text("이메일 형식 불일치").css({ display: "block" });
    flag = false;
  }

  if (!flag) return;

  const tellHyphen = tell.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

  userAccount.push({
    id,
    password,
    gender,
    firstName,
    lastName,
    tellHyphen,
    nickName,
    email,
  });

  localStorage.setItem("userAccount", JSON.stringify(userAccount));

  location.href = "./index.html";

  alert("회원가입을 완료하였습니다!");
});
