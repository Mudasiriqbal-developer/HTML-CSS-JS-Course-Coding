let DATA = "secret Information";

class User {
    constructor(name, email) {
        this.name = name ;
        this.email = email ;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "Some new Value";
    }
}

let std1 = new User("Gulali", "Gulalai@gmail.com");
let std2 = new User("Umar", "Umar@gmail.com");

let tch1 = new User("Mansoor", "Mansoor@gmail.com");

let admin1 = new Admin("Aman", "Aman@gmail.com");