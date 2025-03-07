const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");


const myAddressBook = new AddressBook();
try {
    const contact1 = new Contact("Durgesh", "Kushwaha","bhopal chowk" ,"Bhopal", "Madhya Pradesh", "462038", "9131733980", "durgesh123@gmail.com");
    const contact2 = new Contact("Bipin", "Sahu","Mumbai chowk" ,"Mumbai", "Uttar Pradesh", "462038", "1234567890", "bipin123@gmail.com");

    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);

    //myAddressBook.addContact(contact2);
    //console.log(myAddressBook.searchByCity("Bhopal"));
    // console.log(myAddressBook.searchByState("Madhya Pradesh"));
    
    console.log(myAddressBook.getContactCount());
    console.log(myAddressBook.getContact());
    console.log(myAddressBook.countByCity());
    
} catch (error) {
    console.log(error);
    
}