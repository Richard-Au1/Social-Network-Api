//importing other files
const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];
    const username = 'asdf'
    const email = 'asdf@yahoo.com'
    const thoughts = ['']
    const friends = ['bob', '654c2bb0e2453c45ded1eef1']

    users.push({
        username,
        email,
        thoughts,
        friends,
    });

    await User.collection.insertMany(users);

    const thoughtText = 'what is that';
    const createdAt = '12/24/2022';
    const reactions = ['shocked']


    await Thought.collection.insertOne({
        thoughtText,
        createdAt,
        username,
        reactions: [...reactions],
    });

    console.table(users);
    console.table(thoughts)
    console.info('Seeding complete!');
    process.exit(0);

});