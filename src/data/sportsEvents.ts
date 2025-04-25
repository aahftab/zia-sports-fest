export interface Coordinator {
  name: string;
  contact: string;
}

export interface SportEvent {
  id: string;
  name: string;
  icon: string;
  date: string;
  time: string;
  venue: string;
  imageBg?: string;
  shortDescription: string;
  longDescription: string;
  teamSize: string;
  eligibility: string;
  rules: string[];
  prizes: string;
  coordinators: Coordinator[];
  formLink: string;
}

export const sportsEvents: SportEvent[] = [
  {
    id: "gully-cricket",
    name: "Gully Cricket",
    icon: "🏏",
    date: "April 28, 2025",
    time: "TBD",
    venue: "SZ Hall Lawn",
    imageBg: "/images/cricket.jpg",
    shortDescription: "A fun-filled gully cricket tournament with simplified rules.",
    longDescription: "Experience the nostalgia of street cricket with our Gully Cricket tournament. This simplified version of cricket focuses on quick gameplay, minimal equipment, and maximum entertainment. Perfect for both cricket enthusiasts and casual players.",
    teamSize: "6 players",
    eligibility: "Open to all university students",
    rules: ["TBD"],
    // [
    //   "6 overs per innings with 6 players per side.",
    //   "One-pitch catches and hitting boundaries on full toss are out.",
    //   "No LBW rule applies.",
    //   "Underarm bowling allowed.",
    //   "Each player must bowl at least one over except the wicketkeeper."
    // ],
    prizes: "Winner: ₹2,100 | Runner-up: ₹1,100",
    coordinators: [
      {
        name: "Mr Monis",
        contact: "+91 8979488426"
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "volleyball",
    name: "Volleyball Tournament",
    icon: "🏐",
    date: "April 28, 2025",
    time: "TBD",
    venue: "SZ Hall Lawn",
    imageBg: "/images/volleyball.jpg",
    shortDescription: "Competitive volleyball tournament with mixed teams.",
    longDescription: "Our Volleyball Tournament brings together teams to compete in a high-energy environment. With professional refereeing and a lively atmosphere, this event promises exciting matches and great team spirit.",
    teamSize: "6 players",
    eligibility: "Open to all university students with valid ID cards",
    rules: ["TBD"],
    // [
    //   "Matches will be best of 3 sets (25 points each).",
    //   "Standard volleyball rules apply.",
    //   "Teams must wear matching jerseys or bibs (provided).",
    //   "In case of tie at 24-24, the 'two-point advantage' rule applies.",
    //   "Teams must rotate positions as per standard rotation rules."
    // ],
    prizes: "Winner: ₹1,100 | Runner-up: ₹500",
    coordinators: [
      {
        name: "Mr Wafaur Rahman",
        contact: "+91 8279848164"
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "basketball",
    name: "Basketball Challenge",
    icon: "🏀",
    date: "April 28, 2025",
    time: "TBD",
    venue: "SZ Hall Basketball Court",
    imageBg: "/images/basketball.jpg",
    shortDescription: "A 3v3 basketball half court tournament with exciting prizes.",
    longDescription: "Experience an adrenaline-packed basketball tournament that will test your skills, teamwork, and endurance. The fast-paced format ensures continuous action and excitement throughout the day.",
    teamSize: "3 players",
    eligibility: "Open to all university students",
    rules: ["TBD"],
    // [
    //   "Matches will be 20 minutes (two halves of 10 minutes each).",
    //   "Standard basketball rules apply.",
    //   "Teams must wear matching jerseys or bibs (provided).",
    //   "Each player is limited to 5 personal fouls.",
    //   "Shot clock of 24 seconds will be enforced."
    // ],
    prizes: "Winner: ₹1,100 | Runner-up: ₹500",
    coordinators: [
      {
        name: "Mr Sohail",
        contact: "+91 8279848164"
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "🏸",
    date: "April 28, 2025",
    time: "TBD",
    venue: "SZ Hall Badminton Court",
    imageBg: "/images/badminton.jpg",
    shortDescription: "Singles and doubles badminton tournament .",
    longDescription: "The Badminton Tournament offers both singles and doubles categories for both boys and girls.",
    teamSize: "Singles or Doubles (Max 2 players)",
    eligibility: "Open to all male/female university students.",
    rules: ["TBD"],
    // [
    //   "All matches will be best of 3 games of 21 points each.",
    //   "BWF rules apply for all matches.",
    //   "Players must bring their own rackets. Shuttlecocks will be provided.",
    //   "Players must arrive 15 minutes before their scheduled match.",
    //   "Proper sports attire is mandatory."
    // ],
    prizes: "Singles Winner: ₹500",
    coordinators: [
      {
        name: "Mr. Aftab",
        contact: "+91 8171727590"
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "hockey",
    name: "Hockey Tournament",
    icon: "🏑",
    date: "April 28-29, 2025",
    time: "TBD",
    venue: "SZ Hall Lawn",
    imageBg: "/images/hockey.jpg",
    shortDescription: "A competitive field hockey tournament with knockout stages.",
    longDescription: "Our Hockey Tournament brings together teams for two days of intense competition. With professional umpires, teams will showcase their skills, strategy, and teamwork as they compete for the championship.",
    teamSize: "5+1",
    eligibility: "Open to all university students",
    rules: ["TBD"],
    // [
    //   "Matches will be 40 minutes (two halves of 20 minutes).",
    //   "FIH rules apply with modifications as announced before the tournament.",
    //   "Teams must wear matching jerseys with numbers.",
    //   "Each team must have their own goalkeeper equipment.",
    //   "Card system: Green (2-min suspension), Yellow (5-min suspension), Red (match suspension)."
    // ],
    prizes: "Winner: ₹1,100 | Runner-up: ₹500",
    coordinators: [
      {
        name: "Mr X",
        contact: "+91 "
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "dodge-ball",
    name: "Dodge Ball",
    icon: "🔴",
    date: "April 28, 2025",
    time: "TBD",
    venue: "SZ Hall Lawn",
    imageBg: "/images/dodgeball.jpg",
    shortDescription: "Fast-paced dodgeball competition with mixed teams.",
    longDescription: "Our Dodge Ball tournament offers high-energy matches in a fun, competitive environment. This fast-paced event requires quick reflexes, strategy, and teamwork as players dodge, catch, and throw their way to victory.",
    teamSize: "5 players",
    eligibility: "Open to all university students, with mixed teams encouraged.",
    rules: ["TBD"],
    // [
    //   "Matches will be 10 minutes or until all players on one side are eliminated.",
    //   "National Amateur Dodgeball Association rules apply.",
    //   "Six balls will be used per match.",
    //   "Headshots are not valid eliminations unless the player ducks.",
    //   "Caught balls eliminate the thrower and allow one eliminated teammate to return."
    // ],
    prizes: "Winner: ₹500",
    coordinators: [
      {
        name: "Mr Arsalan",
        contact: "+91 "
      },

    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "discus-throw",
    name: "Discus Throw",
    icon: "🥏",
    date: "April 29, 2025",
    time: "TBD",
    venue: "SZ Hall Field",
    imageBg: "/images/discus.jpg",
    shortDescription: "Individual discus throw competition with separate categories.",
    longDescription: "The Discus Throw event tests strength, technique, and precision. Competitors will demonstrate their skill in this classic athletics discipline",
    teamSize: "Individual participation",
    eligibility: "Open to all university students",
    rules: ["TBD"],
    // [
    //   "Each participant gets three attempts, with the best distance counted.",
    //   "Standard World Athletics rules apply.",
    //   "Participants must use equipment provided by the organizers.",
    //   "Throws are measured from the inside edge of the throwing circle to where the discus first lands.",
    //   "Participants must not leave the circle until the discus has landed."
    // ],
    prizes: "Winner: ₹500",
    coordinators: [
      {
        name: "Mr X",
        contact: "+91 "
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  },
  {
    id: "shot-put",
    name: "Shot Put",
    icon: "🏋️",
    date: "April 29, 2025",
    time: "TBD",
    venue: "SZ Hall Field",
    imageBg: "/images/shotput.jpg",
    shortDescription: "Individual shot put competition",
    longDescription: "The Shot Put competition showcases raw power combined with technical precision. Competitors will test their strength and technique in this challenging athletics event",
    teamSize: "Individual participation",
    eligibility: "Open to all university students.",
    rules: ["TBD"],
    // [
    //   "Each participant gets three attempts, with the best distance counted.",
    //   "Standard World Athletics rules apply.",
    //   "Men use 7.26kg shot; women use 4kg shot.",
    //   "The shot must be put from the shoulder with one hand only.",
    //   "Participants must not leave the circle until the shot has landed."
    // ],
    prizes: "Winner: ₹500",
    coordinators: [
      {
        name: "Mr X",
        contact: "+91 "
      },
    ],
    formLink: "https://forms.gle/ZKAoBAmnrGrg6x9D8"
  }
]; 