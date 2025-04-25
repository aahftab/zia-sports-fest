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
    time: "9:00 AM - 1:00 PM",
    venue: "University Main Ground",
    imageBg: "/images/cricket.jpg",
    shortDescription: "A fun-filled gully cricket tournament with simplified rules.",
    longDescription: "Experience the nostalgia of street cricket with our Gully Cricket tournament. This simplified version of cricket focuses on quick gameplay, minimal equipment, and maximum entertainment. Perfect for both cricket enthusiasts and casual players.",
    teamSize: "6 players + 2 substitutes",
    eligibility: "Open to all university students with valid ID cards.",
    rules: [
      "6 overs per innings with 6 players per side.",
      "One-pitch catches and hitting boundaries on full toss are out.",
      "No LBW rule applies.",
      "Underarm bowling allowed.",
      "Each player must bowl at least one over except the wicketkeeper."
    ],
    prizes: "Winner: ₹8,000 | Runner-up: ₹4,000 | Best Player: Special Trophy",
    coordinators: [
      {
        name: "Rahul Sharma",
        contact: "+91 9876543210"
      },
      {
        name: "Vikram Singh",
        contact: "+91 8765432109"
      }
    ],
    formLink: "https://forms.example.com/register-gully-cricket"
  },
  {
    id: "volleyball",
    name: "Volleyball Tournament",
    icon: "🏐",
    date: "April 28, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "University Volleyball Court",
    imageBg: "/images/volleyball.jpg",
    shortDescription: "Competitive volleyball tournament with mixed teams.",
    longDescription: "Our Volleyball Tournament brings together teams to compete in a high-energy environment. With professional refereeing and a lively atmosphere, this event promises exciting matches and great team spirit.",
    teamSize: "6 players + 3 substitutes",
    eligibility: "Open to all university students with mixed gender teams encouraged.",
    rules: [
      "Matches will be best of 3 sets (25 points each).",
      "Standard volleyball rules apply.",
      "Teams must wear matching jerseys or bibs (provided).",
      "In case of tie at 24-24, the 'two-point advantage' rule applies.",
      "Teams must rotate positions as per standard rotation rules."
    ],
    prizes: "Winner: ₹8,000 | Runner-up: ₹4,000 | Best Spiker: Special Award",
    coordinators: [
      {
        name: "Sneha Gupta",
        contact: "+91 9876543213"
      },
      {
        name: "Rajesh Sharma",
        contact: "+91 8765432103"
      }
    ],
    formLink: "https://forms.example.com/register-volleyball"
  },
  {
    id: "basketball",
    name: "Basketball Challenge",
    icon: "🏀",
    date: "April 28, 2025",
    time: "1:00 PM - 6:00 PM",
    venue: "University Indoor Court",
    imageBg: "/images/basketball.jpg",
    shortDescription: "A 5v5 basketball tournament with exciting prizes.",
    longDescription: "Experience an adrenaline-packed basketball tournament that will test your skills, teamwork, and endurance. The fast-paced format ensures continuous action and excitement throughout the day.",
    teamSize: "5 players + 3 substitutes",
    eligibility: "Open to all university students and faculty members.",
    rules: [
      "Matches will be 20 minutes (two halves of 10 minutes each).",
      "Standard basketball rules apply.",
      "Teams must wear matching jerseys or bibs (provided).",
      "Each player is limited to 5 personal fouls.",
      "Shot clock of 24 seconds will be enforced."
    ],
    prizes: "Winner: ₹7,500 | Runner-up: ₹3,500 | MVP: Special Award",
    coordinators: [
      {
        name: "Priya Patel",
        contact: "+91 9876543211"
      },
      {
        name: "Michael Johnson",
        contact: "+91 8765432101"
      }
    ],
    formLink: "https://forms.example.com/register-basketball"
  },
  {
    id: "badminton-boys",
    name: "Badminton - Boys",
    icon: "🏸",
    date: "April 28, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "University Indoor Stadium",
    imageBg: "/images/badminton.jpg",
    shortDescription: "Singles and doubles badminton tournament for boys.",
    longDescription: "The Boys Badminton Tournament offers both singles and doubles categories. Played on professional-grade courts with tournament-quality shuttlecocks, this event promises high-quality matches and fierce competition.",
    teamSize: "Singles or Doubles (Max 2 players)",
    eligibility: "Open to all male university students.",
    rules: [
      "All matches will be best of 3 games of 21 points each.",
      "BWF rules apply for all matches.",
      "Players must bring their own rackets. Shuttlecocks will be provided.",
      "Players must arrive 15 minutes before their scheduled match.",
      "Proper sports attire is mandatory."
    ],
    prizes: "Singles Winner: ₹5,000 | Doubles Winner: ₹8,000 | Runners-up: Half of winner's prize",
    coordinators: [
      {
        name: "Karan Malhotra",
        contact: "+91 9876543215"
      },
      {
        name: "Aditya Verma",
        contact: "+91 8765432104"
      }
    ],
    formLink: "https://forms.example.com/register-badminton-boys"
  },
  {
    id: "badminton-girls",
    name: "Badminton - Girls",
    icon: "🏸",
    date: "April 28, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "University Indoor Stadium",
    imageBg: "/images/badminton-women.jpg",
    shortDescription: "Singles and doubles badminton tournament for girls.",
    longDescription: "The Girls Badminton Tournament offers both singles and doubles categories. This event showcases skill, agility, and strategy on professional-grade courts with tournament-quality equipment.",
    teamSize: "Singles or Doubles (Max 2 players)",
    eligibility: "Open to all female university students.",
    rules: [
      "All matches will be best of 3 games of 21 points each.",
      "BWF rules apply for all matches.",
      "Players must bring their own rackets. Shuttlecocks will be provided.",
      "Players must arrive 15 minutes before their scheduled match.",
      "Proper sports attire is mandatory."
    ],
    prizes: "Singles Winner: ₹5,000 | Doubles Winner: ₹8,000 | Runners-up: Half of winner's prize",
    coordinators: [
      {
        name: "Aisha Khan",
        contact: "+91 9876543216"
      },
      {
        name: "Meera Rajan",
        contact: "+91 8765432105"
      }
    ],
    formLink: "https://forms.example.com/register-badminton-girls"
  },
  {
    id: "hockey",
    name: "Hockey Tournament",
    icon: "🏑",
    date: "April 28-29, 2025",
    time: "9:00 AM - 4:00 PM",
    venue: "University Hockey Field",
    imageBg: "/images/hockey.jpg",
    shortDescription: "A competitive field hockey tournament with knockout stages.",
    longDescription: "Our Hockey Tournament brings together teams for two days of intense competition. With professional umpires and a well-maintained field, teams will showcase their skills, strategy, and teamwork as they compete for the championship.",
    teamSize: "11 players + 5 substitutes",
    eligibility: "Open to all university students, with mixed teams allowed.",
    rules: [
      "Matches will be 40 minutes (two halves of 20 minutes).",
      "FIH rules apply with modifications as announced before the tournament.",
      "Teams must wear matching jerseys with numbers.",
      "Each team must have their own goalkeeper equipment.",
      "Card system: Green (2-min suspension), Yellow (5-min suspension), Red (match suspension)."
    ],
    prizes: "Winner: ₹12,000 | Runner-up: ₹6,000 | Best Player: Special Trophy",
    coordinators: [
      {
        name: "Surinder Singh",
        contact: "+91 9876543217"
      },
      {
        name: "Amritpal Kaur",
        contact: "+91 8765432106"
      }
    ],
    formLink: "https://forms.example.com/register-hockey"
  },
  {
    id: "dodge-ball",
    name: "Dodge Ball",
    icon: "🔴",
    date: "April 29, 2025",
    time: "9:00 AM - 2:00 PM",
    venue: "University Indoor Hall",
    imageBg: "/images/dodgeball.jpg",
    shortDescription: "Fast-paced dodgeball competition with mixed teams.",
    longDescription: "Our Dodge Ball tournament offers high-energy matches in a fun, competitive environment. This fast-paced event requires quick reflexes, strategy, and teamwork as players dodge, catch, and throw their way to victory.",
    teamSize: "6 players + 3 substitutes",
    eligibility: "Open to all university students, with mixed teams encouraged.",
    rules: [
      "Matches will be 10 minutes or until all players on one side are eliminated.",
      "National Amateur Dodgeball Association rules apply.",
      "Six balls will be used per match.",
      "Headshots are not valid eliminations unless the player ducks.",
      "Caught balls eliminate the thrower and allow one eliminated teammate to return."
    ],
    prizes: "Winner: ₹6,000 | Runner-up: ₹3,000 | Most Valuable Player: Special Prize",
    coordinators: [
      {
        name: "Deepak Kumar",
        contact: "+91 9876543218"
      },
      {
        name: "Ananya Reddy",
        contact: "+91 8765432107"
      }
    ],
    formLink: "https://forms.example.com/register-dodgeball"
  },
  {
    id: "discus-throw",
    name: "Discus Throw",
    icon: "🥏",
    date: "April 29, 2025",
    time: "9:00 AM - 12:00 PM",
    venue: "University Athletics Field",
    imageBg: "/images/discus.jpg",
    shortDescription: "Individual discus throw competition with separate categories.",
    longDescription: "The Discus Throw event tests strength, technique, and precision. Competitors will demonstrate their skill in this classic athletics discipline, with separate categories for men and women.",
    teamSize: "Individual participation",
    eligibility: "Open to all university students with separate men's and women's categories.",
    rules: [
      "Each participant gets three attempts, with the best distance counted.",
      "Standard World Athletics rules apply.",
      "Participants must use equipment provided by the organizers.",
      "Throws are measured from the inside edge of the throwing circle to where the discus first lands.",
      "Participants must not leave the circle until the discus has landed."
    ],
    prizes: "Men's Winner: ₹4,000 | Women's Winner: ₹4,000 | Runners-up: ₹2,000 each",
    coordinators: [
      {
        name: "Harpreet Singh",
        contact: "+91 9876543219"
      },
      {
        name: "Simran Kaur",
        contact: "+91 8765432108"
      }
    ],
    formLink: "https://forms.example.com/register-discus"
  },
  {
    id: "shot-put",
    name: "Shot Put",
    icon: "🏋️",
    date: "April 29, 2025",
    time: "1:00 PM - 4:00 PM",
    venue: "University Athletics Field",
    imageBg: "/images/shotput.jpg",
    shortDescription: "Individual shot put competition with separate categories.",
    longDescription: "The Shot Put competition showcases raw power combined with technical precision. Competitors will test their strength and technique in this challenging athletics event, with separate divisions for men and women.",
    teamSize: "Individual participation",
    eligibility: "Open to all university students with separate men's and women's categories.",
    rules: [
      "Each participant gets three attempts, with the best distance counted.",
      "Standard World Athletics rules apply.",
      "Men use 7.26kg shot; women use 4kg shot.",
      "The shot must be put from the shoulder with one hand only.",
      "Participants must not leave the circle until the shot has landed."
    ],
    prizes: "Men's Winner: ₹4,000 | Women's Winner: ₹4,000 | Runners-up: ₹2,000 each",
    coordinators: [
      {
        name: "Ravi Kumar",
        contact: "+91 9876543220"
      },
      {
        name: "Divya Sharma",
        contact: "+91 8765432110"
      }
    ],
    formLink: "https://forms.example.com/register-shotput"
  }
]; 