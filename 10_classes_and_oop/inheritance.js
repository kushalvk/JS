class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new teacher("kushal", "kushal@gmail.com", "123")
chai.addCourse()
chai.logMe()
const masalachai = new User("vk")
masalachai.logMe()

console.log(chai === masalachai);
console.log(chai === teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof user); // chai -> teacher -> user