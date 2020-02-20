
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
    t.increments('id').unsigned().primary();
    t.string('username').notNull();
    t.string('nama_user').nullable();
    t.string('password').notNull();
    t.dateTime('created_at').nullable();
    t.dateTime('updated_at').nullable();
    t.dateTime('deleted_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
