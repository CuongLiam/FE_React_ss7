abstract class Account{
    id : string;
    userName : string;
    private password : string;  
    isLogin : boolean;
    role : string;

    constructor(id : string, userName : string, password : string, isLogin : boolean, role : string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    abstract login() : void;

    getPassword(){
        return this.password;
    }
    logOut(){
        if(this.isLogin == true){
            this.isLogin = false;
            console.log("Logout thanh cong");
        }
    }
}

class UserAcc extends Account{
    status : string;

    constructor(id : string, userName : string, password : string, isLogin : boolean, role : string, status : string){
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    //override 
    login(){
        if(this.status === "active"){
            this.isLogin = true;
            console.log("Login thanh cong");
        } else{
            console.log("Tai khoan bi khoa");
        }
    }
}

let userAcc1 = new UserAcc("123456789", "Nguyen Van A", "123456", false, "user", "active");
console.log(userAcc1.isLogin);
userAcc1.login();
console.log(userAcc1.isLogin);

userAcc1.logOut();
console.log(userAcc1.isLogin);