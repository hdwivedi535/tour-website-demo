export type MediaAsset = {
  src: string;
  alt: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
};

export type Experience = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  duration: string;
  shortDescription: string;
  overview: string;
  highlights: { title: string; copy: string }[];
  experienceFlow: { step: string; title: string; copy: string }[];
  included: string[];
  excluded: string[];
  goodToKnow: string[];
  bestFor: string[];
  heroImage: MediaAsset;
  galleryImages: MediaAsset[];
  seoTitle: string;
  seoDescription: string;
};

const wiki = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const instagramInspected =
  "Instagram @wanderkashi was inspected as the primary visual reference (ghats, boats, aarti, temple atmosphere). Direct Instagram media could not be retrieved (login wall). Wikimedia Commons used as a verified fallback of the same subjects.";

export const experiences: Experience[] = [
  {
    id: "sunrise-boat-ride",
    slug: "sunrise-boat-ride",
    title: "Sunrise Boat Ride on the Ganges",
    shortTitle: "Sunrise Boat Ride",
    location: "River Ganga, Varanasi",
    duration: "1–2 hours",
    shortDescription:
      "An early-morning passage along the ghats as first light reaches the river and the city begins its day.",
    overview:
      "Varanasi is often first understood from the water. Before the lanes fill, a boat moves slowly along the Ganges while the ghats — the stepped riverfronts that line the city — take on colour. Temple bells carry across the current. Families come down to bathe. Priests tend small fires. The hour is brief, and it is the city’s most unguarded: not a performance, but a working morning on a river that has held ritual for centuries.\n\nThis experience is paced for looking rather than covering ground. You travel with a local host who can name the ghats as they appear, explain what you are seeing without rushing it, and leave room for silence when the light is enough on its own.",
    highlights: [
      {
        title: "First light on the river",
        copy: "Watch the Ganges change from grey to gold as the sun clears the far bank.",
      },
      {
        title: "The ghats from the water",
        copy: "See the stepped riverfront — palaces, temples, and everyday life — as a continuous shoreline.",
      },
      {
        title: "A city waking",
        copy: "Bells, laundry, tea stalls, and morning baths unfold at a walking pace, not a schedule.",
      },
      {
        title: "River-side ritual",
        copy: "Observe offerings and prayers as they occur, without staging or interruption.",
      },
      {
        title: "Cultural context",
        copy: "A local host helps you read what you are seeing — names, customs, and why this hour matters.",
      },
    ],
    experienceFlow: [
      {
        step: "01",
        title: "Meet before dawn",
        copy: "You are collected near the riverfront while the city is still quiet. Exact meeting points are confirmed when you enquire.",
      },
      {
        step: "02",
        title: "Board and set out",
        copy: "A traditional boat takes you onto the Ganges. The route follows the ghats rather than racing a circuit.",
      },
      {
        step: "03",
        title: "Sunrise along the shoreline",
        copy: "As light arrives, you pass temples, stone steps, and the first activity of the morning — baths, prayers, and the working river.",
      },
      {
        step: "04",
        title: "Return at an unhurried pace",
        copy: "The outing typically lasts one to two hours, depending on light, river conditions, and how you wish to move.",
      },
    ],
    included: [
      "Local host for the morning on the river",
      "Boat time along the ghats (typically 1–2 hours)",
      "Orientation to what you are seeing from the water",
    ],
    excluded: [
      "Hotel pickup unless arranged separately",
      "Meals and personal purchases",
      "Offerings or donations you may choose to make",
      "Any activity not described in this experience",
    ],
    goodToKnow: [
      "An early start is essential; sunrise times change with the season.",
      "Mornings on the river can be cool — bring a light layer.",
      "The boat is traditional; movement is gentle but not motionless.",
      "Photography is usually welcome from the water; be discreet around people at prayer.",
      "Fog can soften winter mornings; the atmosphere remains part of the experience.",
    ],
    bestFor: [
      "First-time visitors",
      "Couples",
      "Photography enthusiasts",
      "Culture seekers",
      "Solo travellers",
    ],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg/1920px-Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg",
      alt: "Boats on the Ganges at sunrise along the Varanasi ghats",
      sourceName: "Wikimedia Commons — Boats at sunrise, Ganges River, Varanasi",
      sourceUrl: wiki(
        "Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg",
      ),
      note: instagramInspected,
    },
    galleryImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Good_morning_Varanasi.jpg/1920px-Good_morning_Varanasi.jpg",
        alt: "Morning light on the Varanasi riverfront",
        sourceName: "Wikimedia Commons — Good morning Varanasi",
        sourceUrl: wiki("Good_morning_Varanasi.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Varanasi_ghats_in_the_morning.jpg",
        alt: "Ghats of Varanasi in the morning",
        sourceName: "Wikimedia Commons — Varanasi ghats in the morning",
        sourceUrl: wiki("Varanasi_ghats_in_the_morning.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/India_-_Varanasi_boats_-_1292.jpg/1920px-India_-_Varanasi_boats_-_1292.jpg",
        alt: "Wooden boats moored along the Ganges in Varanasi",
        sourceName: "Wikimedia Commons — Varanasi boats",
        sourceUrl: wiki("India_-_Varanasi_boats_-_1292.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Early_morning_view_of_Varanasi_city_from_opposite_bank.jpg",
        alt: "Early morning view of Varanasi from the opposite bank",
        sourceName:
          "Wikimedia Commons — Early morning view of Varanasi from opposite bank",
        sourceUrl: wiki(
          "Early_morning_view_of_Varanasi_city_from_opposite_bank.jpg",
        ),
        note: instagramInspected,
      },
    ],
    seoTitle: "Sunrise Boat Ride on the Ganges | DEMO",
    seoDescription:
      "An early-morning boat experience on the Ganges in Varanasi — ghats, temple bells, and first light on the river, hosted locally.",
  },
  {
    id: "ganga-aarti-from-the-river",
    slug: "ganga-aarti-from-the-river",
    title: "Ganga Aarti from the River",
    shortTitle: "Ganga Aarti",
    location: "Dashashwamedh Ghat, Varanasi",
    duration: "Evening experience",
    shortDescription:
      "Witness the evening Ganga Aarti from the water, as lamps, chant, and the illuminated ghats gather after sunset.",
    overview:
      "Each evening at Dashashwamedh Ghat — one of Varanasi’s principal riverfront steps — priests offer aarti to the Ganges: fire, bells, and coordinated movement held against the dusk. From the bank the crowd is dense. From a boat, the ceremony reads as architecture and light: the ghat as a stage, the river as the aisle, the city rising behind it.\n\nThis experience is for travellers who wish to see the aarti as it is practised — not as a ticketed show, but as a living ritual observed with care. Your host helps you arrive in time, find a respectful vantage from the river, and understand the sequence without talking over it.",
    highlights: [
      {
        title: "Dashashwamedh after sunset",
        copy: "The ghat becomes a field of lamps, faces, and stone as the last light leaves the river.",
      },
      {
        title: "The aarti itself",
        copy: "Fire, bells, and chant offered to the Ganges in a daily evening sequence.",
      },
      {
        title: "A river perspective",
        copy: "Watching from the water gives distance and a clearer view of the full ghat.",
      },
      {
        title: "Atmosphere, not spectacle",
        copy: "The evening is crowded and luminous; the aim is to witness, not to interrupt.",
      },
      {
        title: "Context from a local host",
        copy: "Names, timing, and custom are explained so the ritual can be read, not only photographed.",
      },
    ],
    experienceFlow: [
      {
        step: "01",
        title: "Evening meeting",
        copy: "You meet your host with enough time before dusk. Timing follows sunset and seasonal change.",
      },
      {
        step: "02",
        title: "Onto the river",
        copy: "A boat takes a position facing Dashashwamedh Ghat. Exact placement depends on the evening’s river traffic.",
      },
      {
        step: "03",
        title: "The aarti unfolds",
        copy: "Lamps are raised, bells sound, and the ghat fills. You watch from the water for the duration of the ceremony.",
      },
      {
        step: "04",
        title: "Return after the lamps",
        copy: "When the sequence concludes, the boat returns. The riverside remains lively; the outing ends at the landing.",
      },
    ],
    included: [
      "Local host for the evening",
      "Boat vantage facing the ghat during aarti",
      "Brief orientation to the ceremony and the place",
    ],
    excluded: [
      "Reserved seats on the ghat itself",
      "Hotel transfers unless arranged separately",
      "Meals and personal purchases",
      "Guaranteed front-row positioning — the river is shared",
    ],
    goodToKnow: [
      "Aarti begins around dusk; summer and winter start times differ.",
      "The ghat and river are busy. Expect sound, movement, and other boats.",
      "Photography is common; avoid flash directed at priests or people at prayer.",
      "Evenings can feel cooler on the water after sunset.",
      "This is a public ritual, not a private performance.",
    ],
    bestFor: [
      "Couples",
      "Culture seekers",
      "Photography enthusiasts",
      "First-time visitors",
      "Families",
    ],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/People_observing_Ganga_Aarti_from_the_boats%2C_Dasaswamedh_Ghat_Varansai.jpg/1920px-People_observing_Ganga_Aarti_from_the_boats%2C_Dasaswamedh_Ghat_Varansai.jpg",
      alt: "Travellers watching Ganga Aarti from boats at Dashashwamedh Ghat",
      sourceName: "Wikimedia Commons — People observing Ganga Aarti from the boats",
      sourceUrl: wiki(
        "People_observing_Ganga_Aarti_from_the_boats,_Dasaswamedh_Ghat_Varansai.jpg",
      ),
      note: instagramInspected,
    },
    galleryImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg",
        alt: "Lamps offered during Ganga Aarti at Dashashwamedh Ghat",
        sourceName: "Wikimedia Commons — Diya Pujan at Ganga Aarti",
        sourceUrl: wiki(
          "Diya_Pujan_at_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg",
        ),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Diya_Pujan_at_Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg/1280px-Diya_Pujan_at_Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg",
        alt: "Priests standing during the evening Ganga Aarti",
        sourceName: "Wikimedia Commons — Standing, Ganga Aarti",
        sourceUrl: wiki(
          "Standing,_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg",
        ),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Aarti%2C_Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg",
        alt: "Aarti lamps raised above the ghat",
        sourceName: "Wikimedia Commons — Aarti, Dashashwamedh Ghat",
        sourceUrl: wiki("Aarti,_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Standing%2C_Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg/1280px-Standing%2C_Ganga_Aarti_at_Dashashwamedh_Ghat%2C_Varanasi.jpg",
        alt: "Multiple priests performing Ganga Aarti at dusk",
        sourceName: "Wikimedia Commons — Multiple, Ganga Aarti",
        sourceUrl: wiki(
          "Multiple,_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg",
        ),
        note: instagramInspected,
      },
    ],
    seoTitle: "Ganga Aarti from the River | DEMO",
    seoDescription:
      "Witness the evening Ganga Aarti at Dashashwamedh Ghat from the river — lamps, chant, and the illuminated ghats of Varanasi.",
  },
  {
    id: "kashi-vishwanath",
    slug: "kashi-vishwanath",
    title: "Kashi Vishwanath & Sacred Varanasi",
    shortTitle: "Kashi Vishwanath",
    location: "Varanasi",
    duration: "Half day",
    shortDescription:
      "A respectful half-day in the sacred heart of Varanasi, oriented around Kashi Vishwanath and the old city’s living traditions.",
    overview:
      "Kashi Vishwanath is among the most important Shiva temples in India, set in the dense lanes of old Varanasi rather than apart from them. Pilgrims, shops, and the river are never far. To visit well is to move slowly: through the gali (narrow street), past the everyday commerce of a pilgrimage city, and toward a shrine that still organises the spiritual life of Kashi.\n\nThis half-day is cultural and spiritual in tone, not a promise of privileged access. Temple rules, queues, and security change. A local host helps you approach with appropriate dress and conduct, explains the temple’s place in Varanasi’s sacred geography, and walks the surrounding lanes so the visit is more than a doorway.",
    highlights: [
      {
        title: "Kashi Vishwanath in context",
        copy: "Understand why this shrine sits at the centre of Varanasi’s religious life.",
      },
      {
        title: "The old city",
        copy: "Lanes, courtyards, and the press of pilgrimage that give the temple its setting.",
      },
      {
        title: "Living tradition",
        copy: "Worship, offering, and daily movement — observed with respect, not as a display.",
      },
      {
        title: "Visitor guidance",
        copy: "Dress, conduct, and practical notes so you enter as a guest, not a disruption.",
      },
      {
        title: "A considered pace",
        copy: "Time for the lanes as well as the shrine; the half-day is not a checklist.",
      },
    ],
    experienceFlow: [
      {
        step: "01",
        title: "Meet in the old city",
        copy: "Your host meets you at an agreed point and outlines the morning: routes, customs, and what to expect.",
      },
      {
        step: "02",
        title: "Approach through the lanes",
        copy: "You walk toward the temple precinct through the working streets of pilgrimage Varanasi.",
      },
      {
        step: "03",
        title: "Time at the shrine",
        copy: "You visit according to the day’s access, queues, and temple guidelines. Entry conditions are not guaranteed in advance.",
      },
      {
        step: "04",
        title: "Sacred geography nearby",
        copy: "The remaining time is spent in the surrounding fabric of the old city — lanes, smaller shrines, and the river’s edge as conditions allow.",
      },
    ],
    included: [
      "Local host for a half-day in the old city",
      "Orientation to Kashi Vishwanath and sacred Varanasi",
      "Guidance on respectful dress and conduct",
    ],
    excluded: [
      "Temple entry tickets, if required on the day",
      "VIP, skip-the-queue, or special darshan arrangements",
      "Religious services performed on your behalf",
      "Hotel transfers unless arranged separately",
      "Meals and personal offerings",
    ],
    goodToKnow: [
      "Modest clothing covering shoulders and knees is expected at religious sites.",
      "Footwear is typically left outside; carry a simple bag if needed.",
      "Security and queues are part of visiting a major shrine; patience is required.",
      "Photography rules inside temple precincts can be strict — follow on-site guidance.",
      "This is an active place of worship, not a museum.",
    ],
    bestFor: [
      "Culture seekers",
      "First-time visitors",
      "Families",
      "Solo travellers",
    ],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Shri_Kashi_Vishwanath_Temple.jpg/1920px-Shri_Kashi_Vishwanath_Temple.jpg",
      alt: "Kashi Vishwanath Temple in Varanasi",
      sourceName: "Wikimedia Commons — Shri Kashi Vishwanath Temple",
      sourceUrl: wiki("Shri_Kashi_Vishwanath_Temple.jpg"),
      note: instagramInspected,
    },
    galleryImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shri_Kashi_Vishwanath_Temple_2.jpg/1920px-Shri_Kashi_Vishwanath_Temple_2.jpg",
        alt: "View of Kashi Vishwanath Temple, Varanasi",
        sourceName: "Wikimedia Commons — Shri Kashi Vishwanath Temple 2",
        sourceUrl: wiki("Shri_Kashi_Vishwanath_Temple_2.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Ganga_Dwar%2C_Gateway_of_Corridor_of_Kashi_Vishwanath_Temple%2C_Varanasi_2.webp",
        alt: "Ganga Dwar gateway of the Kashi Vishwanath corridor",
        sourceName: "Wikimedia Commons — Ganga Dwar, Kashi Vishwanath corridor",
        sourceUrl: wiki(
          "Ganga_Dwar,_Gateway_of_Corridor_of_Kashi_Vishwanath_Temple,_Varanasi_2.webp",
        ),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Vishwanath_Gali%2C_in_Varanasi.jpg/1920px-Vishwanath_Gali%2C_in_Varanasi.jpg",
        alt: "Vishwanath Gali, the old-city lane approaching the temple",
        sourceName: "Wikimedia Commons — Vishwanath Gali, Varanasi",
        sourceUrl: wiki("Vishwanath_Gali,_in_Varanasi.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shri_Kashi_Vishwanath_Temple_7.jpg/1920px-Shri_Kashi_Vishwanath_Temple_7.jpg",
        alt: "Kashi Vishwanath Temple precinct, Varanasi",
        sourceName: "Wikimedia Commons — Shri Kashi Vishwanath Temple 7",
        sourceUrl: wiki("Shri_Kashi_Vishwanath_Temple_7.jpg"),
        note: instagramInspected,
      },
    ],
    seoTitle: "Kashi Vishwanath & Sacred Varanasi | DEMO",
    seoDescription:
      "A respectful half-day around Kashi Vishwanath and the sacred old city of Varanasi, hosted with care for custom and place.",
  },
  {
    id: "ramnagar-fort-varanasi-heritage",
    slug: "ramnagar-fort-varanasi-heritage",
    title: "Ramnagar Fort & Varanasi Heritage",
    shortTitle: "Ramnagar Fort",
    location: "Ramnagar & Varanasi",
    duration: "Half day",
    shortDescription:
      "A heritage half-day connecting the river city with Ramnagar Fort, the historic seat across the Ganges.",
    overview:
      "Varanasi’s old city occupies the western bank. Across the Ganges, Ramnagar holds a sandstone fort that has been the residence of the Maharajas of Benares since the eighteenth century. The building looks back at the city it once administered: river, bridge, and a quieter town of its own.\n\nThis experience is for travellers who want architecture and history as well as ritual. You cross to Ramnagar, walk the fort’s rooms and terraces as they are open to visitors, and look back toward Varanasi from the opposite shore — a way of understanding the city as a landscape, not only a sequence of ghats.",
    highlights: [
      {
        title: "Ramnagar Fort",
        copy: "An eighteenth-century riverside fort of carved sandstone, still associated with the former royal house of Benares.",
      },
      {
        title: "Rooms and collections",
        copy: "Interiors and displays as they are presented on the day — palanquins, arms, and the traces of courtly life.",
      },
      {
        title: "The Ganges between two banks",
        copy: "See how Ramnagar and Varanasi face one another across the river.",
      },
      {
        title: "Architecture over spectacle",
        copy: "Carved jharokhas, courtyards, and the weight of a working historic residence.",
      },
      {
        title: "A quieter tempo",
        copy: "Ramnagar is less crowded than the principal ghats; the half-day has room to look.",
      },
    ],
    experienceFlow: [
      {
        step: "01",
        title: "Cross to Ramnagar",
        copy: "You travel from Varanasi to Ramnagar with your host. The journey itself is part of reading the two banks.",
      },
      {
        step: "02",
        title: "Arrive at the fort",
        copy: "The sandstone façade sits above the river. You enter according to the day’s visitor hours.",
      },
      {
        step: "03",
        title: "Walk the interiors",
        copy: "Rooms, terraces, and displays are seen as they are open. Not every chamber is always accessible.",
      },
      {
        step: "04",
        title: "Look back to Varanasi",
        copy: "Time on the river-facing side places the old city in view before you return.",
      },
    ],
    included: [
      "Local host for a half-day heritage outing",
      "Travel between Varanasi and Ramnagar for this experience",
      "Orientation to the fort’s history and its relationship to the city",
    ],
    excluded: [
      "Monument or museum tickets, if charged on the day",
      "Meals and personal purchases",
      "Access to private or closed apartments of the fort",
      "Activities in Varanasi’s old city beyond this heritage outing",
    ],
    goodToKnow: [
      "Comfortable footwear helps on stone floors and uneven thresholds.",
      "Visitor hours and open rooms can change; the visit follows what is available.",
      "The fort is a historic residence, not a reconstructed theme site.",
      "Sun on the terraces can be strong; a hat is useful in warmer months.",
      "Photography rules may vary inside certain rooms.",
    ],
    bestFor: [
      "Culture seekers",
      "Families",
      "First-time visitors",
      "Photography enthusiasts",
    ],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ramnagar_Fort%2C_Ramnagar%2C_Varanasi%2C_Uttar_Pradesh_05.jpg/1920px-Ramnagar_Fort%2C_Ramnagar%2C_Varanasi%2C_Uttar_Pradesh_05.jpg",
      alt: "Ramnagar Fort on the Ganges opposite Varanasi",
      sourceName: "Wikimedia Commons — Ramnagar Fort, Varanasi",
      sourceUrl: wiki(
        "Ramnagar_Fort,_Ramnagar,_Varanasi,_Uttar_Pradesh_05.jpg",
      ),
      note: instagramInspected,
    },
    galleryImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Main_Entrance_of_Ramnagar_Fort%2C_Varanasi.jpg/1920px-Main_Entrance_of_Ramnagar_Fort%2C_Varanasi.jpg",
        alt: "Main entrance of Ramnagar Fort, Varanasi",
        sourceName: "Wikimedia Commons — Main Entrance of Ramnagar Fort",
        sourceUrl: wiki("Main_Entrance_of_Ramnagar_Fort,_Varanasi.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Inside_Ramnagar_fort%2C_Varanasi.jpg/1920px-Inside_Ramnagar_fort%2C_Varanasi.jpg",
        alt: "Interior courtyard of Ramnagar Fort",
        sourceName: "Wikimedia Commons — Inside Ramnagar Fort",
        sourceUrl: wiki("Inside_Ramnagar_fort,_Varanasi.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Ganga_River_and_Ramnagar_bridge_from_Ramnagar_fort%2C_Vyasa_kasi%2C_Varanasi%2C_U.P.jpg/1920px-The_Ganga_River_and_Ramnagar_bridge_from_Ramnagar_fort%2C_Vyasa_kasi%2C_Varanasi%2C_U.P.jpg",
        alt: "The Ganges and bridge seen from Ramnagar Fort",
        sourceName: "Wikimedia Commons — Ganga River from Ramnagar Fort",
        sourceUrl: wiki(
          "The_Ganga_River_and_Ramnagar_bridge_from_Ramnagar_fort,_Vyasa_kasi,_Varanasi,_U.P.jpg",
        ),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Ramnagar_Fort_in_Varanasi.jpg",
        alt: "Ramnagar Fort above the river at Varanasi",
        sourceName: "Wikimedia Commons — Ramnagar Fort in Varanasi",
        sourceUrl: wiki("Ramnagar_Fort_in_Varanasi.jpg"),
        note: instagramInspected,
      },
    ],
    seoTitle: "Ramnagar Fort & Varanasi Heritage | DEMO",
    seoDescription:
      "A half-day heritage experience at Ramnagar Fort, the historic riverside seat facing Varanasi across the Ganges.",
  },
  {
    id: "sarnath-spiritual-buddhist-heritage",
    slug: "sarnath-spiritual-buddhist-heritage",
    title: "Sarnath Spiritual & Buddhist Heritage",
    shortTitle: "Sarnath",
    location: "Sarnath, Uttar Pradesh",
    duration: "Half day",
    shortDescription:
      "A considered visit to Sarnath, where the Buddha gave his first sermon, among stupas, gardens, and archaeological remains.",
    overview:
      "A short way north-east of Varanasi, Sarnath is quieter. Deer Park is the traditional site of the Buddha’s first teaching — the Dhammacakkappavattana, the turning of the wheel of the dharma — given to five companions after his awakening. The Dhamek Stupa, a great cylindrical monument of brick and stone, still marks that association. Around it lie monastic ruins, later temples, and an archaeological museum landscape.\n\nThis half-day is for travellers who want Buddhist heritage without haste. You walk the grounds with a host who can place the monuments in sequence, leave space for the site’s stillness, and return you to Varanasi without treating Sarnath as a tick on a map.",
    highlights: [
      {
        title: "Dhamek Stupa",
        copy: "The principal monument of the site, associated with the Buddha’s first sermon.",
      },
      {
        title: "Archaeological grounds",
        copy: "Monastic remains, votive stupas, and the layered history of a pilgrimage landscape.",
      },
      {
        title: "A quieter atmosphere",
        copy: "Gardens and open sky after the density of Varanasi’s lanes.",
      },
      {
        title: "Cultural significance",
        copy: "Sarnath remains one of Buddhism’s most important places of memory.",
      },
      {
        title: "Time to walk",
        copy: "The site rewards slow circuits rather than a single photograph.",
      },
    ],
    experienceFlow: [
      {
        step: "01",
        title: "Travel from Varanasi",
        copy: "Sarnath lies a short drive from the city. Your host meets you and travels with you to the site.",
      },
      {
        step: "02",
        title: "Enter the grounds",
        copy: "You arrive at the archaeological park. Tickets and opening hours follow the day’s official arrangements.",
      },
      {
        step: "03",
        title: "Dhamek and the remains",
        copy: "You walk the stupa, nearby ruins, and the wider precinct at an unhurried pace.",
      },
      {
        step: "04",
        title: "Return to the city",
        copy: "The half-day concludes with the journey back to Varanasi.",
      },
    ],
    included: [
      "Local host for a half-day at Sarnath",
      "Travel between Varanasi and Sarnath for this experience",
      "Orientation to the site’s Buddhist history and principal monuments",
    ],
    excluded: [
      "Archaeological park or museum tickets, if charged on the day",
      "Special access or private opening of monuments",
      "Meals and personal purchases",
      "Guide credentials or permissions beyond a local host",
    ],
    goodToKnow: [
      "Comfortable walking shoes are useful on paths and lawns.",
      "The site is largely outdoors; sun and seasonal heat should be considered.",
      "It is an active pilgrimage place as well as an archaeological park — move quietly near those at prayer.",
      "Museum galleries, when visited, often restrict photography; follow posted rules.",
      "Opening hours are set by the site authorities and can vary.",
    ],
    bestFor: [
      "Culture seekers",
      "Solo travellers",
      "Families",
      "First-time visitors",
    ],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dhamek_Stupa%2C_2025.jpg/1920px-Dhamek_Stupa%2C_2025.jpg",
      alt: "Dhamek Stupa at Sarnath near Varanasi",
      sourceName: "Wikimedia Commons — Dhamek Stupa, Sarnath",
      sourceUrl: wiki("Dhamek_Stupa,_2025.jpg"),
      note: instagramInspected,
    },
    galleryImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Dhamek_Stupa_%2C_500_CE_%2CSarnath%2C_Varanasi_Uttar_Pradesh.jpg",
        alt: "Dhamek Stupa rising above the grounds at Sarnath",
        sourceName: "Wikimedia Commons — Dhamek Stupa, 2025",
        sourceUrl: wiki("Dhamek_Stupa,_2025.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Site_of_Dhamek_stupa_and_Monastery_Sarnath%2C_Varanasi_Uttar_Pradesh.jpg",
        alt: "Monastic remains beside Dhamek Stupa, Sarnath",
        sourceName: "Wikimedia Commons — Site of Dhamek stupa and monastery",
        sourceUrl: wiki(
          "Site_of_Dhamek_stupa_and_Monastery_Sarnath,_Varanasi_Uttar_Pradesh.jpg",
        ),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Carvings_on_the_Dhamek_Stupa%2C_South_Western_side.jpg",
        alt: "Stone carvings on the Dhamek Stupa",
        sourceName: "Wikimedia Commons — Carvings on the Dhamek Stupa",
        sourceUrl: wiki("Carvings_on_the_Dhamek_Stupa,_South_Western_side.jpg"),
        note: instagramInspected,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Group_of_Votive_Stupas%2C_Dhamek_Stupa_Complex%2C_Varanasi.jpg",
        alt: "Votive stupas in the Dhamek Stupa complex, Sarnath",
        sourceName: "Wikimedia Commons — Group of votive stupas",
        sourceUrl: wiki(
          "Group_of_Votive_Stupas,_Dhamek_Stupa_Complex,_Varanasi.jpg",
        ),
        note: instagramInspected,
      },
    ],
    seoTitle: "Sarnath Spiritual & Buddhist Heritage | DEMO",
    seoDescription:
      "A half-day at Sarnath near Varanasi — Dhamek Stupa, Buddhist heritage, and the archaeological landscape of the Buddha’s first sermon.",
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getExperienceBySlug(slug: string) {
  return getExperience(slug);
}

export function getExperienceSlugs() {
  return experiences.map((experience) => experience.slug);
}

export function experiencePath(experience: Experience) {
  return `/experiences/${experience.slug}`;
}

export function enquiryHref(slug: string) {
  return `/contact?experience=${slug}`;
}
