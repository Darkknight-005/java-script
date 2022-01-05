// this is the way of writing json

let superHeroes = {                                 // this one 1
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [                                //this two 2
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [                         //this one 1
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]                               //this one 1
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [                 //this two 2
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]                       // this two 2 
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [         //this three 3
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]           // this three 3
      }
    ]         //this two 2
  }         //this one 1

//   how to access these
superHeroes.members[0]
superHeroes.member[0]["powers"][0]  
// or
superHeroes.members[0].powers[0]

/* --***********************when you will understand the above then comment-out the given code because the below code will oover write the above code */

// // this is array json format

// superHeroes = [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": [
//         "Radiation resistance",
//         "Turning tiny",
//         "Radiation blast"
//       ]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers": [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes"
//       ]
//     }
//   ]
  
// //   how to access it 

// superHeroes[0]["powers"];
// superHeroes[0].powers;