const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");


const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact("Durgesh", "Kushwaha", "Bhopal", "Madhya Pradesh", 462038, 9131733980, "durgesh123@gmail.com");
    myAddressBook.addContact(contact1);
    console.log(myAddressBook.getContact);
} catch (error) {

}