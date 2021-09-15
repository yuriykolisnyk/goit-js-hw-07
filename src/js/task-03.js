const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.getElementById("gallery");

const addImages = images.map((el) => {
  const imageEl = `<li><img src = "${el.url}" alt = "${el.alt}"  width = "250" height = "150"  /></li>`;
  return imageEl;
});
galleryList.insertAdjacentHTML("afterbegin", addImages.join(" "));
// galleryList.style.display = "flex";
// galleryList.setAttribute("style", "display: flex; list-style-type: none;");
// galleryList.classList.add()
