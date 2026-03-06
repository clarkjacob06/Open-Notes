import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

function ContentPage() {
    const [note, setNote] = useState([])
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchNote() {
            try {
                setLoading(true);
                const note = await api.get(`/notes/${id}`);
                setNote(note.data);
            } catch (error) {
                toast.error('Failed to fetch note content');
                console.log(error);
            }finally {
                setLoading(false);
            }
        }

        fetchNote();
        document.title = 'OpenNotes Content'
    }, []);

    useEffect(() => {
        if(!note.title || !note.content) {
            setValid(false);
        }
        else {
            setValid(true);
        }
    }, [note])

    async function handleSave() {
        try {
            await api.put(`/notes/${id}`, {
                title: note.title,
                content: note.content
            });

            toast.success('Note updated successfully');
            navigate('/');
        } catch (error) {
            toast.error('Failed to update note');
        }
    }

    return(
        <>
            <input type="text" value={note.title} onChange={(e) => setNote({...note, title: e.target.value})}/>
            <textarea value={note.content} onChange={(e) => setNote({...note, content: e.target.value})}></textarea>
            <button onClick={handleSave} disabled={!valid}>{loading ? 'Updating...' : 'Save Changes'}</button>
        </>
    )
}
export default ContentPage


