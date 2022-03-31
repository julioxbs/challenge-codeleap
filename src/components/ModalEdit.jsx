import Input from "./Input";
import "../App.css";
import { useState } from "react";

export default function EditModal({ className, closeModal, acceptEdit }) {
    const [titleEdit, setTitleEdit] = useState('');
    const [contentEdit, setContentEdit] = useState('');

    return (
        <div className={className} onClick={(e) => e.target.classList.value === 'modal' ? closeModal(false) : null}>
            <div className="content__modal--edit">
                <p className="title__modal">Edit item</p>

                <div className="title__input--edit">
                    <label htmlFor="title">Title</label>

                    <Input
                        onChange={(e) => setTitleEdit(e.target.value)}
                        id={'title'}
                        type={'text'}
                        placeholder={'Hello World'} />
                </div>

                <div className="content__input--edit">
                    <label htmlFor="content">Content</label>

                    <textarea
                        onChange={(e) => setContentEdit(e.target.value)}
                        name="content"
                        id="content"
                        required
                        cols="20" rows="5"
                        placeholder="Content here"></textarea>
                </div>

                <div className="button--edit">
                    <button
                    style={titleEdit || contentEdit ? { backgroundColor: '#000' } : { backgroundColor: '#ddd', cursor: 'not-allowed' }}
                    onClick={() => acceptEdit(titleEdit, contentEdit)} 
                    className="btn">Save</button>
                </div>
            </div>
        </div>
    );
}