window.addEventListener("load", () => {
let demo_container = document.getElementById("container_demo");
demo_container.input = document.getElementById("container_demo.input");

demo_container.input.addEventListener("input", (event) => {
    demo_container.style.setProperty("--width", event.target.value + "px");
});







});