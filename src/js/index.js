const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

buttonTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo);
});

buttonCloseModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});