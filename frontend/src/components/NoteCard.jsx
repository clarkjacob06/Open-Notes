import formatDate from "../util/formatDate";;
import {Link} from 'react-router-dom';
import api from '../lib/axios.js'
import toast from "react-hot-toast";

function NoteCard({noteProp, setNotesProp}) {

    async function handleDelete(e, noteId) {
        e.preventDefault()
        await api.delete(`/notes/${noteId}`);
        setNotesProp(n => n.filter(n => n._id !== noteId));
        toast.success('Note deleted successfully');
    }

    return(
        <Link to={`/content/${noteProp._id}`}>
            <div className="noteCard" style={{border: '1px solid', width: '20%'}}>
                <h1>{noteProp.title}</h1>
                <p>{formatDate(new Date(noteProp.createdAt))}</p>
                <button onClick={(e) => handleDelete(e, noteProp._id)}>Delete</button>
            </div>
        </Link>
    )
}

export default NoteCard