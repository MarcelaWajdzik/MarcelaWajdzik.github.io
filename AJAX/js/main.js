document.getElementById("holder").addEventListener('click', function (e) {
    if (e.target.tagName !== "BUTTON") return;

    if (e.target.innerText === "Clear") {
        document.getElementById('display-screen').value = " ";
        return
    }

    document.getElementById('display-screen').value += e.target.innerText;
});