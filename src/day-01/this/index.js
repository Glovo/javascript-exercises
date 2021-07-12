// Give me this and that
function giveMeThis() {
    return this;
}

const giveMeThat = () => {
    return this;
}


// What is this?
var companyName = 'Gorillas'
const obj = {
    companyName: 'Uber eats',
    values: {
        companyName: 'Glovo',
        getCompanyName: function() {
            return this.companyName
        }
    }
}

console.log(obj.values.getCompanyName())

const test = obj.values.getCompanyName

console.log(test())
