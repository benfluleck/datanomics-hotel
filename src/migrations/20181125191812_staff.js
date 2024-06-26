exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('staff', (table) => {
      table.uuid('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email').unique();
      table.string('password');
      table
        .integer('roleType')
        .notNullable()
        .defaultTo(1);
      table
        .boolean('isAdmin')
        .notNullable()
        .defaultTo(false);
      table
        .boolean('hasConfirmed')
        .notNullable()
        .defaultTo(false);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('staff')]);
};
