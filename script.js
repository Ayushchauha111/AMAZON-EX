const lock = document.getElementById("lock");
const photos = document.getElementById("photos");
const proposal = document.getElementById("proposal");
const music = document.getElementById("bgMusic");

const photoFrame = document.getElementById("photoFrame");
const photoText = document.getElementById("photoText");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const photoList = [
  { src: "photo1.jpg", text: "This smile is my peace 🥹" },
  { src: "photo2.jpg", text: "Strong, calm, beautiful ❤️" },
  { src: "photo3.jpg", text: "I fall for you every day 😌" },
  { src: "photo4.jpg", text: "My forever person 💍" },
  { src: "photo5.jpg", text: "My coffee dates, my home ☕❤️" }
];

let index = 0;

function unlock() {
  if (document.getElementById("pass").value === "forever") {
    lock.classList.add("hidden");
    photos.classList.remove("hidden");
    music.play();
    startPhotos();
  } else {
    alert("Wrong password 😌");
  }
}

function startPhotos() {
  setInterval(() => {
    photoFrame.src = photoList[index].src;
    photoText.innerText = photoList[index].text;
    index = (index + 1) % photoList.length;
  }, 3000);
}

function goProposal() {
  photos.classList.add("hidden");
  proposal.classList.remove("hidden");
}

// NO button escapes 😈
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

// YES clicked ❤️
yesBtn.onclick = () => {
  launchFireworks();
  document.getElementById("finalText").innerText =
    "Neha said YES 😭💍 Forever starts now ❤️";
};

// FIREWORKS 🎆
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFireworks() {
  setInterval(() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
      ctx.fill();
    }
  }, 200);
}
