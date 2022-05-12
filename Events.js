$('#vFormat').change(function() {
    $('.select-default-hidden').hide();
    $('.select-default-shown').show();

    $('.select-' + $(this).val() + '-shown').show();
}).change();