import formatDate from "../util/formatDate";;
import {Trash} from 'lucide-react';


function NoteCard(props) {
    const noteProp = props.noteProp;
    const handleDelete = props.delete;
    const handleView = props.view;

    return(
        <div className="noteCard" style={{border: '1px solid', width: '20%'}} onClick={handleView}>
            <h1>{noteProp.title}</h1>
            <p>{formatDate(new Date(noteProp.createdAt))}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NoteCard