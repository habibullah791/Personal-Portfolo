function myFunction() {
    document.body.style.backgroundColor = "red";

}
function start() {
    let submit = document.getElementById("switch");
    submit.addEventListener("click", toggle);
};

function toggle() {
    let color = document.body;
    color.classList.toggle('black');
};


start();