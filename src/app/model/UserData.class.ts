export class UserData {
    id: number;
    firstName : string;
    lastName : string;
    age : number;
    address : string;
    role : string;
    email : string;
    password : string;
    confirmPassword : string;

    constructor(fisrtName : string, lastName : string,age : number
      ,address : string, role : string, email : string,password : string, confirmPassword : string) {
        this.firstName = fisrtName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.role = role;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

}
