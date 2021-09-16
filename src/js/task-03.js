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

const galleryListEl = document.getElementById("gallery");

const addImagesEl = images.map((item) => {
  const imageEl = `<li><img src = "${item.url}" alt = "${item.alt}"  width = "250" height = "150"  /></li>`;
  return imageEl;
});
galleryListEl.insertAdjacentHTML("afterbegin", addImagesEl.join(" "));
// galleryList.style.display = "flex";
// galleryList.setAttribute("style", "display: flex; list-style-type: none;");
// galleryList.classList.add()
