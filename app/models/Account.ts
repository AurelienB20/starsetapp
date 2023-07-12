class AccountModel{
    firstname : string;
    lastName : string; 
    dateOfBirth : string;
    email : string;
    password : string;
    telephone: string;
    users : string[];

    constructor(firstname : string,lastname :string, dateOfBirth : string,password : string, email : string,telephone : string, users : string[]){
        this.email = email;
        this.firstname= firstname;
        this.lastName=lastname;
        this.dateOfBirth= dateOfBirth;
        this.password = password;
        this.telephone = telephone;
        this.users = users;
    }
  }

export {AccountModel};