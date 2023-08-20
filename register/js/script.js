const formEle = $("form").children().toArray();

formEle.forEach((element) => {
  const $inputEle = $(element).children("input");
  const $lineEle = $inputEle.closest(".text__form").find("label .line");
  const $lineEleStyle = { visibility: $lineEle.css("visibility") };

  $inputEle.on("focus", function () {
    $lineEleStyle.visibility = "visible";

    $lineEle.css({ ...$lineEleStyle });
  });

  $inputEle.on("blur", function () {
    $lineEleStyle.visibility = "hidden";

    $lineEle.css({ ...$lineEleStyle });
  });
});

$("#user__id").focus();
