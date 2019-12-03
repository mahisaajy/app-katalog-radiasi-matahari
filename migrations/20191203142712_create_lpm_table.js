
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lpm', function(t){
    t.increments('id').unsigned().primary();
    t.integer('id_stasiun');
    t.date('tgl').nullable();
    t.decimal('p05_06', 5, 1).nullable();
    t.decimal('p06_07', 5, 1).nullable();
    t.decimal('p07_08', 5, 1).nullable();
    t.decimal('p08_09', 5, 1).nullable();
    t.decimal('p09_10', 5, 1).nullable();
    t.decimal('p10_11', 5, 1).nullable();
    t.decimal('p11_12', 5, 1).nullable();
    t.decimal('p12_13', 5, 1).nullable();
    t.decimal('p13_14', 5, 1).nullable();
    t.decimal('p14_15', 5, 1).nullable();
    t.decimal('p15_16', 5, 1).nullable();
    t.decimal('p16_17', 5, 1).nullable();
    t.decimal('p17_18', 5, 1).nullable();
    t.decimal('lpm_p06_p18_jam', 5, 1).nullable();
    t.decimal('lpm_p08_p16_percent', 6, 2).nullable();

    t.dateTime('createdAt').nullable();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lpm');
};
