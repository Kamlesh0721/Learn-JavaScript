let s1 = "Kamlesh"
console.log(s1)

let s2 = new String("Kamlesh") // Object
console.log(s2)

let s3 = "Kamlesh"
console.log(s3)

console.log(s1 === s2)
console.log(s1 === s3)


console.log(typeof (s1))
console.log(typeof (s2))
console.log(typeof (s3))

// String Concatination

let name = "Kamlesh"
let repoCount = 5

console.log("My name is " + name + " and my repo count is " + repoCount) // Not recommended because it is difficult to read
console.log(`My name is ${name} and my repo count is ${repoCount}`)

// String method

// let gameName = 'valorant'
let gameName = new String('valorant')

console.log(gameName[3])
console.log(gameName.__proto__)

console.log(gameName)
console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('r'))

console.log(gameName.substring(0, 4))
console.log(gameName.slice(0, 4))
console.log(gameName.substring(-8, 4))
console.log(gameName.slice(-8, 4))

let Name = "    Kamlesh Singh     "
console.log(Name)
console.log(Name.trim())

let url = "kamleshsingh0198atgmaildotcom"
console.log(url)
console.log(url.replace('at', '@'))
console.log(url.replace('dot', '.'))
console.log(url)

console.log(url.includes('kamleshsingh'))






