$(document).ready(function () {
    $('input[type="text"][placeholder="CPF"]').mask('000.000.000-00', { reverse: true });
    $('input[type="tel"]').mask('(00) 00000-0000');
    $('input[type="text"][placeholder="CEP"]').mask('00000-000');
});
