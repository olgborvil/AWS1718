
var contacts = [
        { "name": "peter", "phone": 12345},
        { "name": "john", "phone": 6789}
    ];
    
    
function printContact(c){
    console.log("%s >> %s",c.name,c.phone);
}

contacts.forEach(printContact);


contacts.forEach((c) => {
    console.log("%s >> %s",c.name,c.phone);
});


/*
function printContacts(contacts){
    if(contacts == null)
        contacts = this.data;
    
    for(var i = 0; i< contacts.length;i++){
        printContact(contacts[i]);   
    }
}

printContacts(contacts);
*/


/*
contacts.data = contacts;
contacts.print = printContacts;

contacts.print();
*/