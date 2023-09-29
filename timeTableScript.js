document.addEventListener("DOMContentLoaded", function () {
  const finishButton = document.getElementById("finish-button");
  const editButton = document.getElementById("edit-button");
  const cells = document.querySelectorAll("td select.activity-dropdown");
  const resetButton = document.getElementById("reset-button");

  let isEditing = false;
  let selectedColumn = -1;

  function applyGreyBackgroundToEmptyCells() {
    cells.forEach((select) => {
      const cell = select.parentElement;
      if (select.value === "-none-") {
        cell.style.backgroundColor = "#ccc";
      } else {
        cell.style.backgroundColor = "";
      }
    });
  }

  function toggleEditingMode() {
    cells.forEach((select) => {
      select.disabled = !isEditing;
      select.style.opacity = isEditing ? "1" : "0.7";
    });

    isEditing = !isEditing;
    finishButton.style.display = isEditing ? "inline-block" : "none";
    editButton.style.display = isEditing ? "none" : "inline-block";
  }

  function handleSelectChange(event) {
    selectedColumn = event.target.parentElement.cellIndex;
  }

  function applyRestToColumn() {
    if (selectedColumn !== -1) {
      cells.forEach((select, index) => {
        if (index % 8 === selectedColumn) {
          select.value = "-Rest-";
        }
      });
    }
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  const savedSelections = JSON.parse(
    localStorage.getItem("timetableSelections")
  );
  if (savedSelections) {
    cells.forEach((select, index) => {
      select.value = savedSelections[index] || "-none-";
    });
  }

  cells.forEach((select, index) => {
    select.addEventListener("change", handleSelectChange);

    
    const dayIndex = index % 8;
    select.classList.add(daysOfWeek[dayIndex]);
  });

  finishButton.addEventListener("click", () => {
    applyGreyBackgroundToEmptyCells();
    applyRestToColumn();
    toggleEditingMode();

    const selectionsToSave = Array.from(cells, (select) => select.value);
    localStorage.setItem(
      "timetableSelections",
      JSON.stringify(selectionsToSave)
    );

    selectedMuscles = selectionsToSave;
    console.log(selectedMuscles);
  });

  editButton.addEventListener("click", () => {
    cells.forEach((select) => {
      const cell = select.parentElement;
      cell.style.backgroundColor = "";
    });
    toggleEditingMode();
  });
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", toggleMenu);
  function toggleMenu() {
    const menuContainer = document.querySelector(".menu-container");
    if (
      menuContainer.style.display === "none" ||
      menuContainer.style.display === ""
    ) {
      menuContainer.style.display = "block";
    } else {
      menuContainer.style.display = "none";
    }
  }
  resetButton.addEventListener("click", () => {
    cells.forEach((select) => {
      select.value = "-none-";
    });

    cells.forEach((select) => {
      const cell = select.parentElement;
      cell.style.backgroundColor = "";
    });

    localStorage.removeItem("timetableSelections");

    selectedMuscles = [];
  });
});
