// * cursor
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


let thankYou = document.querySelector("#thank-you");
let rate = document.querySelector("#rate");

let temp = 0;

thankYou.classList.add("d-none");

function updateRate(point) {
    temp = point;
}
function getRate() {
    document.querySelector(
        "#selected"
    ).innerHTML = `You selected ${temp} out of 5`;
    rate.classList.add("d-none");
    thankYou.classList.remove("d-none");
}
