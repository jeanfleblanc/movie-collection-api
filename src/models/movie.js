// date, genre, actors, name, affiche, synopsis, age, cote
class Movie {
  constructor(id, name, description, genre) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
 }
   
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getGenre() {
    return this.genre;
  }
}

class Actor {

}

module.exports = { Movie, Actor };