const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Annaatthe',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Running Now',
      date: '2021-05-12',
      image: 'images/annatthe.jpg',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Batman',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'Coming Soon',
      date: '2021-05-30',
      image: 'images/batman.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Beast',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Coming Soon',
      date: '2022-04-10',
      image: 'images/beast.jpg',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'Valimai',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Coming Soon',
      date: '2022-04-10',
      image: 'images/valimaio.jpg',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'Don"t Look Up',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Netflix',
      date: '2022-04-10',
      image: 'images/dont.jpg',
      isFeatured: true,
    },
    {
      id: 'e6',
      title: 'Spider-Man',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Running Now',
      date: '2022-04-10',
      image: 'images/noway.jpg',
      isFeatured: true,
    },
    {
      id: 'e7',
      title: 'RRR',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Coming Soon',
      date: '2022-04-10',
      image: 'images/rrr.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }