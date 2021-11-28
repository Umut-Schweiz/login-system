export default (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
};