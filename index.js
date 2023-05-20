const submit = document.getElementById("btn");
const address = document.getElementById("adress");
const para = document.getElementById("para");
const show = document.getElementById("result_container");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (address.value.trim() === "") {
    para.style.display="block"
  } else {
    para.style.display="none"
    show.style.display = "block";
  }
});
