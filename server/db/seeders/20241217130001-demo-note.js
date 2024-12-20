'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notes = [
      {
        title: 'Название темы',
        content: 'Discussed project requirements and deadlines.',
        notebookId: 1, // Связь с блокнотом "Work Notes"
        userId: 1, // Связь с пользователем John Doe
      },
      {
        title: '500',
        content: 'Вопрос',
        notebookId: 2, // Связь с блокнотом "Personal Notes"
        userId: 2, // Связь с пользователем Jane Doe
      },
      {
        title: '1000',
        content: 'Discussed API integration and next steps.',
        notebookId: 1, // Связь с блокнотом "Work Notes"
        userId: 1, // Связь с пользователем John Doe
      },
    ].map((note) => ({
      ...note,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Notes', notes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
  },
};
