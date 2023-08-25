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
  const isNullInputed = $inputEle
    .toArray()
    .map((_, i) => $inputEle.eq(i).val())
    .filter((info) => info == false);

  if (isNullInputed.length) {
    alert("입력되지 않은 값이 존재합니다.");
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
  ] = formInfos;
});
