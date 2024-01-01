const search = document.getElementById("search");
search.addEventListener("change", (e) => {
  alert("dsa");
});
// search.value = "tv";
// // search.disabled = true;
// search.style.backgroundColor = "wheat";

const searchChange = () => {
  console.log("sdaf");
};

// // console.log(cards);

// const comp = document.querySelectorAll("div");
// console.log(comp);

// const para = document.getElementById("para");
// // para.innerText = "HI my name is nabin.<br/> I am sdafdasf";
// para.innerHTML = "HI my name is <strong>nabin</strong>.<br/> I am sdafdasf";
// para.innerHTML += " <b>hi</b>";

// document.getElementById("fimg").src =
//   "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg";

const list = [
  {
    name: "cat",
    dec: "dasf dsa fds af dsaf dsaf",
    price: "Rs 9000",
    image:
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
  },
  {
    name: "dog",
    dec: "dasf ddshafh dhsa fkjh dsja fdsj hfjsdkj ",
    price: "Rs 12000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
  },
];

const card_wrapper = document.getElementById("card-list");
list.forEach((item) => {
  card_wrapper.innerHTML += `<div class="group card">
  <div class="h-[300px] overflow-hidden">
    <img
      class="object-cover w-full h-full group-hover:scale-105 duration-300"
      src="${item?.image}"
      alt=""
    />
  </div>
  <div class="flex justify-between">
    <h1 class="text-lg text-gray-800 capitalize font-semibold">
      ${item?.name}
    </h1>
    <p>${item?.price}</p>
  </div>
  <p class="line-clamp-2">
   ${item?.dec}
  </p>
  </div>`;
});

// const cards = document.getElementsByClassName("card");
// // cards[0].style.backgroundColor = "gray";
// for (let i = 0; i < cards.length; i++) {
//   cards[i].style.backgroundColor = "gray";
// }

let drop_cont = document.getElementById("drop-cont");
let isDrop = false;
const drop = () => {
  drop_cont.style.display = isDrop ? "none" : "block";
  isDrop = !isDrop;
};

// const parahover = () => {
//   alert("hello");
// };

const dsa = () => {
  console.log("dsaf");
};

const naa = () => {
  alert("dsf");
};
const dsaf = () => {
  alert("dsaf");
};
