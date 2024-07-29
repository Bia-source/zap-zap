import { v4 as uuidv4 } from 'uuid';

export class Messages{
    constructor(user_receiver_id, user_sender_id, body){
        this.id = uuidv4();
        this.user_receiver_id = user_receiver_id;
        this.user_sender_id = user_sender_id;
        this.body = body;
        this.favorite = false;
        this.created_at = new Date();
        this.updated_at = null;
    }

    changeFavorite(){
        this.favorite = !this.favorite;
    }

    changeBodyMessage(text, idSender){
        // verificando se a pessoa que esta solicitando
        // a edicao da mensagem foi seu criador
        let diference = new Date(new Date() - this.created_at)
        if(idSender === this.user_sender_id && diference.getMinutes() <= 15){
            this.body = text;
            this.updated_at = new Date();
         }else{
            console.log("tempo ultrapassado")
         }
    }

    // criei mensagem 19h30
    // chamei a funcao changeBodyMessage 19:40
    // 40 - 30 = 10 
    // 10 menor ou igual a 15

    // criei mensagem 18h55
    // chamei a funcao changeBodyMessage 19:05
    
}