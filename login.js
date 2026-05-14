const loginBtn = document.getElementById("loginBtn");

// DATABASE USER
const users = [
  { nickname: "Aprel", password: "APR482" },
  { nickname: "Adel", password: "ADL193" },
  { nickname: "Arta", password: "ART728" },
  { nickname: "Farel", password: "FRL615" },
  { nickname: "Selo", password: "SEL904" },
  { nickname: "Alex", password: "ALX377" },
  { nickname: "Ozi", password: "OZI542" },
  { nickname: "Dafit", password: "DFT831" },
  { nickname: "Fian", password: "FIN274" },
  { nickname: "Afnan", password: "AFN663" },
  { nickname: "Aldi", password: "ALD159" },
  { nickname: "Roofi", password: "KingFii" },
  { nickname: "Opel", password: "OPL786" },
  { nickname: "Mila", password: "MLA480" },
  { nickname: "Olin", password: "OLN255" },
  { nickname: "Risa", password: "RSA991" },
  { nickname: "Sil", password: "SIL607" },
  { nickname: "Zahra", password: "ZHR348" }, 
  { nickname: "Maysun", password: "MYS223"}
];

loginBtn.addEventListener("click", () => {
  
  const nick = document.getElementById("nick").value.trim();
  const pass = document.getElementById("pass").value.trim();
  
  if (!nick || !pass) {
    alert("Isi dulu nick + password");
    return;
  }
  
  // cek login valid
  const found = users.find(u =>
    u.nickname === nick && u.password === pass
  );
  
  if (!found) {
    alert("Login gagal. Salah nick atau password.");
    return;
  }
  
  // simpan session
  localStorage.setItem("player", nick);
  
  // init coin kalau belum ada
  if (!localStorage.getItem("totalCoins")) {
    localStorage.setItem("totalCoins", 0);
  }
  
  // masuk dashboard
  window.location.href = "dashboard.html";
  
});