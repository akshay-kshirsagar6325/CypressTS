

class UserService {

    static createUser() {
        return cy.request({
          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users',
          body: 
          {
            "name":{user_name}, 
            "gender":{gender}, 
            "email":{user_email}, 
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }  

  
    static getUserById(userId) {
      return cy.request('GET', `https://gorest.co.in/public/v2/users/${userId}`);
    }
  
    static updateUser(userId, userData) {
        return cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            body: 
            {
              "name":{user_name}, 
              "email":{user_email}, 
            },
            headers: {
              'Content-Type': 'application/json'
            }
          });
    }
  
    static deleteUser(userId) {
      return cy.request('DELETE', `https://gorest.co.in/public/v2/users/${userId}`);
    }
  }
  
  export default UserService;






