import { useState, useEffect } from "react"
import api from '../lib/axios.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

import NoteCard from "../components/NoteCard.jsx";

function HomePage() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchNotes() {
            try {
                setLoading(true)
                const note = await api.get('/notes');

                setNotes(note.data);
            } catch (error) {
                toast.error('Failed to fetch notes')
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchNotes();

        document.title = 'OpenNotes Home';
    }, []);

    async function handleDelete(noteId) {
        await api.delete(`/notes/${noteId}`);
        setNotes(n => n.filter(n => n._id !== noteId));
        toast.success('Note deleted');
    }

    function handleView(noteId) {
        navigate(`/content/${noteId}`);
    }

    return(
        <>  
            {notes.length <= 0 && <h1>No notes yet</h1>}
            {loading && <div>Loading...</div>}
            {notes.map((note) => (
                <NoteCard delete={() => handleDelete(note._id)} view={() => handleView(note._id)} noteProp={note} key={note._id}></NoteCard>
            ))}

            <button onClick={() => navigate('/create')}>Create Note</button>
        </>
    )
}

export default HomePage