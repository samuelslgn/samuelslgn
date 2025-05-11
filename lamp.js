const greetingElement = document.querySelector(".greeting h2");
const now = new Date();
const hour = now.getHours();

const endpoint = localStorage.getItem("esp_ip") || "http://192.168.1.23";

let greeting = "Hello";
if (hour >= 5 && hour < 11) {
  greeting = "Good Morning";
} else if (hour >= 11 && hour < 17) {
  greeting = "Good Afternoon";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}
greetingElement.textContent = greeting;

// Fallback jika ingin memanggil secara manual
function goToPage(pageUrl) {
  window.location.href = pageUrl;
}

function getLampu1() {
  fetch(endpoint + "/lampu1", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      const lampu1Text = document.getElementById("lampu1StatusText");
      const checkbox = document.querySelector('input[data-location="lampu1"]');

      if (result == "ON") {
        lampu1Dot.style.backgroundColor = "green";
        lampu1Image.src = "./assets/bulb_on.png";
        lampu1Text.textContent = "ON";
        checkbox.checked = true;
      } else {
        lampu1Dot.style.backgroundColor = "grey";
        lampu1Image.src = "./assets/bulb_off.png";
        lampu1Text.textContent = "OFF";
        checkbox.checked = false;
      }
    });
}

function getLampu2() {
  fetch(endpoint + "/lampu2", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      const lampu2Text = document.getElementById("lampu2StatusText");
      const checkbox = document.querySelector('input[data-location="lampu2"]');

      if (result == "ON") {
        lampu2Dot.style.backgroundColor = "green";
        lampu2Image.src = "./assets/bulb_on.png";
        lampu2Text.textContent = "ON";
        checkbox.checked = true;
      } else {
        lampu2Dot.style.backgroundColor = "grey";
        lampu2Image.src = "./assets/bulb_off.png";
        lampu2Text.textContent = "OFF";
        checkbox.checked = false;
      }
    });
}

function getLampu3() {
  fetch(endpoint + "/lampu3", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      const lampu3Text = document.getElementById("lampu3StatusText");
      const checkbox = document.querySelector('input[data-location="lampu3"]');
      if (result == "ON") {
        lampu3Dot.style.backgroundColor = "green";
        lampu3Image.src = "./assets/bulb_on.png";
        lampu3Text.textContent = "OFF";
        checkbox.checked = true;
      } else {
        lampu3Dot.style.backgroundColor = "grey";
        lampu3Image.src = "./assets/bulb_off.png";
        lampu3Text.textContent = "OFF";
        checkbox.checked = false;
      }
    });
}

function getLampu4() {
  fetch(endpoint + "/lampu4", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      const lampu4Text = document.getElementById("lampu4StatusText");
      const checkbox = document.querySelector('input[data-location="lampu4"]');
      if (result == "ON") {
        lampu4Dot.style.backgroundColor = "green";
        lampu4Image.src = "./assets/bulb_on.png";
        lampu4Text.textContent = "OFF";
        checkbox.checked = true;
      } else {
        lampu4Dot.style.backgroundColor = "grey";
        lampu4Image.src = "./assets/bulb_off.png";
        lampu4Text.textContent = "OFF";
        checkbox.checked = false;
      }
    });
}

function setLampu1() {
  fetch(endpoint + "/lampu1", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

function setLampu2() {
  fetch(endpoint + "/lampu2", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

function setLampu3() {
  fetch(endpoint + "/lampu3", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

function setLampu4() {
  fetch(endpoint + "/lampu4", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

// Inisialisasi & Event Handler
document.addEventListener("DOMContentLoaded", () => {
  getLampu1();
  getLampu2();
  getLampu3();
  getLampu4();

  document
    .querySelectorAll('input[type="checkbox"][data-location]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const location = checkbox.getAttribute("data-location");
        switch (location) {
          case "lampu1":
            setLampu1();
            break;
          case "lampu2":
            setLampu2();
            break;
          case "lampu3":
            setLampu3();
            break;
          case "lampu4":
            setLampu4();
            break;
        }
      });
    });
});
