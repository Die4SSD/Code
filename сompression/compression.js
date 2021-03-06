function compress(string)
{
const obj ={}
string.split("").forEach(el => obj[el] = (obj[el] || 0) + 1)
return Object.entries(obj).flat().filter(el => el !== 1).join("").toString()
}
const uncompress = (string) => {
const mass = string.split("")
const multiplicate = (letter, count = 1) => {
let result = ""
for (let i = 0; i < count; i ++) result += letter
return result
}
mass.reduce((acc, el, i, arr) => {
if (acc !== el) arr.splice( i - 1, 1, multiplicate(acc, el) )
if (i === arr.length - 1) arr.splice(-1, 1)
return el
})
return mass.join("")
}
console.log( compress('ttttttffffff'));
console.log(uncompress('a3b5'))