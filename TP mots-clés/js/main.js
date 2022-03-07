$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $("textarea").text(`
      ${$("#nom").val()} ${$("#marque").val()}
      ${$("#marque").val()} ${$("#modele").val()}
      ${$("#marque").val()} ${$("#reference").val()}
      ${$("#nom").val()} ${$("#marque").val()} ${$("#specification").val()}`);
  });

  $("#reinit").click(function () {
    $("#nom").val("");
    $("#marque").val("");
    $("#modele").val("");
    $("#reference").val("");
    $("#specification").val("");
    $("textarea").text("");
  });

  $("#copier").click(function () {
    navigator.clipboard.writeText($("textarea").text());
  });
});
