import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import { getEventById } from "../../dummy-data";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import NewsletterRegistration from "../../components/events/newsletter";
import Comments from "../../components/events/comments";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const show = getEventById(eventId);

  if (!show) {
    return <p>No show found !! </p>;
  }

  return (
    <Fragment>
      <EventSummary title={show.title} />
      <EventLogistics
        date={show.date}
        address={show.location}
        image={show.image}
      />
      <EventContent>
        <p>{show.description}</p>
      </EventContent>
      <Comments/>
       <NewsletterRegistration/> 
    </Fragment>
  );
}

export default EventDetailPage;
