document.addEventListener('DOMContentLoaded', () => {
    const btnCurtir = document.getElementById('btn-curtir');
    const contadorElemento = document.getElementById('contador-curtidas');

    // Carrega curtidas salvas no navegador ou começa do 0
    let curtidas = parseInt(localStorage.getItem('quantidadeCurtidas')) || 0;
    let jaCurtiu = localStorage.getItem('usuarioCurtiu') === 'true';

    // Atualiza o estado inicial
    contadorElemento.textContent = curtidas;
    if (jaCurtiu) {
        btnCurtir.classList.add('curtido');
    }

    // Ação ao clicar no botão
    btnCurtir.addEventListener('click', () => {
        if (!jaCurtiu) {
            curtidas++;
            jaCurtiu = true;
            btnCurtir.classList.add('curtido');
        } else {
            curtidas--;
            jaCurtiu = false;
            btnCurtir.classList.remove('curtido');
        }

        // Atualiza na página e grava na memória do navegador
        contadorElemento.textContent = curtidas;
        localStorage.setItem('quantidadeCurtidas', curtidas);
        localStorage.setItem('usuarioCurtiu', jaCurtiu);
    });
});