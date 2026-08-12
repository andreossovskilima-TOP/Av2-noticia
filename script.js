// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    const btnCurtir = document.getElementById('btn-curtir');
    const contadorElemento = document.getElementById('contador-curtidas');

    // Recupera a quantidade de curtidas salvas no navegador (ou inicia em 0)
    let curtidas = parseInt(localStorage.getItem('quantidadeCurtidas')) || 0;
    let jaCurtiu = localStorage.getItem('usuarioCurtiu') === 'true';

    // Atualiza a tela com as informações salvas
    contadorElemento.textContent = curtidas;
    if (jaCurtiu) {
        btnCurtir.classList.add('curtido');
    }

    // Função de clique no botão
    btnCurtir.addEventListener('click', () => {
        if (!jaCurtiu) {
            // Adiciona a curtida
            curtidas++;
            jaCurtiu = true;
            btnCurtir.classList.add('curtido');
        } else {
            // Remove a curtida se clicar novamente
            curtidas--;
            jaCurtiu = false;
            btnCurtir.classList.remove('curtido');
        }

        // Atualiza a contagem no HTML
        contadorElemento.textContent = curtidas;

        // Salva as preferências no navegador
        localStorage.setItem('quantidadeCurtidas', curtidas);
        localStorage.setItem('usuarioCurtiu', jaCurtiu);
    });
});
