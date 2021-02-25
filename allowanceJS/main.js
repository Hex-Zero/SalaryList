const userList = getUsers()?.length > 0 ? getUsers() : [];
const static = getStatic()?.length > 0 ? getStatic() : [];
const $createNewUserModal = $("#createNewUserModal");

$("#newUserForm").submit(function () {
  userList.push({
    name: $(this)[0][1].value,
    allowanceTotal: $(this)[0][2].value,
  });
  updateUsers(userList);
  return false;
});

console.log(userList);
console.log(static);
