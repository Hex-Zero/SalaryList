function createItemObjcet(title, salary, complete) {
  return { title, salary, complete };
}

function deleteJobFromArray(index) {
  jobsArray.splice(index, 1);
  saveJobs(jobsArray);
}

function updateCompleteStatus(index, status) {
  jobsArray[index].complete = status;
  saveJobs(jobsArray);
}

function calculateTotal() {
  let salary = 0;
  jobsArray.forEach((element) => {
    if (element.complete && !element.added) {
      salary += parseInt(element.salary);
      element.added = true;
    } else if (element.added && !element.complete) {
      salary -= parseInt(element.salary);
      element.added = false;
    }
  });
  saveTotal(parseInt(loadTotal()) + salary);
}

function createTaskListItem({ title, salary, complete, index }) {
  const $taskListItemContainer = $(document.createElement("div")).addClass(
    "max-task-list-item-container"
  );
  const $taskListItem = $(document.createElement("div"))
    .addClass("max-shopping-list")
    .html(title)
    .click(function () {
      $checkBox.click();
    });

  const $jobSalary = $(document.createElement("div"))
    .addClass("max-job-salary")
    .html(salary + "£")
    .click(function () {
      $checkBox.click();
    });

  const $checkBox = $(document.createElement("input"))
    .addClass("max-check-box")
    .prop({ type: "checkbox", checked: complete })
    .on("click", function (e) {
      updateCompleteStatus(index, e.currentTarget.checked);
      calculateTotal();
      updatePage();
    });

  if (complete) {
    $taskListItem.addClass("max-cross-out-item");
  } else {
    $taskListItem.removeClass("max-cross-out-item");
  }

  const $removeButton = $(document.createElement("button"))
    .addClass("max-task-item-remove")
    .html(
      "<img src='../assets/icons/dumpster-fire.svg' class='max-delete-svg'/>"
    )
    .on("click", function () {
      if ($checkBox.is(":checked")) $checkBox.click();
      deleteJobFromArray(index);
      updatePage();
    });

  return $taskListItemContainer.append(
    $checkBox,
    $taskListItem,
    $jobSalary,
    $removeButton
  );
}
