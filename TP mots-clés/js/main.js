$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $("textarea").text(`
      Vos Mot-clés:

      ${$("#nom").val()} ${$("#marque").val()}
      ${$("#marque").val()} ${$("#modele").val()}
      ${$("#marque").val()} ${$("#reference").val()}
      ${$("#nom").val()} ${$("#marque").val()} ${$("#specification").val()}`);
  });
});
