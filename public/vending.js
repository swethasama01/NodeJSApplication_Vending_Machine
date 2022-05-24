function DownloadJSON() {
    var products = [{
        name: "Fizz",
        cost: 1.5
    }, {
        name: "Cola",
        cost: 1
    }, {
        name: "Mega Pop",
        cost: 1
    }];
    var productName = document.getElementById("product_name").value;
    var productQty = Number(document.getElementById("qty").value);
    //alert(productQty);
    var amount;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            console.log(products[i].name, products[i].cost + '$');
            amount = products[i].cost;
        }
    }
    var obj = { Product_Name: productName, Product_Qty: productQty, Amount: "$"+productQty*amount, msg:"Your order has been places Successfully!"};

    //Convert JSON Array to string.
    var json = JSON.stringify(obj);

    //Convert JSON string to BLOB.
    json = [json];
    var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

    var url = window.URL || window.webkitURL;
    link = url.createObjectURL(blob1);
    var a = document.createElement("a");
    a.download = "product.json";
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);    
}