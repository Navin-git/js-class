const menu = document.getElementById("menu");
let isShow = false;
const drop = () => {
  menu.style.display = !isShow ? "flex" : "none";
  isShow = !isShow;
};
