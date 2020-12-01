function saveJobs(jobs) {
  localStorage.setItem("jobsList", JSON.stringify(jobs));
}

function loadJobs() {
  return JSON.parse(localStorage.getItem("jobsList"));
}

function saveTotal(total) {
  localStorage.setItem("totalDebt", total);
}

function loadTotal() {
  return localStorage.getItem("totalDebt");
}

function saveNewUser(NewUser) {
  localStorage.setItem("NewUser", NewUser);
}

function loadNewUser() {
  return localStorage.getItem("NewUser");
}
