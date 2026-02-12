const lock = document.getElementById("lock");
const photos = document.getElementById("photos");
const proposal = document.getElementById("proposal");
const music = document.getElementById("bgMusic");

const photoFrame = document.getElementById("photoFrame");
const photoText = document.getElementById("photoText");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const photoList = [
  { src: "photo1.jpeg", text: "This smile is my peace 🥹" },
  { src: "photo2.jpeg", text: "Strong, calm, beautiful ❤️" },
  { src: "photo3.jpeg", text: "I fall for you every day 😌" },
  { src: "photo4.jpeg", text: "My forever person 💍" },
  { src: "photo5.jpeg", text: "My coffee dates, my home ☕❤️" }
];

let index = 0;

function unlock() {
  const pass = document.getElementById("pass").value.toLowerCase();
  if (pass === "forever") {
    lock.classList.add("hidden");
    photos.classList.remove("hidden");
    music.play().catch(e => console.log("Music wait for interaction"));
    startPhotos();
  } else {
    alert("Wrong password 😌");
  }
}

function startPhotos() {
  photoText.innerText = photoList[0].text;
  setInterval(() => {
    index = (index + 1) % photoList.length;
    photoFrame.style.opacity = 0;
    setTimeout(() => {
      photoFrame.src = photoList[index].src;
      photoText.innerText = photoList[index].text;
      photoFrame.style.opacity = 1;
    }, 500);
  }, 3500);
}

function goProposal() {
  photos.classList.add("hidden");
  proposal.classList.remove("hidden");
}

// NO button escapes logic
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton); // For mobile

function moveNoButton() {
  const container = document.querySelector(".buttons");
  const maxX = container.clientWidth - noBtn.clientWidth;
  const maxY = container.clientHeight - noBtn.clientHeight;

  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// YES clicked
yesBtn.onclick = () => {
  launchFireworks();
  document.getElementById("finalText").innerText =
    "Neha said YES 😭💍 Forever starts now ❤️";
  noBtn.classList.add("hidden");
  yesBtn.style.display = "none";
};

// FIREWORKS logic
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function launchFireworks() {
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * -10 - 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
  }, 100);
  animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.y > canvas.height) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}
