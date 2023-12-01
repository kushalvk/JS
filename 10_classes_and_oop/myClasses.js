class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPasseord(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("kushal", "kushal@gmail.com", "123")
console.log(chai.encryptPasseord());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
}
User.prototype.encryptPasseord = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("vk", "vk@gmail.com", "123")
console.log(tea.encryptPasseord());
console.log(tea.changeUsername());