// date, genre, actors, name, affiche, synopsis, age, cote
class Movie {
  constructor(id, name, description, genre, actors) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.actors = actors;
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
  constructor(id, name) {
    this.id = id;
    this.name = name;
 }
}

module.exports = { Movie, Actor };