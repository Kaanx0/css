const subscribeButtons = document.querySelectorAll(".button");
const subPage = document.querySelector("#subscribe");
const closeSubPage = document.querySelector(".fa-remove");
const responseSections = document.querySelectorAll(".responses");

subscribeButtons.forEach((subscribeButton) => {
  subscribeButton.addEventListener("click", function () {
    subPage.style.display = "block";
  });
});

closeSubPage.addEventListener("click", function () {
  subPage.style.display = "none";
});

responseSections.forEach((responseSection) => {
  responseSection.style.display = "block";
});

function showResponses(button) {
  const responses = button.parentElement.querySelector(".responses");
  responses.style.display =
    responses.style.display === "none" || responses.style.display === ""
      ? "block"
      : "none";
}

const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent.trim().toLowerCase() === "like") {
      button.innerHTML = '<i class="fa-solid fa-check"></i> Liked';
    } else {
      button.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Like';
    }
  });
});
