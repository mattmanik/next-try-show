import {MongoClient} from "mongodb";

async function handler(req,res) {

    const eventId = req.query.eventId;
    const client = await MongoClient.connect("mongodb+srv://mani2212:mani2212@cluster0.71uyopk.mongodb.net/events?retryWrites=true&w=majority")
    if(req.method==='POST'){

    const {email,name,text } = req.body; 

    if(!email || !name || !text) {
        res.status(422).json({
            message: 'Invalid input'
        });
        return;
    }
    const newComment = {
         email,
          name,
          text,
        eventId
        };



    const db = client.db();
     const result = await db.collection('comments').insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(201).json({
        message:'Added comment',
        comment: newComment
    });
    }

    if(req.method==='GET'){

        const db = client.db();

        const docs = await db
        .collection('comments')
        .find()
        .sort({ _id: -1 })
        .toArray();
        
    res.status(200).json({comments:docs});
    }
    client.close();

}

export default handler;