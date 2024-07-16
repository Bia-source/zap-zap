import { v4 as uuidv4 } from 'uuid';

export class Messages{
    constructor(user_receiver_id, user_sender_id, body){
        this.id = uuidv4();
        this.user_receiver_id = user_receiver_id;
        this.user_sender_id = user_sender_id;
        this.body = body;
        this.favorite = false;
        this.created_at = new Date()
    }

    changeFavorite(){
        this.favorite = !this.favorite;
    }
}