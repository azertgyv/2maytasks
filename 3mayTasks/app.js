// function User(name, age, nick) {
//     this.name = name
//     this.age = age
//     this.nick = nick
//     this.doing = () => {
//         console.log(`${name}is coding...`)
//     }
// }
// const ali = new User('ali', 9, 'alion')

const emojis = '';

// let name1 = prompt('Adini daxil edin: ')
// let name2 = prompt('Soyadinizi daxil edin: ')

// let a = name1.concat(' '.concat(name2))

// alert(a)


// const cumle = "bu cumlede gizli soz var."
// const cumle2 = "bu cumlede hersey aciqdir"

// const isHidden = (sentence) => sentence.includes("gizli")

// console.log(isHidden)


// const fixClassName = (Green) => Green.replaceAll(' ','_')

// // fixClassName("green btn")
// console.log(fixClassName("green btn button"))
// -----------------------------------------------------------------------------------------------------------
// TASK1

// const repeatedSymbolCounter = (name, str) => {
//     let count = 0
//     for (let i = 0; i < name.length; i++) if (name[i] === str) count++
//     return count
// }
// console.log(repeatedSymbolCounter('ALIONALI', 'A'))


// function User(name, age, nick){
//     this.name = name
//     this.age = age
//     this.nick = nick
//     this.doing = () => {
//         console.log(`${name} is coding...`)
//     }
// }

// const azer = new User('Azer', 25, 'Aziko')
// const tariyel = new User('Tariyel', 26,'Taro')

// console.log(azer)

// TASK 2

// function capitalize(str) {
//     if (typeof str !== 'string') {
//       return '';
//     }

//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }


//   console.log(capitalize('alion')); 


// TASK 3

// function snakeToKebab(str) {
//     if (typeof str !== 'string') {
//       return '';
//     }

//     return str.toLowerCase().replace('_', '-');
//   }


//   console.log(snakeToKebab('BU_TEST_UCUNDUR')); 
//   console.log(snakeToKebab('bu_test_ucundur')); 


// TASK 4

// function nameFormat(str) {
//     if (typeof str !== 'string') {
//       return '';
//     }

//     const nameArray = str.split(' ');

//     if (nameArray.length < 2) {
//       return nameArray[0];
//     }

//     const firstName = nameArray[0];
//     const lastName = nameArray[nameArray.length - 1];

//     return firstName + ' ' + lastName.charAt(0) + '.';
//   }

//   console.log(nameFormat('Alion GreenHeart')); 

// TASK 5


// var birthday = new Date("01/01/2000");


// var now = new Date();


// var diff = now.getTime() - birthday.getTime();

// var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
// diff -= years * (1000 * 60 * 60 * 24 * 365.25);

// var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
// diff -= months * (1000 * 60 * 60 * 24 * 30.44);

// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// diff -= days * (1000 * 60 * 60 * 24);

// var hours = Math.floor(diff / (1000 * 60 * 60));
// diff -= hours * (1000 * 60 * 60);

// var minutes = Math.floor(diff / (1000 * 60));
// diff -= minutes * (1000 * 60);

// var seconds = Math.floor(diff / 1000);


// console.log("Yaş: " + years + " yıl, " + months + " ay, " + days + " gün, " + hours + " saat, " + minutes + " dakika, " + seconds + " saniye");

// const months = {
//     0: 'january',
//     1: 'february',
//     2: 'mart',
//     3: 'april',
//     4: 'may',
//     5: 'jun',
//     6: 'julay',
//     7: 'augst',
//     8: 'september',
//     9: 'octomber',
//     10: 'november',
//     11: 'december'
// }

// const date = new Date();
// const month = date.getMonth();

// console.log(month)

// -------------------------------------=--------------=------------=------------------------

// const isCompany = (str) => str.toLowerCase().endsWith('mmc')

// console.log(isCompany('Aalion mmc'))
// console.log(isCompany('alion MMC'))
// console.log(isCompany('alion product'))
// console.log(isCompany('alion Mmc'))
// console.log(isCompany('alion mMc'))
// console.log(isCompany('alion mmC'))


// const emj = '👩👨🧑👧👦🧒👶👵👴🧓👩‍🦰👨‍🦰👩‍🦱👨‍🦱👩‍🦲👨‍🦲👩‍🦳👨‍🦳👱‍♀️👱‍♂️👸🤴👳‍♀️👳‍♂️👲🧔👼🤶🎅'

// const randomIndex = Math.floor(Math.random() * emj.length)
// console.log(emj[randomIndex])
