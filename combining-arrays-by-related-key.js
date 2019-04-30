const boys = [{ id: '1', name: 'andy', foreignId: '10' }, { id: '2', name: 'bob', foreignId: '6' }, { id: '3', name: 'chuck', foreignId: '7' }, { id: '4', name: 'david', foreignId: '8' }, { id: '5', name: 'ethan', foreignId: '9' }]
const girls = [{ id: '10', name: 'annie', likes: 123 }, { id: '6', name: 'barbie', likes: 10 }, { id: '7', name: 'charlie', likes: 8 }, { id: '8', name: 'debbie', likes: 322 }, { id: '9', name: 'elaine', likes: 22 }]

const mergeByForeignKey = (boys, girls) => {
  let combined = [];
  boys.forEach((boy, boy_index) => {
    girls.forEach((girl, girl_index) => (boy.foreignId === girl.id)
      ? combined.push(Object.assign({}, boy, { match: { name: girl.name, id: girl.id, likes: girl.likes } }))
      : false)
  })
  return combined;
}
const sortByLikes = arr => arr.sort((a, b) => b.match.likes > a.match.likes);
const sortByName = arr => arr.sort((a, b) => b.name > a.name);

const pipe = (...args) =>
  (value) =>
    args.reduce(
      (a, b) => b(a),
      value
    )

const matches = pipe(
  sortByName,
  sortByLikes
)(mergeByForeignKey(boys, girls))


document.getElementById('app').innerHTML = `<pre>${JSON.stringify(matches, null, 2)}</pre>`; 
