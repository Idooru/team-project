const formEle = $("form").children().toArray();

formEle.forEach((element) => {
  // const labelEle = $(element).children("label");
  const $inputEle = $(element).children("input");

  $inputEle.on("focus", function () {
    const $lineEle = $inputEle.closest(".text__form").find("label .line");

    let visibility = $lineEle.css("visibility");

    visibility = "visible";

    $lineEle.css({ visibility });
  });

  $inputEle.on("blur", function () {
    const $lineEle = $inputEle.closest(".text__form").find("label .line");

    let visibility = $lineEle.css("visibility");

    visibility = "hidden";

    $lineEle.css({ visibility });
  });

  if (element.localName === "button") {
    return;
  }
});

$("#user__id").focus();
