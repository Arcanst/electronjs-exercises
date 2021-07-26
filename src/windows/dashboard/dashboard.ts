const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    window.api.getConfig();
});

window.api.receiveConfig((event, args) => {
    console.log('received the config!', event, args)

    updateUserProducts(event);
})

function updateUserProducts(products: Product[]) {
    const tableBodyElement = document.getElementById('productsBody');
    var newTableBody = '';

    products.forEach(product => {
        const row = '<tr>' + '<td>1</td>' + '<td>' + product.name + '</td>' + '<td>' + product.checksum + '</td>' + '</tr>'

        newTableBody += row;
    })

    tableBodyElement.innerHTML = newTableBody;
}