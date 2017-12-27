export class UserService{

  private users: User[] = [
    {firstName : 'Mahdi', lastName : 'Maiche', email :'ammaiche@gmail.com',  password :'Akwa222222', currentProject:'Z-Cra'},
    {firstName : 'Belkacem', lastName : 'Rebouh', email :'rebbouh@gmail.com',  password :'123456', currentProject:'Z-cra2'}
  ];

 addUser(user : User) : void{

   this.users.push(user);
 }

 getUser(email: string): User {

   this.users.forEach((user: User) =>{

     if(user.email === email) return user;
   });
   return null;
 }

}
