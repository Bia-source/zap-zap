import { v4 as uuidv4 } from 'uuid';

export class User{
    constructor(username, phone){
        this.id = uuidv4();
        this.username = username;
        this.phone = phone;
        this.statusOn = false;
        this.created_at = new Date();
    }

    changeOn(){
        this.statusOn = !this.statusOn;
    }
}