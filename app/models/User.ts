class ProfileModel{
    id :string;
    name : string;
    accountEmail: string;
    bookInProgress : string;
    favoriteGenre : string;
    favoriteAuthor : string;
    readedBooks : string[];
    library : string[];

    constructor(id : string, name : string, accountEmail : string, bookInProgress : string, favoriteGenre : string, favoriteAuthor : string, readedBooks : string[],library : string[]) {
        this.id = id;
        this.name = name;
        this.accountEmail = accountEmail;
        this.bookInProgress = bookInProgress;
        this.favoriteGenre = favoriteGenre;
        this.favoriteAuthor = favoriteAuthor;
        this.readedBooks = readedBooks;
        this.library = library;
      }
  }

export {ProfileModel};