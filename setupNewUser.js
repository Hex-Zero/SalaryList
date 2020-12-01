function setupNewUser() {
  saveJobs([]);
  $("#myModal").modal("show");
  $("#start-button").click(function () {
    saveNewUser(true);
    saveTotal($("#initial-total").val());
    updatePage();
    $("#myModal").modal("hide");
  });
}

function resetUser() {
  saveNewUser("");
  saveTotal(0);
  location.reload();
}
