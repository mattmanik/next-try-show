import Link from "next/link";
import classes from "../events/event-shows.module.css";
import Film from "../icons/film";
import Okay from "../icons/okay";
import Button from "../ui/button";

function Eventshows(props) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatAdd = location.replace(", ", "\n");
  const showLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="moviePic" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>
            <span>{title} </span>
            <span className={classes.icon}>
              <Film />
            </span>
          </h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatAdd}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={showLink}>
            <span>Book now</span>
            <span className={classes.icon}>
              <Okay />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Eventshows;
