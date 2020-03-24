class Formatter {
  static capitalize( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize( string ) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize( phrase ) {
    let xclsnWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let evalPhrase = phrase.split(" ");
    
    return evalPhrase.map((word, i) => {
      if (i == 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
        
      }
      else if (!xclsnWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      else {
        return word
      }
  
    }).join(" ")
  }
}
