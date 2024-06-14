$(function() {
    var duracao = 600;
    var intervalo = 2400;

    setInterval(function() {
        $('.carrossel>*:first-child').animate({'margin-left': '-100%'}, duracao, 'linear', function() {
            $(this).appendTo(this.parentElement).css('margin-left', '0');
        });
    }, intervalo);
});
