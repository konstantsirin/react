import React from 'react';

const CommentItem = (props) => {
    return(
        <li 
            className = {"comment-block"}
        >
            <header>
                <div
                    className = {"author-name"}
                >
                    Автор: {props.author}
                </div>
                <div 
                    className = {"date"}
                >
                    {props.dateTime}
                </div>
            </header>                           
            <p
            className = "comment-text"
            >
                {props.text}
            </p>
            <footer>
                <button
                    type = "button"
                    className = "btn-comment-del"
                    aria-label = "Удалить комментарий"
                    onClick = {props.delComment}
                >
                    Удалить комментарий    
                </button>
            </footer>
        </li>
    )
}

export default CommentItem; 