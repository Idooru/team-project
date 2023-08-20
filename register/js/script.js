const formEle = $("form").children().toArray();

const settingStyle = (style, ele, eleStyle) => {
  eleStyle.visibility = style;
  ele.css({ ...eleStyle });
};

formEle.forEach((element) => {
  const $inputEle = $(element).children("input");
  const $lineEle = $inputEle.closest(".text__form").find("label .line");
  const $lineEleStyle = { visibility: $lineEle.css("visibility") };

  $inputEle.focus(() => settingStyle("visible", $lineEle, $lineEleStyle));
  $inputEle.blur(() => settingStyle("hidden", $lineEle, $lineEleStyle));
});

$("#user__id").focus();
