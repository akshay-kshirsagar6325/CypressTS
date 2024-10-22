import UserService from '../apiHelpers/apis';







let random=Math.random().toString(36).substring(2);

let useremail="akshay"+random+"@gmail.com";
let username="akshay"+random;
let userage=random;

// localStorage.setItem('user_email', useremail);
// localStorage.setItem('user_name', username);

describe('User API Tests', () => {
    it('should create a new user', () => {
      const newUser = {
        name: username,
        email: useremail,
        age: userage,
      };
  
      UserService.createUser(newUser).then((response) => {
        expect(response.status).to.eq(201); // Check for successful creation
        expect(response.body).to.include(newUser); // Check if response contains the new user data
      });
    });
  });