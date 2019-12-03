
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stasiuns', function(t){
    t.increments('id').unsigned().primary();
    t.string('nama_stasiun').nullable();
    t.integer('wmoid').notNull();
    t.string('name').notNull();
    t.integer('region_id').notNull();
    t.dateTime('createdAt').nullable();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stasiuns');  
};
