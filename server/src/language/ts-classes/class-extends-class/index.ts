import {Attendee} from './Attendee'

let amitabh = new Attendee({firstName: 'Amitabh', lastName: 'Arora'})
console.log(amitabh.fullName())
let ishika = new Attendee({firstName: 'Ishika', middleName: 'Kumari', lastName: 'Arora'})
console.log(ishika.fullName())