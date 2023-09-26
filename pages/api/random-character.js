import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const randomCharacter = {
    name: chance.name(),
    email: chance.email(),
    age: chance.age(),
    gender: chance.gender(),
  };

  res.status(200).json(randomCharacter);
}
