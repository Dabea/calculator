/**
 * Created by aanderson on 11/7/2015.
 */
'use strict';

var selected = false;

/*
 * Keyboard Listener activation State
 */
$('.input-area').click(function () {
    $('.input-area').addClass('selected');
    selected = true;
    return false;
});

$(document).click(function() {
    selected = false;
    $('.input-area').removeClass('selected');
});
