
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
    t.increments('id').unsigned().primary();
    t.string('nama_user').nullable();
    t.string('password').notNull();
    t.dateTime('createdAt').nullable();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
