class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){ // can not aeccess by user (only on programming)
        return '123'
    }
}

const kushal = new User("kushal")
// console.log(kushal.createID());


class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createID()); // not access