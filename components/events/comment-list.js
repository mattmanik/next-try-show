import { Fragment } from 'react';
import classes from './comment-list.module.css';

function CommentList({items}) {
  console.log(items,'ITEMS');
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((x)=>(
           <li key={x._id}>
            <p>{x.text}</p>
        <div>By <address>{x.name}</address></div>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;