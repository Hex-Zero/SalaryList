const userList = getUsers()?.length > 0 ? getUsers() : [];
const static = getStatic() || {
  period: 7,
  amount: 10,
  intrest: 0,
};

const $createNewUserModal = $("#createNewUserModal");

$("#allowancePeriodField").val(static.period);
$("#allowaceAmountField").val(static.amount);
$("#allowaceIntrestField").val(static.intrest);

function renderUsers() {
  userList.forEach((user, index) => {
    const $userContainer = $(
      ".user-container-template > .user-container"
    ).clone();

    $userContainer.find(".user-name-input").val(user.name);
    $userContainer.find(".user-allowance-input").val(user.allowanceTotal);

    $("#mainSectionContainer").append($userContainer);
  });
}

$("#staticVariableForm").submit(function (event) {
  updateStatic({
    period: $(this)[0][0].value,
    amount: $(this)[0][1].value,
    intrest: $(this)[0][2].value,
  });
});

$("#newUserForm").submit(function () {
  userList.push({
    name: $(this)[0][1].value,
    allowanceTotal: $(this)[0][2].value,
  });
  updateUsers(userList);
  return false;
});

renderUsers();

console.log(userList);
console.log(static);
