const userList = getUsers()?.length > 0 ? getUsers() : [];
const static = getStatic()?.length > 0 ? getStatic() : [];

function createUser(name, allowanceTotal = 0) {
  userList.push({
    name,
    allowanceTotal,
  });
}

$("#createNewUserModal").show();

console.log(userList);
console.log(static);
