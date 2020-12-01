const $inputField = $(".max-job-title-input");
const $salaryInput = $(".max-salary-input");
const $maxJobListContainer = $(".max-job-list-container");
const $totalInput = $(".max-total-input");

const $buttonAddNewItem = $(".max-button");

if (!loadNewUser()) setupNewUser();

if (!loadJobs) saveJobs([]);

const jobsArray = loadJobs()?.length > 0 ? loadJobs() : [];
updatePage();

function addNewTask() {
  const newJob = createItemObjcet($inputField.val(), $salaryInput.val(), false);
  jobsArray.unshift(newJob);
  updatePage();
  $inputField.val("");
  $salaryInput.val("");
}

$buttonAddNewItem.click(function () {
  addNewTask();
});

function updatePage() {
  $maxJobListContainer.empty();
  jobsArray.forEach((element, index) => {
    $(createTaskListItem({ ...element, index })).appendTo($maxJobListContainer);
  });
  saveJobs(jobsArray);
  $totalInput.val(loadTotal());
}

$("#mx-new-job-form").submit(function () {
  return false;
});

$(":input").on("keyup ", function (e) {
  if (e.target.value) {
    $(e.target.labels[0]).addClass("max-show-label");
  } else {
    $(e.target.labels[0]).removeClass("max-show-label");
  }
});

$(".max-clear-user-data").click(function () {
  resetUser();
});
