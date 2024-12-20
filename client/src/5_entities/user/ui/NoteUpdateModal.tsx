import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../6_shared/lib/hooks';
import { setSelectedNote } from '../../note/model/noteSlice';
import { editNoteThunk } from '../../note/model/noteThunks';

export default function NoteUpdateModal(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const selectedNote = useAppSelector((state) => state.notes.selectedNote);

  // Состояние для управления видимостью модального окна
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  const handleClose = (): void => {
    dispatch(setSelectedNote(null));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await dispatch(
        editNoteThunk({
          id: selectedNote?.id || 0,
          formData,
        }),
      );
      handleClose();
    } catch (error) {
      console.error('Ошибка отправки данных:', error);
    }
  };

  // Обработчик для открытия модального окна игрока
  const handlePlayerClick = () => {
    setShowPlayerModal(true);
  };

  // Обработчик для закрытия модального окна игрока
  const handlePlayerModalClose = () => {
    setShowPlayerModal(false);
  };

  return (
    <>
      {/* Основное модальное окно */}
      <Modal show={!!selectedNote} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Вопрос</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col xs={12}></Col>
              <Col xs={12}>
                <Form.Group
                  className="mb-3"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <Form.Label>Здесь будет сам вопрос</Form.Label>
                </Form.Group>
              </Col>

              <Col xs={12} className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={handlePlayerClick}
                  className="w-50"
                  style={{ margin: '10px' }}
                >
                  Игрок 1<br />
                  имя игрока
                  <br />
                  очки
                </Button>
                <Button
                  variant="primary"
                  onClick={handlePlayerClick}
                  className="w-50"
                  style={{ margin: '10px' }}
                >
                  Игрок 2<br />
                  имя игрока
                  <br />
                  очки
                </Button>
                <Button
                  variant="primary"
                  onClick={handlePlayerClick}
                  className="w-50"
                  style={{ margin: '10px' }}
                >
                  Игрок 3<br />
                  имя игрока
                  <br />
                  очки
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Далее
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Модальное окно для игрока */}
      <Modal show={showPlayerModal} onHide={handlePlayerModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Игрок №?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Button
              style={{ backgroundColor: 'SpringGreen', margin: '7px 0px 7px 0px', color: 'black' }}
            >
              ОТВЕТ ВЕРНЫЙ
            </Button>
            <Button
              style={{ backgroundColor: 'LightCoral', margin: '2px 0px 7px 0px', color: 'black' }}
            >
              ОТВЕТ НЕВЕРНЫЙ
            </Button>
            <Button variant="secondary" style={{ marginTop: '70px' }}>
              ПРАВИЛЬНЫЙ ОТВЕТ...
            </Button>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePlayerModalClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Col, Form, Row } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../../6_shared/lib/hooks';
// import { setSelectedNote } from '../../note/model/noteSlice';
// import { editNoteThunk } from '../../note/model/noteThunks';

// export default function NoteUpdateModal(): React.JSX.Element {
//   const dispatch = useAppDispatch();
//   const selectedNote = useAppSelector((state) => state.notes.selectedNote);

//   const handleClose = (): void => {
//     dispatch(setSelectedNote(null));
//   };

//   const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     // if (selectedNote) {
//     //   formData.append('id', String(selectedNote.id));
//     // }

//     try {
//       await dispatch(
//         editNoteThunk({
//           id: selectedNote?.id || 0,
//           formData,
//         }),
//       );
//       handleClose();
//     } catch (error) {
//       console.error('Ошибка отправки данных:', error);
//     }
//   };

//   return (
//     <Modal show={!!selectedNote} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Вопрос</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={submitHandler}>
//           <Row>
//             <Col xs={12}></Col>
//             <Col xs={12}>
//               <Form.Group
//                 className="mb-3"
//                 style={{
//                   textAlign: 'center',
//                 }}
//               >
//                 <Form.Label>Здесь будет сам вопрос</Form.Label>
//               </Form.Group>
//             </Col>

//             <Col xs={12} className="d-flex justify-content-center">
//               <Button variant="primary" type="submit" className="w-50" style={{ margin: '10px' }}>
//                 Игрок 1<br />
//                 имя игрока
//               </Button>
//               <Button variant="primary" type="submit" className="w-50" style={{ margin: '10px' }}>
//                 Игрок 2<br />
//                 имя игрока
//               </Button>
//               <Button variant="primary" type="submit" className="w-50" style={{ margin: '10px' }}>
//                 Игрок 3<br />
//                 имя игрока
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Далее
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Col, Form, Row } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../../6_shared/lib/hooks';
// import { setSelectedNote } from '../../note/model/noteSlice';
// import { editNoteThunk } from '../../note/model/noteThunks';

// export default function NoteUpdateModal(): React.JSX.Element {
//   const dispatch = useAppDispatch();
//   const selectedNote = useAppSelector((state) => state.notes.selectedNote);

//   const handleClose = (): void => {
//     dispatch(setSelectedNote(null));
//   };

//   const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     if (selectedNote) {
//       formData.append('id', String(selectedNote.id));
//     }

//     try {
//       await dispatch(
//         editNoteThunk({
//           id: selectedNote?.id || 0,
//           formData,
//         }),
//       );
//       handleClose();
//     } catch (error) {
//       console.error('Ошибка отправки данных:', error);
//     }
//   };

//   return (
//     <Modal show={!!selectedNote} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Редактировать заметку</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={submitHandler}>
//           <Row>
//             <Col xs={12}>
//               <Form.Group className="mb-3" controlId="formTitle">
//                 <Form.Label>Заголовок</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="title"
//                   defaultValue={selectedNote?.title || ''}
//                   placeholder="Введите заголовок"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12}>
//               <Form.Group className="mb-3" controlId="formContent">
//                 <Form.Label>Содержание</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   name="content"
//                   defaultValue={selectedNote?.content || ''}
//                   placeholder="Введите содержание"
//                   rows={5}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Блокнот</Form.Label>
//                 <Form.Control
//                   name="notebookId"
//                   type="number"
//                   defaultValue={selectedNote?.notebookId || ''}
//                   placeholder="Введите ID блокнота"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} className="d-flex justify-content-center">
//               <Button variant="primary" type="submit" className="w-50">
//                 Сохранить
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Закрыть
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
