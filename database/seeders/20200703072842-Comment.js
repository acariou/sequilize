module.exports = {
  up: async (queryInterface, Sequelize) => 
    await queryInterface.bulkInsert(
      'Comment', 
      [
        {
          userId: 1,
          postId: 2,
          comment: "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          createdAt:newDate(),
          updatedAt:newDate()
        },
        {
          userId: 2,
          postId: 1,
          comment: "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    ),

  down: async (queryInterface, Sequelize) => 
    await queryInterface.bulkDelete('Comments', null, {})
  
};
