import client from './client';

const getNotes = (courseId) =>
  client.get('note/get_notes', {params: {course_id: courseId}});

const updateNote = (noteId, note) =>
  client.get('note/update_note', {params: {note_id: noteId, note}});

const deleteNote = (noteId) =>
  client.get('note/delete_note', {params: {note_id: noteId}});

const addNotesToPdf = (pdfId, note) =>
  client.get('note/add_note_to_pdf', {params: {pdf_id: pdfId, note}});

export {getNotes, updateNote, deleteNote, addNotesToPdf};
