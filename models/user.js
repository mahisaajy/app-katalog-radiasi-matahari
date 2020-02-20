module.exports = function(sequelize, Sequelize) {
 
  var User = sequelize.define('user', {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      // firstname: {
      //     type: Sequelize.STRING,
      //     notEmpty: true
      // },

      // lastname: {
      //     type: Sequelize.STRING,
      //     notEmpty: true
      // },

      username: {
          type: Sequelize.TEXT
      },

      nama_user: {
        type: Sequelize.TEXT
      },

      // about: {
      //     type: Sequelize.TEXT
      // },

      // email: {
      //     type: Sequelize.STRING,
      //     validate: {
      //         isEmail: true
      //     }
      // },

      password: {
          type: Sequelize.STRING,
          allowNull: false
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
      

      // last_login: {
      //     type: Sequelize.DATE
      // },

      // status: {
      //     type: Sequelize.ENUM('active', 'inactive'),
      //     defaultValue: 'active'
      // }


  }, {
    timestamps: false
  });

  return User;

}