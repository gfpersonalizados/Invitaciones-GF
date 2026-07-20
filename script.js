function abrirInvitacion() {

    const video = document.querySelector("video");

    video.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        video.play();

        if (video.requestFullscreen) {
            video.requestFullscreen();
        }

    }, 700);

}
