
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stasiuns', function(t){
    t.increments('id').unsigned().primary();
    t.string('nama_stasiun').nullable();
    t.string('wmoid').nullable();
    t.string('type_mkg').nullable();
    t.decimal('latitude', 10, 8).nullable();
    t.decimal('longitude', 11, 8).nullable();
    t.integer('elevation_m').nullable();
    t.integer('region_id').notNull();
    t.string('nama_kabupaten').nullable();
    t.string('nama_propinsi').nullable();
    t.dateTime('created_at').nullable();
    t.dateTime('updated_at').nullable();
    t.dateTime('deleted_at').nullable();

    t.index(['wmoid', 'region_id'], 'index_stasiun');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stasiuns');  
};
