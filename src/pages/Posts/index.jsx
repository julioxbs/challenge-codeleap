import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { postAdd, removeItem } from '../../redux/features/post';
import ModalDelete from '../../components/ModalDelete';
import ModalEdit from '../../components/ModalEdit';
import './post.css';
import moment from "moment";

export default function Posts() {
    const username = useSelector((state) => state.username.value);
    const postsValues = useSelector((state) => state.postData.value);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [openModal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [currentUserID, setCurrentUserID] = useState(null);
    
    const titleInput = useRef(null);
    const contentInput = useRef(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postAdd({
            title: title,
            content: content,
            username: username.name,
            id: Math.trunc(Math.random() * 2000),
            dateCreated: moment.now(),
        }));

        clearInputs();
    }

    const handleModalOpen = (val) => {
        setCurrentUserID(val)
        setModal(!openModal);
    }

    const handleModalEdit = (val) => {
        setCurrentUserID(val)
        setEditModal(!editModal)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: currentUserID}))
        setModal(!openModal);
    }

    const handleEdit = (titleEdit, contentEdit) => {
        dispatch(removeItem({id: currentUserID}))
        dispatch(postAdd({
            title: titleEdit === '' ? title : titleEdit,
            content: contentEdit === '' ? content : contentEdit,
            username: username.name,
            id: new Date().getSeconds(),
        }));
        setEditModal(!editModal);
    }

    const clearInputs = () => {
        titleInput.current.value = '';
        contentInput.current.value = '';
    }

    return (
        <div className="content">
            <div className="title__top">
                <h3>CodeLeap Network</h3>
            </div>

            <div className="container__post">
                <div className="form__createPost">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <p>What's on your mind?</p>

                        <div className="title__input">
                            <label htmlFor="title">Title</label>

                            <Input
                                ref={titleInput}
                                onChange={(e) => setTitle(e.target.value)}
                                id={'title'}
                                type={'text'}
                                placeholder={'Hello World'} />
                        </div>

                        <div className="content__input">
                            <label htmlFor="content">Content</label>

                            <textarea
                                ref={contentInput}
                                onChange={(e) => setContent(e.target.value)}
                                name="content"
                                id="content"
                                required
                                cols="20" rows="5"
                                placeholder="Content here"></textarea>
                        </div>

                        <div className="button__box">
                            <Button
                                style={title && content ? { backgroundColor: '#000' } : { backgroundColor: '#ddd', cursor: 'not-allowed' }}
                                type={"submit"}
                                className={'btn'}>
                                CREATE
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="posts">
                    {postsValues.length > 0 ? postsValues.map((post) =>
                        <div className="post" key={post.id} id={`${post.id}`}>
                            <p className="title__post">
                                {post.title}

                                {username.name === post.username ? <span className="icons">
                                    <span onClick={() => handleModalOpen(post.id)}>
                                        <img id={post.id} src="/icons/delete.svg" alt="delete icon" />
                                    </span>

                                    <span onClick={() => handleModalEdit(post.id)}>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>
                                </span> : ''}
                            </p>

                            <p className="content__post">
                                <p className="user">
                                    {'@' + post.username}
                                    <span className="time">{moment(post.dateCreated).fromNow()}</span>
                                </p>

                                {post.content}
                            </p>
                        </div>
                    ) : null}

                    {openModal && <ModalDelete acceptRemove={handleRemove} closeModal={setModal} className={'modal'} />}
                    {editModal && <ModalEdit acceptEdit={handleEdit} closeModal={setEditModal} className={'modal'} />}
                </div>
            </div>
        </div>
    );
}