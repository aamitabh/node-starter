import { Entity } from './Entity'

export class Attendee extends Entity {
    firstName: string
    middleName: string
    lastName: string

    constructor({ id, firstName, middleName, lastName }
        : { id?: string, firstName: string, middleName?: string, lastName: string }) {
        super(id)
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
    }
    fullName(): string {
        if (this.middleName)
            return `${this.firstName} ${this.middleName}. ${this.lastName}`
        else
            return `${this.firstName} ${this.lastName}`
    }
}