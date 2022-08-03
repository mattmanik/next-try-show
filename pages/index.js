import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/eventlist";
import Navbar from "../components/navbar/navbar";
import { useSession ,getSession} from 'next-auth/react'

function HomePage(props) {
    const featuredShows = getFeaturedEvents();

  
    return (
        <div>
            <Navbar />
            <EventList items={featuredShows} />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    console.log(session,'session SERVER');
    return ({props: {session}})
  }

export default HomePage

