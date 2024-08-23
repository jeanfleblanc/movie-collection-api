// date, genre, actors, name, affiche, synopsis, age, cote
class Movie {
  constructor(content) {
    this.content = content;
 }
   
  getContent() {
    return this.content;
  }
}

class Metadata {

}

module.exports = { Movie, Metadata };