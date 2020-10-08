# rahul-validate
A small package with 2.11 kb unpacked size to validate basics stuffs.

## Install
```js
npm i rahul-validate
````
## Uses
```js
const rahulValidate = require('rahul-validate');
                    OR
import rahulValidate from "rahul-validate";

if(rahulValidate.isEmail("abc@gmail.com"))
    console.log("Yes");
else console.log("No");
```

## Email
```js
if(rahulValidate.isEmail("abc@gmail.com"))
    console.log("Yes");
else console.log("No");
```
## password
```js
if(rahulValidate.isStrongPassword("Team#2ok.com"))
    console.log("Yes");
else console.log("No");
```

## text
```js
if(rahulValidate.isText("abc"))
    console.log("Yes");
else console.log("No");
```
## Number
```js
if(rahulValidate.isNum("abc"))
    console.log("Yes");
else console.log("No");
```
## Date
```js
// Validate dd/mm/yyyy or dd-mm-yyyy format 
if(rahulValidate.isDate("12-15-2020"))
    console.log("Yes");
else console.log("No");
```
