module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert(
    'Post', 
    [
      {
        userId: 1,
        title: "hispotan de nu",
        content: "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        createdAt:newDate(),
        updatedAt:newDate()
      },
      {
        userId: 2,
        title: 'some dummy title',
        content: "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        createdAt:newDate(),
        updatedAt:newDate()
      }
    ], {}),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
