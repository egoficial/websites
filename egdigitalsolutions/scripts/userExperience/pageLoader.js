const loaderContainer = document.querySelector("#loaderContainer");

setTimeout(() => {
    function fadeOut() {
        const loaderContainer = document.getElementById("loaderContainer");
        let opacidade = 1;  // valor inicial da opacidade

        const intervalo = setInterval(() => {
            if (opacidade <= 0) {
                clearInterval(intervalo);  // parar o intervalo quando a opacidade chegar a 0
                loaderContainer.style.display = "none";  // opcional: ocultar o elemento após o fade
            } else {
                opacidade -= 0.05;  // diminuir a opacidade gradualmente
                loaderContainer.style.opacity = opacidade;
            }
        }, 50);  // executar a cada 50 milissegundos
    }
    fadeOut();
}, 3000);