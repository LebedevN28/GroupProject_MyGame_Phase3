'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notes = [
      {
        title: "100",
        content: "Кратко опишите, что такое React.",
        answer: "Библиотека для создания интерфейсов.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как создать компонент в React?",
        content: "Как создать функциональный компонент в React?",
        answer: "Используйте функцию или класс.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как обновить состояние в React?",
        content: "Как обновить состояние компонента в React?",
        answer: "Используйте setState или useState.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Что такое props в React?",
        content: "Объясните, что такое props в React.",
        answer: "Данные, передаваемые компонентам.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как работает useEffect?",
        content: "Объясните, как работает хук useEffect.",
        answer: "Выполняет побочные эффекты.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Что такое React Context?",
        content: "Объясните, что такое React Context.",
        answer: "Глобальный стейт для компонентов.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как передать данные между компонентами?",
        content: "Как передать данные от родительского к дочернему компоненту?",
        answer: "Через props.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Что такое React Router?",
        content: "Объясните, что такое React Router.",
        answer: "Библиотека для маршрутизации.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как использовать useState?",
        content: "Как использовать хук useState в React?",
        answer: "Для управления состоянием.",
        notebookId: 1,
        userId: 1
      },
      {
        title: "Как добавить стили в React?",
        content: "Как добавить стили в компонент React?",
        answer: "Через CSS или styled-components.",
        notebookId: 1,
        userId: 1
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
