var $ = function (id) {
    return document.getElementById(id);
};

function processEntries() {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        console.error("Subtotal must be > 0 and < 10000");
    }
    else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        console.error("Tax Rate must be > 0 and < 12");
    }
    else {
        var salesTax = (subtotal * taxRate) / 100;
        var total = subtotal + salesTax;

        $("sales_tax").value = salesTax.toFixed(2);
        $("total").value = total.toFixed(2);
    }
    $("subtotal").focus();
};

function clearFields() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
}

function clearSalesTaxAndTotal() {
    $("sales_tax").value = "";
    $("total").value = "";
}

window.onload = () => {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearFields;
    $("subtotal").focus();
    $("subtotal").onclick = () => { $("subtotal").value = ""; clearSalesTaxAndTotal(); };
    $("tax_rate").onclick = () => { $("tax_rate").value = ""; clearSalesTaxAndTotal(); };
};

