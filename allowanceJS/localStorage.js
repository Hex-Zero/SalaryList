function getUsers() {
  return JSON.parse(localStorage.getItem("AllowanceUser"));
}

function updateUsers(UserArray) {
  localStorage.setItem("AllowanceUser", JSON.stringify(UserArray));
}

function getStatic() {
  return JSON.parse(localStorage.getItem("StaticVars"));
}

function updateStatic(variables) {
  localStorage.setItem("StaticVars", JSON.stringify(variables));
}

function getTime() {
  return JSON.parse(localStorage.getItem("Time"));
}

function updateTime(variables) {
  localStorage.setItem("Time", JSON.stringify(variables));
}
