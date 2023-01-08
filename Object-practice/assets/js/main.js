const user = {
    firstName: 'John',
    lastName: 'Doe',
    login: function(){
        alert(`Hello, ${this.fullName}`)
    },
    logout: function(){
        alert(`Bye, ${this.fullName}`)
    },
    // getFullName: function(){
    //     return this.firstName + ' ' + this.lastName;
    // },
    // setFullName: function(username){
    //     const arrName = username.split(' ');
    //     this.firstName = arrName[0];
    //     this.lastName = arrName[1];
    // },
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(username){
        // const arrName = username.split(' ');
        // this.firstName = arrName[0];
        // this.lastName = arrName[1];
        [this.firstName, this.lastName] = username.split(' ');
    }
};

// user.setFullName('Bob Johnson');
// console.log(user.getFullName);


user.fullName = 'Bob Johnson';
// console.log((user.fullName));

const admin = Object.create(user, {

    isAdmin: {
        value: true,
        writable:false,
        enumerable: true
    }
});

    
    
admin.fullName = 'Karl West';
// console.log((admin.fullName));

for(key in admin){
    if(admin.hasOwnProperty(key)){
        console.log(key);
        

    }
    
}
// user.login();