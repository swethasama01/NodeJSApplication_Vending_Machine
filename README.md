# NodeJSApplication_Vending_Machine
This is a Node JS Application for building Vending Machine with APIs

Important notes:
1. There is a UI which will download a JSON file (product.json) for every successfull beverage purchase with calcualted Amount. The file contains below information 
{"Product_Name":"Mega Pop","Product_Qty":2,"Amount":"$2","msg":"Your order has been places Successfully!"}
3. The script will work with node.js version 16 and above.

Operating Instructions:
open cmd or other command prompt that work with node.js. Have used Visual Studio and the inbuilt powersell terminal to install node modules and test the application.
Postman desktop plugin or any other tool can be used to test REST API calls.

write node index.js to start the script.

Example run:
node index.js

Setup Environment:
1. intall latest node js from https://nodejs.org/en/download/
2. intall supporting applications like visual studio, python etc that came along with the product or can be installed seperately as well.
3. open working folder from visual studio to start building the application.
4. run below commands to install json and express libraries
npm init -y
npm i express

Testing:
1. UI can be tested in http://localhost:5000 after completing above instructions.
2. REST APIS can be tested in Postman.
3. examples:
http://localhost:5000/api/products (GET request)  -- gets available products information
http://localhost:5000/api/products/Fizz (GET ptoduct by Name) -- gets details for a specified product
http://localhost:5000/api/products/Fizz (PUT) -- to update product quantity and cost
Body -- provide information that need to be updated for a given product
{
    "cost":5,
    "qty":120
}
Response with updated product.
{
    "msg": "product updated",
    "product": {
        "name": "Fizz",
        "cost": 5,
        "qty": 120
    }
}
