function vaporcode(tekst){
    let ali = tekst.split(' ').join('')
    return ali.split('').join(' ').toUpperCase()
}
const text = 'salom sho"x alik'

console.log(vaporcode(text));

