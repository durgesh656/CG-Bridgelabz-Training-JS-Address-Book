const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");


const myAddressBook = new AddressBook();
try {
    myAddressBook.addContact({firstName:"Durgesh", lastName:"Kushwaha", address:"bhopal chowk" , city:"Bhopal", state:"Madhya Pradesh", zip:"462038", phone:"9131733980", email:"durgesh123@gmail.com"});
    myAddressBook.addContact({firstName:"Bipin", lastName:"Sahu", address:"Mumbai chowk" , city:"Bhopal", state:"Uttar Pradesh", zip:"462038", phone:"1234567890", email:"bipin123@gmail.com"});
    myAddressBook.addContact({firstName:"Yash", lastName:"Rathod", address:"Pune Street", city:"Pune", state:"Pune", zip:"122346", phone:"9876543210", email:"yash123@gmail.com"});

    

    // Sort contacts alphabetically by name
    console.log("Original Entries: ");
    myAddressBook.getContact().forEach(contact =>{
        console.log(contact);
    })

    
    console.log("Entries after sorting by city:");
    myAddressBook.sortByCity();
    myAddressBook.getContact().forEach(contact =>{
        console.log(contact);
    }) 

    console.log("Entries after sorting by name:");
    
    const sortedContacts = myAddressBook.sortContactsByName();
    sortedContacts.forEach(contact => console.log(contact));

    console.log("Total Number of contacts: "+myAddressBook.getContactCount());
    console.log(myAddressBook.countByCity());

    console.log(myAddressBook.searchByCity("Bhopal"));
    console.log(myAddressBook.searchByState("Madhya Pradesh"));
    
} catch (error) {
    console.log(error);
    
}