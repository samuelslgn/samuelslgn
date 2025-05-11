//register.html//
document.getElementById("submitBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!username || !password) {
    console.log("Missing input");
    errorMessage.textContent = "*Username and password are required.";
    errorMessage.classList.add("visible", "shake");

    // Hapus kelas animasi setelah selesai supaya bisa dipicu ulang
    setTimeout(() => {
      errorMessage.classList.remove("shake");
    }, 400); // waktu harus sama dengan durasi animasi
  } else {
    console.log("All inputs filled");
    errorMessage.classList.remove("visible");
    errorMessage.textContent = "";
    window.location.href = "homepage.html";
  }
});
