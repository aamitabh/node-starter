import * as uuid from 'uuid'

export class Entity {
    readonly id: string

    constructor(id?: string) {
        this.id = (id) ? id : uuid.v1()
    }
}