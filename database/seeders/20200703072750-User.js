module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert(
    'User', 
    [
      {
       name: 'Jane Doe',
       email: 'janedoe@example.com',
       createdAt: newDate(),
       updatedAt: newDate(),
      },
      {
        name: 'Jon Doe',
        email: 'jondoe@example.com',
        createdAt: newDate(),
        updatedAt: newDate(),
      }
    ], 
    {}
  ),

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('User', null, {};
};
