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