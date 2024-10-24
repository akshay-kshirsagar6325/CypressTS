


//1st data
let  text = '{ "employees" : [' +
'{"firstName":"John", "lastname":"Doe"},'+
'{"firstName":"Anna", "lastname":"Smith"},'+
'{"firstName":"Peter", "lastname":"Jones"} ]}';

    
let jobj=JSON.parse(text)
console.log(jobj.employees[1].firstName+"  "+jobj.employees[1].lastname);
console.log(jobj.employees[2].firstName+"  "+jobj.employees[2].lastname);



//2nd data

let data ='{"name":"John", "age":30, "address": {"streetaddress": "88 8nd street", "city": "New York"}, "phonenumber": [{"type": "home","number": "999 999-9999"}, {"type":"fax","number": "777 777-7777"}]}'

//different ways to access json data
let obj=JSON.parse(data)

console.log(obj["name"]);
console.log(obj.name);

console.log(obj["address"].streetaddress);
console.log(obj.address.streetaddress);

console.log(obj.phonenumber[0].type+"  "+obj.phonenumber[0].number);








