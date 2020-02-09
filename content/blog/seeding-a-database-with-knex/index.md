---
title: Seeding a Database with Knex
date: "2018-02-05T23:46:37.121Z"
description: "How to use Knex.js to migrate and seed a database."
emoji: "🌱"
---

I was looking for a way to put data in my database. I wanted something that was
organized and simple like a Rails migration, but also agreed with Node. To my
suprise, NPM didn’t have many of packages to choose from. I considered
Serialize, but wound up using [Knex](http://knexjs.org/) which made migrations a
piece of cake.

We’ll be seeding a database in this post, but Knex is a fully functioning query
builder. It handles migrations and schema changes with elegance. If you want to
give it a spin you can try out some queries. Otherwise, let’s get started.

## Setting Up Knex

Open your command line application. Once you’ve cd’d into your project install
Knex by running the following:

``` bash
npm install knex --save
```

Now that knex is installed we’re ready to generate a template knexfile.js by running:

``` bash
knex init
```

This command creates a knexfile.js in your project. All your database
configurations are housed in this file. There are different blocks for your
development, staging and production configs which reduces some environment
complexities. You’ll probably want to use environment variables if you plan on
pushing this to production. Otherwise, you’ll be fine just hardcoding your
connection data. Below you can see how mine looks.

## Configuring Knex
``` js
module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/your_database'
  },
  production: {
    client: 'postgresql',
    connection: {
      host: 'your_host’,
      database: ’your_database_name’,
      user: ‘your_database_user’',
      password: 'your_database_password’
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
```

## Creating a Table Migration

Once you’ve added your database config values we can create our first migration.
Let’s run a command to create a table. In this example, we will set up a users
table. Run the following from the command line.

``` bash
knex migrate:make create_users_table
```

You should see a new folder called migrations. Inside this folder you’ll have a
file named `create_users_table`. We’ll specify our columns in this file shortly.
But first I’d like to point out the long number at the beginning of the file
name. In short, this number allows the files to be run in the order they were
generated, which prevents nasty foreign key errors. Yay!

Let’s take a look inside the new `create_users_table` file we generated. You’ll
notice an exports up and exports down. The exports up will hold the code that
creates the table and the exports down will house the code that deletes the
table. Now let’s write some code inside these sections.

``` js
exports.up = function (knex, Promise) {
return Promise.all([
  knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable().primary()
    table.boolean('active')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('email').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
])
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
```

### Running Our Table Migration

It’s important to note that code to generate our users table is javascript, but
will be interpreted as SQL when we run the migration. In my opinion JS is easier
to read than a straight SQL migration. Especially since Knex allows us to use
methods like notNullable() and defaultTo() and unique(). So with these few lines
of JavaScript we can generate or delete our table entirely from the command line.

Now that we have the migration written running it only takes a few keystrokes.
Make sure your database is started and run the following command:

``` bash
knex migrate:latest
```

### Creating Our Seed File

``` bash
knex seed:make add_users
```

This will give us a file sort of similar to the first one we generated. Instead
of an exports up and down, this file will just contain a seed export. Let’s move
on and write some code to make our users.


``` js
exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        active: true,
        created_at: knex.fn.now(),
        email: bugsbunnyboi@example.com',
        first_name: 'Bugs',
        last_name: 'Bunny',
        updated_at: knex.fn.now()
      },
      {
        active: true,
        created_at: knex.fn.now(),
        email: 'yosemitesammy@example.com',
        first_name: 'Yosemite',
        last_name: 'Sam',
        updated_at: knex.fn.now()
      },
      {
        active: true,
        created_at: knex.fn.now(),
        email: 'marvinthemarty@example.com',
        first_name: 'Marvin',
        last_name: 'Martian',
        updated_at: knex.fn.now()
      },
    ])
  })
}
```

### Running Our Seed File

This code will insert three users to our database. Let’s try it out by doing:

``` bash
knex seed:run
```

### We Seeded Our DB with Knex

If all goes as planned we should have three new users 🎉. As you can see, Knex
is designed to keep migrations tidy. In turn this simplifies schema changes and
eliminates foreign key conflicts. All in all that means more time to code features.


