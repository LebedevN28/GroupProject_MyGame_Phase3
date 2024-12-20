import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../../6_shared/lib/hooks';
import NoteCard from '../../../3_widgets/NoteList/NoteList';
import NoteUpdateModal from '../../../5_entities/user/ui/NoteUpdateModal';
import { getAllNotesThunk } from '../../../5_entities/note/model/noteThunks';

export default function Page(): React.JSX.Element {
  const notes = useAppSelector((store) => store.notes.notes);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((store) => store.auth.data.status);

  // Загружаем заметки при смене пользователя
  useEffect(() => {
    if (userId) {
      dispatch(getAllNotesThunk());
    }
  }, [userId, dispatch]);

  return (
    <Container className="py-4">
      <Row className="g-4" xs={1} md={3}>
        {notes.map((note) => (
          <Col key={note.id} className="d-flex justify-content-center">
            <NoteCard note={note} />
          </Col>
        ))}
      </Row>
      <NoteUpdateModal />
    </Container>
  );
}
