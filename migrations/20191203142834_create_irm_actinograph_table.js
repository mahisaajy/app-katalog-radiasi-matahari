
exports.up = function(knex, Promise) {
  return knex.schema.createTable('irm_actinograph', function(t){
    t.increments('id').unsigned().primary();
    t.integer('id_stasiun');
    t.date('tgl').nullable();
    t.decimal('jr05_06', 6, 2).nullable();
    t.decimal('jr06_07', 6, 2).nullable();
    t.decimal('jr07_08', 6, 2).nullable();
    t.decimal('jr08_09', 6, 2).nullable();
    t.decimal('jr09_10', 6, 2).nullable();
    t.decimal('jr10_11', 6, 2).nullable();
    t.decimal('jr11_12', 6, 2).nullable();
    t.decimal('jr12_13', 6, 2).nullable();
    t.decimal('jr13_14', 6, 2).nullable();
    t.decimal('jr14_15', 6, 2).nullable();
    t.decimal('jr15_16', 6, 2).nullable();
    t.decimal('jr16_17', 6, 2).nullable();
    t.decimal('jr17_18', 6, 2).nullable();
    t.decimal('jr18_19', 6, 2).nullable();
    t.decimal('jr19_20', 6, 2).nullable();
    t.decimal('sum_radiasi_kal_per_cm2', 6, 2).nullable();
    
    t.dateTime('created_at').nullable();
    t.dateTime('updated_at').nullable();
    t.dateTime('deleted_at').nullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('irm_actinograph');
};
