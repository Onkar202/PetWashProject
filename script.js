
const ham = document.querySelectorAll(".navDisplay");
const nodeList = document.querySelectorAll(".example");
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
// }
let nav = document.querySelector(".navbar");
let flag = true;
function show_hide() {
    nav.style.flexDirection = "column";
    nav.style.justifyContent = "center";
    if (flag === true) {
        for (let i = 0; i < ham.length; i++) {
            ham[i].style.display = "block";
        }
        flag = false;
    } else {
        for (let i = 0; i < ham.length; i++) {
            ham[i].style.display = "none";
        }
        flag = true;
    }


}


