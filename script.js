function toggleMenu() {
    const navigation = document.getElementById("navigation");

    navigation.classList.toggle("open");
}


function copyIP() {

    const ip =
        document.getElementById("server-ip").innerText;

    navigator.clipboard.writeText(ip);

    alert("Adres serwera został skopiowany! - Dołącz i stań się najlepszym!");
}