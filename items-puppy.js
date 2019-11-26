var itemList = {
    'treats': ['LOV7660', 'MRDTRPU', 'DAK8010', 'SLMT34', 'VP099'],
    'toys': ['DAK2010', 'AFP4220', '13897', 'PF22058', 'DAK2050'],
    'grooming': ['804594', '12478', 'SHO0296', 'KCAT70', 'DAK6210']
};

itemList.treats.forEach(function (el) {
    loadSku(el, '.gx-treats')
});
itemList.toys.forEach(function (el) {
    loadSku(el, '.gx-toys')
});
itemList.grooming.forEach(function (el) {
    loadSku(el, '.gx-grooming')
});

$('.gx-row-one.gx-row').html('');
function loadSku(el, cn) {
    getProductInformation(el).done(function (data) {
        var _temp = $('<div>' + data + '</div>')
        var item = _temp.find('li.product-item.product');
        var atc = _temp.find('button.quick-add-to-cart');
        $(cn).append(item);
        item.append(atc);
        atc.css({
            'position':'absolute',
            'bottom' : 0
        })
        item.css({
            'flex-basis': '19%',
            'min-height': 380,
            'min-width': 174,
            'position': 'relative',
            'margin': '0 5px'
        });
        item.find('.product-price-wrapper, .list-of-price-mobile').css({
            'display': 'none'
        });
        item.find('.list-of-price').css({
            'display': 'none'
        });
        $('.product-name').css({
            'line-height': '21px'
        })
        atc.on('click', function () {
            var sku = $(this).data('sku');
            alert(sku);
        });
    });
}
$('.gx-main-container').removeClass('hidden');