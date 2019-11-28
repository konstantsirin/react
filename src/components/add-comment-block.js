import React from 'react';

const AddCommentBlock = (props) => {
    return(
        <div
            className = {"block-addComment"}
        >
            <input
                type = "text" 
                placeholder = "Ваше имя"
                className = {"add-name"}
                value = {props.newAuthor}
                onChange = {props.setStateAuthor}
                required = "required"
            />
            <textarea
                type = "text" 
                placeholder = "Ваш комментарий"
                className = {"add-comment"}
                value = {props.newComment}
                onChange = {props.setStateComment}
                required = "required"
            ></textarea>
            <button
                type = "button"
                className = "btn-comment-add"
                aria-label = "Опубликовать комментарий"
                onClick = {props.addComment} 
            >
                Опубликовать комментарий
            </button>
            <button
                type = "button"
                className = "btn-comment-clear"
                aria-label = "Очистить"
                onClick = {props.clearAddComment}
            >
                Очистить
            </button>
        </div> 
    )

}

export default AddCommentBlock;