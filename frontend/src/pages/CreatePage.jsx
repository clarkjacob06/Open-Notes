import { useState } from "react";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreatePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            setLoading(true);

            if(!title || !content) return toast.error('All field are required');

            await api.post('/notes', {title, content});
            toast.success('Note created successfully');

            navigate('/');

        } catch (error) {
            toast.error('Failed to create note');
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Enter Text" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type='submit'>{loading ? 'Saving..' : 'Create'}</button>
            </form>
        </>
    )
}

export default CreatePage