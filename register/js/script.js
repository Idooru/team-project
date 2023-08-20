const formEle = $("form").children().toArray();

formEle.forEach((element) => {
  const labelEle = $(element).children("label");
  const inputEle = $(element).children("input");

  inputEle.on("focus", function () {
    const lineEle = labelEle.children(".line");
    lineEle.css({
      visiblity: "visible",
      "border-top": "4px solid black",
      width: "110px",
      height: "0",
      "margin-top": "5px",
    });
  });

  inputEle.on("blur", function () {
    const lineEle = labelEle.children(".line");
    lineEle.css({
      visiblity: "hidden",
      "border-top": "4px solid black",
      width: "110px",
      height: "0",
      "margin-top": "5px",
    });
  });

  if (element.localName === "button") {
    return;
  }
});

$("#user__id").focus();
