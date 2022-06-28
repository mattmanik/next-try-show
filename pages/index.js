import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/eventlist";

function HomePage() {
    const featuredShows = getFeaturedEvents();
    return (
        <div>
            <EventList items={featuredShows}/>
        </div>
    )
}

export default HomePage

