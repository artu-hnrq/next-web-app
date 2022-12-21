// Record a given value into DOM root style
// @param {String} property - The custom property name to store value on
// @param {Any} value - The value to be stored
const set = setRootCustomProperty
export default function setRootCustomProperty(property, value){
    document.documentElement.style.setProperty(`--${property}`, String(value))
}
