class AuthorModel{
    firstname : string;
    lastName : string; 
    image : string;
    description : string;
    books : string[];
    dateOfBirth : Date;
    dateOfDeath : Date;
    placeOfBirth : string;
    placeOfDeath : string;

    constructor(firstname : string,lastname :string,image : string,description : string, books : string[], dateOfBirth : Date, dateOfDeath : Date, placeOfBirth : string, placeOfDeath : string){
      this.image=image;
      this.firstname= firstname;
      this.lastName=lastname;
      this.description= description;
      this.books = books;
      this.dateOfBirth= dateOfBirth;
      this.dateOfDeath = dateOfDeath;
      this.placeOfBirth= placeOfBirth;
      this.placeOfDeath= placeOfDeath;

    }
  
  
  }

export {AuthorModel};