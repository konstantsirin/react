import React from 'react';
import ReactDOM from 'react-dom';
import style from './css/styles.css';
import CommentItem from './components/comment-item.js';
import AddCommentBlock from './components/add-comment-block.js';

const BODY = document.body;
let app = document.createElement('div');
app.id = 'root';
BODY.prepend(app);

if(!localStorage.allComments) {
    let allComments = [
        {author: 'admin', text: 'Первый комментарий', dateTime: '2019-11-20, 15:15:00'},
        {author: 'not-admin', text: 'Второй комментарий', dateTime: '2019-11-20, 15:30:00'}
    ];

    localStorage.setItem('allComments', JSON.stringify(allComments));
}

class CommentsApp extends React.Component {
    constructor() {
        super();

        //Исходное состояние нашего приложения
        this.state = {
            comments: JSON.parse(localStorage.getItem('allComments')),
            newAuthor: '',
            newComment: ''
        }

        this.delComment = this.delComment.bind(this);
    }

    addComment() {
        let comments = this.state.comments;
        let currentFullDate = new Date();
        
        
        if (this.state.newAuthor.trim() && this.state.newComment.trim()) {
            comments.push({
                author: this.state.newAuthor,
                text: this.state.newComment,
                dateTime: currentFullDate.toLocaleString()
            }); 
           
            localStorage.setItem('allComments', JSON.stringify(comments));

            this.setState({
                comments,
                newAuthor: '',
                newComment: ''
            });
        } else {
            alert('Поля не заполнены');
            console.log ('Данные не получены');

            this.setState({
                comments,
            });
        }
                
    }
    
    clearAddComment() {
        const comments = this.state.comments;
        this.setState({
            comments,
            newAuthor: '',
            newComment: ''
        });
    }

    delComment(key) {
        let comments = this.state.comments.slice();

        comments.splice(key, 1);
        
        localStorage.setItem('allComments', JSON.stringify(comments));

        this.setState({
            comments,
            newAuthor: '',
            newComment: ''
        });
    }
    
    
    render() {
        return(
            <section
            className = {"app-block"}
            >
                <ul
                className = {"comments-list"}
                >
                <h1>Комментарии</h1>

                    {this.state.comments.map((comment, id) => {
                        return(
                            <CommentItem 
                                key = {id}
                                author = {comment.author}
                                text = {comment.text}
                                dateTime = {comment.dateTime}
                                delComment = {this.delComment.bind(this, id)}
                            />
                        )
                    })}
                </ul>
                <AddCommentBlock 
                    newAuthor = {this.state.newAuthor}
                    newComment = {this.state.newComment}
                    addComment = {this.addComment.bind(this)}
                    clearComment = {this.clearComment}
                    setStateAuthor = {ev => {
                        this.setState({newAuthor: ev.target.value});
                    }}
                    setStateComment = {ev => {
                        this.setState({newComment: ev.target.value});
                    }}
                />
            </section>
        )

    }
}

ReactDOM.render(
    <CommentsApp />,
    document.getElementById('root')
);