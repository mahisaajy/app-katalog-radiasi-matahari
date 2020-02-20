
exports.up = function(knex, Promise) {
  return knex.schema.createTable('irm_gunbellani', function(t){
    t.increments('id').unsigned().primary();
    t.integer('id_stasiun');
    t.date('tgl').nullable();
    t.decimal('pembacaan_1', 5, 1).nullable();
    t.decimal('pembacaan_2', 5, 1).nullable();
    t.decimal('sum_radiasi_cal_per_cm2', 7, 2).nullable(); // mungkin bisa dibesarkan ukurannya
    t.decimal('sum_radiasi_joule', 10, 4).nullable(); // mungkin bisa dibesarkan ukurannya
    
    t.dateTime('created_at').nullable();
    t.dateTime('updated_at').nullable();
    t.dateTime('deleted_at').nullable();

    t.index(['id_stasiun', 'tgl'], 'index_irm_gb');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('irm_gunbellani');
};
