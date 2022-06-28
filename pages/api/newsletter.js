import { MongoClient } from 'mongodb';

async function handler(req,res) {
    if(req.method === 'POST'){
      const userEmail = req.body.email;

      if(!userEmail || !userEmail.includes('@')){
        res.status(422).json({message:'INVALID EMAIL ENTERED'});
        return;
      }

      const client = await MongoClient.connect("mongodb+srv://mani2212:mani2212@cluster0.71uyopk.mongodb.net/events?retryWrites=true&w=majority");

      const db = client.db();

      await db.collection('newsletter').insertOne({email:userEmail});

      client.close();
      console.log(userEmail);
      res.status(201).json({message:'Signed up !'});
    }
}

export default handler;