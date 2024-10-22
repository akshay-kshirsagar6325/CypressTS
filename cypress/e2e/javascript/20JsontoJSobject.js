
let  text = '{ "employees" : [' +
'{"firstName":"John", "lastname":"Doe"},'+
'{"firstName":"Anna", "lastname":"Smith"},'+
'{"firstName":"Peter", "lastname":"Jones"} ]}';

    
let jobj=JSON.parse(text)
console.log(jobj.employees[1].firstName+"  "+jobj.employees[1].lastname);







