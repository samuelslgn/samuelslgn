// Toggle logic untuk tombol custom
const toggles = document.querySelectorAll(".toggle");

// Cegah bubbling saat switch (checkbox) diklik
document.querySelectorAll(".switch input").forEach((input) => {
  input.addEventListener("click", function (event) {
    event.stopPropagation(); // Blokir klik dari naik ke parent
  });
});

// Navigasi saat .device-card diklik, kecuali kalau anaknya (seperti switch) yang diklik
document.querySelectorAll(".device-card.clickable").forEach((card) => {
  card.addEventListener("click", function () {
    const target = card.getAttribute("data-target");
    if (target) {
      window.location.href = target;
    }
  });
});

// Ubah greeting berdasarkan waktu
const greetingElement = document.querySelector(".greeting h2");
const now = new Date();
const hour = now.getHours();

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

// Fungsi animasi toggle custom (opsional)
function Animatedtoggle(event) {
  if (event) event.stopPropagation();
  console.log("Toggle clicked");
  // Tambahkan logika toggle animasi di sini jika diperlukan
}
