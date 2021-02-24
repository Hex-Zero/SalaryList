const userList = [];

function createUser(name, allowanceTotal = 0) {
  userList.push({
    name,
    allowanceTotal,
  });
}

createUser("Ilona", 23);

console.log(userList);
