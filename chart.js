const openchartbtn = document.querySelector(".chartbtn");


openchartbtn.addEventListener("click", openchartbtnClick);

function openchartbtnClick(event) {
  openchartbtn.classList.toggle("open");
}
