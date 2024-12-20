'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notebooks = [
      {
        name: 'Work Notes',
        userId: 1, // Связь с пользователем John Doe
      },
      {
        name: 'Personal Notes',
        userId: 2, // Связь с пользователем Jane Doe
      },
    ].map((notebook) => ({
      ...notebook,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Notebooks', notebooks, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notebooks', null, {});
  },
};
