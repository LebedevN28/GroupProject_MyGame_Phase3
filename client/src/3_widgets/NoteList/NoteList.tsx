import React, { useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseIcon from '../../6_shared/ui/CloseIcon';
import { useAppDispatch, useAppSelector } from '../../6_shared/lib/hooks';
import HeartIcon from '../../6_shared/ui/HeartIcon';
import { Spinner } from 'react-bootstrap';
import { NoteType } from '../../5_entities/note/model/types';
import { setSelectedNote, toggleLikeNote } from '../../5_entities/note/model/noteSlice';
import { deleteNoteThunk } from '../../5_entities/note/model/noteThunks';

type NoteCardProps = {
  note: NoteType;
};

export default function NoteCard({ note }: NoteCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  // Проверяем, лайкнута ли заметка
  const isLiked = useAppSelector((store) => !!store.notes.likedNotes.find((n) => n.id === note.id));

  const [loading, transition] = useTransition();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>

        {/* Кнопка редактирования */}
        <Button variant="primary" onClick={() => dispatch(setSelectedNote(note))}>
          Редактировать
        </Button>

        {/* Кнопка лайка */}
        <Button variant="danger" onClick={() => dispatch(toggleLikeNote(note))}>
          <HeartIcon filled={isLiked} />
        </Button>

        {/* Кнопка удаления */}
        <Button
          disabled={loading}
          variant="danger"
          onClick={() =>
            transition(async () => {
              await dispatch(deleteNoteThunk(note.id));
            })
          }
        >
          {loading ? <Spinner animation="border" size="sm" /> : <CloseIcon />}
        </Button>
      </Card.Body>
    </Card>
  );
}
