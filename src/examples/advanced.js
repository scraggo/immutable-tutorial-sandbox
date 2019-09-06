// // Our existing data
// const state = Immutable.fromJS({
//   actors: {
//     name: "Scarlett Johansson",
//   },
//   heroes: {
//     heroList: [
//       {
//         heroName: "blackWidow",
//         realName: "Natasha Romanoff",
//       },
//     ],
//   },
// });

// // New data to append to the existing heroList
// const heroList = Immutable.fromJS([
//   {
//     heroName: "ironMan",
//     realName: "Tony Stark",
//   },
//   {
//     heroName: "captainAmerica",
//     realName: "Steve Rogers",
//   },
// ]);

// const newList = state.getIn(["heroes", "heroList"]).concat(heroList);
// const newState = state.set("heroes", newList);

// // We want the following output:
// // {"actors":{"name":"Scarlett Johansson"},"heroes" [{"heroName":"blackWidow","realName":"Natasha Romanoff"},{"heroName":"ironMan","realName":"Tony Stark"},{"heroName":"captainAmerica","realName":"Steve Rogers"}]}

// =====

// // Setup our root Map
// const avengers = Immutable.fromJS({
//   heroes: {
//     0: {
//       heroName: 'ironMan',
//       realName: 'Tony Stark'
//     },
//     1:  {
//       heroName: 'captainAmerica',
//       realName: 'Unknown'
//     }
//   },
//   isAssembled: false
// });

// // Here's the newData, which should be used to update our Avengers Map
// const newData = { realName: 'Steve Rogers' };

// avengers.setIn(['heroes', '1'],
//               avengers.getIn(['heroes', '1']).merge(Immutable.fromJS(newData))
//               ).set('isAssembled', true)
