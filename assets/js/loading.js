function showLoading() {
    const div = document.createElement('div');
    div.classList.add("loading", "centralize");
    const label = document.createElement("label");
    label.innerHTML = "Carregando...";
    div.appendChild(label);

    document.body.appendChild(div);

    // setTimeout(()=> hideLoading(), 3000)
}

function hideLoading() {
    const loadings = document.getElementsByClassName('loading');
    if (loadings.length) {
        loadings[0].remove();
    }
}

//https://www.youtube.com/watch?v=weMzg_GV7y0
