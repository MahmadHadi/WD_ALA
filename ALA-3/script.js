const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});
