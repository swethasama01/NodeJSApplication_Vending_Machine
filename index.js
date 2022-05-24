const express = require('express');
const path = require('path');
const app = express();
const products = [{
    name: "Fizz",
    cost: 1,
    qty : 100
}, {
    name: "Cola",
    cost: 1,
    qty : 200
}, {
    name: "Mega Pop",
    cost: 1,
    qty : 50
}];
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.get('/api/products', (req, res) => {
    //res.send('Hello World');
    res.json(products);
})

app.get('/api/products/:name', (req, res) => {
    //res.send(req.params.qty);
    const found = products.some(product => product.name === req.params.name);
    if (found) {
        res.json(products.filter(product => product.name === req.params.name));
    } else {
        res.status(400).json({msg:`No data found for product ${req.params.name}`});
    }
})

app.put('/api/products/:name', (req, res) => {
    //res.send(req.params.qty);
    const found = products.some(product => product.name === req.params.name);
    if (found) {
        const updProduct = req.body;
        products.forEach(product => {
            if (product.name === req.params.name) {
                const val = req.body.name;
                //product.name = updProduct.name ? updProduct.name : product.name;
                product.cost = updProduct.cost ? updProduct.cost : product.cost;
                product.qty = updProduct.qty ? updProduct.qty : product.qty;  
                //product.name = "ss";
                //product.cost = 2;
                res.json({ msg: 'product updated', product});
            }
        });
    } else {
        res.status(400).json({ msg: `No data found for product ${req.params.name}` });
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));