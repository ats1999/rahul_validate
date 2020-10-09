/**
 * Verify if the email is correct or not.
 * @param {String} email email to be verified
 */
function isEmail(email){
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        return true;
    return false;
}

/**
 * Verify if argument contains only text.
 * @param {String} text text to be verified
 */
function isText(text){
    if(/^[A-Za-z]+$/.test(text))
        return true;
    return false;
}

/**
 * Verify if argument consist of only numbers.
 * @param {Number} num 
 */
function isNum(num){
    if(/^[0-9]+$/.test(num))
        return true;
    return false;
}

/**
 * Verify if input is a valid date.
 * Validate dd/mm/yyyy or dd-mm-yyyy format
 * @param {Date} date 
 */
function isDate(date){
    if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date))
        return true;
    return false;
}
/**
 * To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
 * @param {String} pass 
 */
function isStrongPassword(pass){
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass))
        return true;
    return false;
}
const validate = {
    isEmail:isEmail,
    isStrongPassword:isStrongPassword,
    isDate:isDate,
    isNum:isNum,
    isText:isText
}
module.exports = validate