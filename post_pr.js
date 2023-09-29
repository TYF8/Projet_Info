document.addEventListener("DOMContentLoaded", function () {
  const addPrButton = document.getElementById("add-pr-button");
  const prFormModal = document.getElementById("myModal");
  const closeButton = document.querySelector(".close");
  const prForm = document.getElementById("pr-form");
  const prFeedSection = document.querySelector(".pr-feed");
  const leaderboardSection = document.querySelector(".leaderboard");


  const prData = [
    {
      user: "User1",
      exercise: "Deadlift",
      weight: "200 kg",
      date: "2023-09-15",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID1",
    },
    {
      user: "User2",
      exercise: "Bench Press",
      weight: "150 kg",
      date: "2023-09-14",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID3",
    },
    {
      user: "User3",
      exercise: "Squat",
      weight: "250 kg",
      date: "2023-09-13",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID3",
    },
  ];


  function displayPrEntries() {
    prFeedSection.innerHTML = "";
    prData.forEach((pr) => {
      const prEntry = document.createElement("div");
      prEntry.classList.add("pr-entry");
      prEntry.innerHTML = `
        <h3>${pr.user}</h3>
        <p>${pr.exercise}ed ${pr.weight} on ${pr.date}</p>
        <iframe width="320" height="180" src="${pr.videoUrl}" frameborder="0" allowfullscreen></iframe>
      `;
      prFeedSection.appendChild(prEntry);
    });
  }


  addPrButton.addEventListener("click", () => {
    prFormModal.style.display = "block";
  });


  closeButton.addEventListener("click", () => {
    prFormModal.style.display = "none";
  });

  prForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("user").value;
    const exercise = document.getElementById("exercise").value;
    const weight = document.getElementById("weight").value;
    const prDate = document.getElementById("date").value;
    const videoFile = document.getElementById("video").files[0];


    if (!/^\d+$/.test(weight)) {
      alert("Weight should be a number.");
      return;
    }


    const newPr = {
      user: userName,
      exercise: exercise,
      weight: `${weight} kg`,
      date: prDate,
      videoUrl: URL.createObjectURL(videoFile), 
    };

    prData.push(newPr);

    displayPrEntries();


    prForm.reset();
    prFormModal.style.display = "none";
  });

  displayPrEntries();


  leaderboardSection.addEventListener("click", (event) => {
    if (event.target.tagName === "H3") {
      const exercise = event.target.textContent.toLowerCase();
      displayLeaderboard(exercise);
    }
  });
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
