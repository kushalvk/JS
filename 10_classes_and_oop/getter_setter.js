class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get email(){ // if get is defind then set defind campalsary
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){ // if get is defind then set defind campalsary
        return `${this._password}kushal` // abdkushal
    }
    set password(value){
        this._password = value
    }
}

const kushal = new  User("kushal@google.com", "abc")
console.log(kushal.password);
console.log(kushal.email);