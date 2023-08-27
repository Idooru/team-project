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
  const $inputEle = $(".customer__content form input");
  const formInfos = $inputEle
    .toArray()
    .map((item) => ({ itemTag: item, itemValue: item.value }));

  const nullValue = formInfos.filter((info) => info.itemValue == false);

  if (nullValue.length) {
    alert("입력되지 않은 필드가 있습니다!");
    nullValue
      .map((value) => "#" + value.itemTag.id)
      .forEach((item) => {
        const $inputTag = $(item);
        const $spanEle = $(item).parent().children("span");

        $spanEle.text("값이 입력되지 않았습니다!").css({ display: "block" });
        $inputTag.on("input", function () {
          $spanEle.css({ display: "none" });
        });
      });
    return;
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

  localStorage.setItem(
    "userAccount",
    JSON.stringify({
      id: "shere1765",
      password: "1234",
      gender: "남",
      firstName: "승훈",
      lastName: "이",
      tell: "01026255147",
      nickName: "Idooru",
      email: "shere1765@gmail.com",
    })
  );

  const userAccount = JSON.parse(
    localStorage.getItem("userAccount")
      ? localStorage.getItem("userAccount")
      : []
  );

  debugger;

  localStorage.setItem(
    "userAccount",
    JSON.stringify({
      id,
      password,
      gender,
      firstName,
      lastName,
      tell,
      nickName,
      email,
    })
  );
});
