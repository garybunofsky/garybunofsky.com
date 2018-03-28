module.exports = `
<h1 class="font-size--7 margin--t-7">Seeding a Database with Knex</h1>

<p>I was looking for a way to put data in my database. I wanted something that was organized and simple like Rake, but also agreed with Node. To my suprise, NPM didn’t have many of packages to choose from. I considered Serialize, but wound up using <%= link_to "Knex", "http://knexjs.org/", :target => "blank" %> which made migrations a piece of cake.</p>

<p>We’ll be seeding a database in this post, but Knex is a fully functioning query builder. It handles migrations and schema changes with elegance. If you want to give it a spin you can <%= link_to "try out some queries", "http://michaelavila.com/knex-querylab/", :target => "blank" %>. Otherwise, let’s get started.</p>

<h3>Set Up Knex</h3>
<p>Open your command line application. Once you’ve cd’d into your project install Knex by running the following:</p>
<pre>npm install knex --save</pre>

<p>Now that knex is installed we’re ready to generate a template knexfile.js by running:</p>
<pre>knex init</pre>

<p>This command creates a knexfile.js in your project. All your database configurations are housed in this file. There are different blocks for your development, staging and production configs which reduces some environment complexities. You’ll probably want to use environment variables if you plan on pushing this to production. Otherwise, you’ll be fine just hardcoding your connection data. Below you can see how mine looks.</p>

<h3>Configuring Knex</h3>
<code>
module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/your_database
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
</code>

<h3>Creating a Table Migration</h3>
<p>Once you’ve added your database config values we can create our first migration. Let’s run a command to create a table. In this example, we will set up a users table. Run the following from the command line.</p>
<pre>knex migrate:make create_users_table</pre>

<p>You should see a new folder called migrations. Inside this folder you’’ll have a file named <em>create_users_table</em>. We’ll specify our columns in this file shortly. But first I’d like to point out the long number at the beginning of the file name. In short, this number allows the files to be run in the order they were generated, which prevents nasty foreign key errors. Yay!</p>

<p>Let’s take a look inside the new create_users_table file we just generated. You’ll notice an exports up and exports down. The exports up will hold the code that creates the table and the exports down will house the code that deletes the table. Now let’s write some code inside these sections.</p>
<code>
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
</code>

<h3>Running Our Table Migration</h3>
<p>It’s important to note that code to generate our users table is javascript, but will be interpreted as SQL when we run the migration. In my opinion JS is easier to read than a straight SQL migration. Especially since Knex allows us to  use methods like notNullable() and defaultTo() and unique(). So with these few lines of JavaScript we can generate or delete our table entirely from the command line.</p>
<p>Now that we have the migration written running it only takes a few keystrokes. Make sure your database is started and run the following command:</p>

<pre>knex migrate:latest</pre>
<p>Your database should now have the users table, with the associated columns inside it. Since our table is set up, we can write a migration to seed the table. Lets create a seed file by running:</p>

<h3>Creating Our Seed File</h3>
<pre>knex seed:make add_users</pre>
<p>This will give us a file sort of similar to the first one we generated. Instead of an exports up and down, this file will just contain a seed export. Let’s move on and write some code to make our users.</p>

<div class="card">
<code>
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
</code>
</div>
<h3>Running Our Seed File</h3>
<p>This code will insert three users to our database. Let’s try it out by doing:</p>
<pre>knex seed:run</pre>

<h3>DB Seeded Successfully</h3>
<p>If all goes as planned we should have three new users 🎉. As you can see, Knex is designed to keep migrations tidy. In turn this simplifies schema changes and eliminates foreign key conflicts. All in all that means more time to code features.</p>
</div>`;
