$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const textoNovo = $('#texto-novo').val(); // Obter o texto do input

        const novoItem = $('<li></li>'); // Criar um novo item da lista

        const novoTexto = $('<span></span>').text(textoNovo); // Criar um span com o texto
        novoTexto.click(function() {
            $(this).toggleClass('concluido');
        });

        novoItem.append(novoTexto); // Adicionar o span ao item da lista

        $('.lista-tarefas').append(novoItem); // Adicionar o item à lista

        $('#texto-novo').val(''); // Limpar o input

        $('form').slideUp(); // Esconder o formulário
    });
});