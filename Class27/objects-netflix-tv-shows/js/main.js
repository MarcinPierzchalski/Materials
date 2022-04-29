//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix{
    constructor(title, genre, rating, age){
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.age = age;
    }
    playIt(){
        alert('play that!!')
    }
    getTitle(){
        return this.title;
    }
    getGenre(){
        return this.genre;
    }
}

let ozark = new Netflix('Ozark', 'Comedy', 'PG-13', '16+');
let lupin = new Netflix('Lupin', 'Action', 'R', '16+');