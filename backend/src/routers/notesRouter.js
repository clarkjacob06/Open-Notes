import express from 'express';
import {renderNotes, renderNoteById, createNote, updateNote, deleteNote} from '../controllers/notesController.js';

const router = express.Router();

router.get('/', renderNotes);
router.get('/:id', renderNoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);


export default router