document.addEventListener("DOMContentLoaded", function () {
  const nextSubscriptionDate = new Date("2023-10-15");

  const renewalCodeInput = document.getElementById("renewal-code");
  const nextSubscriptionDateElement = document.getElementById(
    "next-subscription-date"
  );
  const currentSportElement = document.getElementById("current-sport");
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", toggleMenu);

  const renewButton = document.getElementById("renew-button");
  renewButton.addEventListener("click", handleRenewal);


  updateDateTime();
  updateCountdown(nextSubscriptionDate);

 
  nextSubscriptionDateElement.textContent = formatDate(nextSubscriptionDate);


  const currentSport = getCurrentSport(); 
  currentSportElement.textContent = currentSport;
  renewButton.addEventListener("click", handleRenewal);
  menuToggle.addEventListener("click", toggleMenu);
  function updateDateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentDateElement = document.getElementById("current-date");

    setInterval(function () {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const dateString = now.toLocaleDateString();

      currentTimeElement.textContent = timeString;
      currentDateElement.textContent = dateString;
    }, 1000); 
  }
  function updateCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");

    function update() {
      const now = new Date();
      const timeDifference = targetDate - now;
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        countdownElement.textContent = `${days} days`;
      } else {
        countdownElement.textContent = "Expired"; 
      }
    }
    update(); 
    setInterval(update, 1000); 
  }
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  function getCurrentSport() {
    return "Cardio Workout";
  }
  function handleRenewal() {
    const renewalCode = renewalCodeInput.value;
    if (renewalCode === "12345") {
      nextSubscriptionDate.setDate(nextSubscriptionDate.getDate() + 30);
      nextSubscriptionDateElement.textContent =
        formatDate(nextSubscriptionDate);

      alert(
        "Membership renewed successfully! Your next subscription date has been updated."
      );
    } else {
      alert("Invalid renewal code. Please try again.");
    }
  }

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
});
