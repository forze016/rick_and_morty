let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  const existingCharacter = myFavorites.find(c => c.id === character.id);
  if (!existingCharacter) {
    myFavorites.push(character);
  }
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params.id;
  myFavorites = myFavorites.filter(character => character.id !== +id);
  res.json(myFavorites);
};

const getFav = (req, res) => {
  return myFavorites;
};

module.exports = {
  postFav,
  deleteFav
};