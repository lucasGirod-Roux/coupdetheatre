import $ from 'jquery';

let current_width = window.innerWidth;
let min_width = 768;
let max_width_mobilexs = 576;
let mobile = current_width < min_width;
let mobilexs = current_width < max_width_mobilexs;
setConnection();

function swapChildren(obj1, obj2) {
    let temp = obj2.children().detach();
    obj2.empty().append(obj1.children().detach());
    obj1.append(temp);
}

function toggleMobileStyles() {
    if (mobile) {
        $("*[id^='_desktop_']").each(function (idx, el) {
            let target = $('#' + el.id.replace('_desktop_', '_mobile_'));
            if (target.length) {
                swapChildren($(el), target);
            }
        });

        $('[data-collapse-hide-mobile]').collapse('hide');
    } else {
        $("*[id^='_mobile_']").each(function (idx, el) {
            let target = $('#' + el.id.replace('_mobile_', '_desktop_'));
            if (target.length) {
                swapChildren($(el), target);
            }
        });

        $('[data-collapse-hide-mobile]').not('.show').collapse('show');
        $('[data-modal-hide-mobile].show').modal('hide');
    }
}

//test bandwidth
function setConnection() {
    const connection_support = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let connection = "slow";
    //if browser not support connection api, we assume that connection is fast
    if (!connection_support || !(/\slow-2g|2g|3g/).test(connection_support.effectiveType)) {
        connection = "fast";
    }
    const htmltag = document.getElementsByTagName('html')[0];
    htmltag.className += ' js-connection-' + connection;
}

$(window).on('debouncedresize', function () {
    let _cw = current_width;
    let _mw = min_width;
    let _w = window.innerWidth;
    let _toggle = (_cw >= _mw && _w < _mw) || (_cw < _mw && _w >= _mw);
    current_width = _w;
    mobile = current_width < min_width;
    mobilexs = current_width < max_width_mobilexs;
    if (_toggle) {
        toggleMobileStyles();
    }
});


$(document).ready(function () {
    if (mobile) {
        toggleMobileStyles();
    }
});
