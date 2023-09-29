let selectedMuscles = [];

const workoutSuggestions = {
  Chest: [
    "Bench Press (4 sets x 10 reps)",
    "Incline Dumbbell Press (3 sets x 12 reps)",
    "Chest Flyes (3 sets x 12 reps)",
  ],
  Back: [
    "Deadlift (4 sets x 8 reps)",
    "Pull-Ups (3 sets x 10 reps)",
    "Bent-Over Rows (4 sets x 10 reps)",
  ],
  Shoulders: [
    "Military Press (4 sets x 10 reps)",
    "Lateral Raises (3 sets x 12 reps)",
    "Front Raises (3 sets x 12 reps)",
  ],
  Triceps: [
    "Tricep Dips (4 sets x 10 reps)",
    "Skull Crushers (3 sets x 12 reps)",
    "Close-Grip Bench Press (4 sets x 10 reps)",
  ],
  Biceps: [
    "Barbell Curls (4 sets x 10 reps)",
    "Hammer Curls (3 sets x 12 reps)",
    "Preacher Curls (3 sets x 12 reps)",
  ],
  Forearms: [
    "Wrist Curls (4 sets x 15 reps)",
    "Reverse Wrist Curls (4 sets x 15 reps)",
    "Farmer's Walk (3 sets)",
  ],
  Abs: [
    "Crunches (4 sets x 20 reps)",
    "Leg Raises (3 sets x 15 reps)",
    "Planks (3 sets for 1 minute each)",
  ],
  Quads: [
    "Squats (4 sets x 10 reps)",
    "Leg Press (4 sets x 12 reps)",
    "Lunges (3 sets x 10 reps each leg)",
  ],
  Hamstrings: [
    "Romanian Deadlifts (4 sets x 10 reps)",
    "Hamstring Curls (4 sets x 12 reps)",
    "Good Mornings (3 sets x 12 reps)",
  ],
  Calves: [
    "Standing Calf Raises (4 sets x 15 reps)",
    "Seated Calf Raises (4 sets x 15 reps)",
    "Donkey Calf Raises (3 sets x 15 reps)",
  ],
  Glutes: [
    "Hip Thrusts (4 sets x 12 reps)",
    "Glute Bridges (3 sets x 15 reps)",
    "Lunges (3 sets x 10 reps each leg)",
  ],
  Cardio: ["Cardiovascular Exercise (30 minutes)"],
  Rest: ["Rest (Active Recovery)"],


};
console.log("Selected Muscles:", selectedMuscles);
document.addEventListener("DOMContentLoaded", function () {

  function createWorkoutSplit(selectedMuscles) {
    const tableBody = document.querySelector("#workout-split tbody");
    
    if (selectedMuscles.length > 0) {
      
      for (const muscle of selectedMuscles) {
        const workouts = workoutSuggestions[muscle];

        const row = document.createElement("tr");
        const dayCell = document.createElement("td");
        dayCell.textContent = muscle;
        row.appendChild(dayCell);

        if (workouts) {

          const workoutCell = document.createElement("td");
          workoutCell.textContent = workouts.join(", ");
          row.appendChild(workoutCell);
        } else {

          const restCell = document.createElement("td");
          restCell.textContent = "Rest";
          row.appendChild(restCell);
        }

        tableBody.appendChild(row);
      }
    } else {

      const noMusclesRow = document.createElement("tr");
      const noMusclesCell = document.createElement("td");
      noMusclesCell.textContent = "No muscles selected.";
      noMusclesRow.appendChild(noMusclesCell);
      tableBody.appendChild(noMusclesRow);
    }
  }


  const savedMuscles = JSON.parse(localStorage.getItem("selectedMuscles"));
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

  createWorkoutSplit(savedMuscles);
});
console.log("Selected Muscles:", selectedMuscles);
