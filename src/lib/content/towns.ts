export type TownService = "mobile-grooming" | "spa-services" | "in-house-grooming" | "daycare-boarding";

export type TownPage = {
  slug: string;
  service: TownService;
  town: string;
  region?: string;
  metaTitle: string;
  metaDescription: string;
  localIntro?: string;
  localFeatures?: string[];
  distanceFromResort?: string;
};

export const towns = {
  // ---- Mobile dog grooming — town pages ----
  "mobile-dog-grooming-glen-cove-ny": {
    slug: "mobile-dog-grooming-glen-cove-ny",
    service: "mobile-grooming",
    town: "Glen Cove",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Glen Cove NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Glen Cove, NY — a North Shore harbor city of waterfront neighborhoods and beach-walking dogs. One-on-one sessions at your home.",
    localIntro:
      "Glen Cove is a North Shore harbor city with a real downtown, working waterfront, and homes that range from Pratt Boulevard estates to tighter blocks near Garvies Point. Many of the dogs we groom here are regulars at Pratt Park, Morgan Park, and the Garvies Point Preserve trails — meaning a lot of salt air, sand, and pollen ends up in their coats.",
    localFeatures: [
      "Waterfront and trail dogs — we factor in sand, salt, and pollen rinses",
      "Driveways and side streets give our vans steady parking access",
      "Popular here: doodles, retrievers, and small mixed breeds",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-massapequa-ny": {
    slug: "mobile-dog-grooming-massapequa-ny",
    service: "mobile-grooming",
    town: "Massapequa",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Massapequa NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Massapequa, NY — South Shore neighborhoods near the Massapequa Preserve and Tackapausha. Hand-dried, never crated, in your driveway.",
    localIntro:
      "Massapequa sits on the South Shore between Merrick Road and the Massapequa Preserve, a long green corridor where many local dogs log their daily walks. Whether you're in the Massapequa Park village grid or closer to the bay, our van fits comfortably on the typical residential block here.",
    localFeatures: [
      "Preserve-walkers often need extra brushing — burrs and ticks are common",
      "Quiet residential streets give us easy van setup",
      "Convenient for families along Sunrise Highway and Merrick Road",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-jericho-ny": {
    slug: "mobile-dog-grooming-jericho-ny",
    service: "mobile-grooming",
    town: "Jericho",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Jericho NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Jericho, NY — central Nassau homes off the Jericho Turnpike corridor. We bring the spa to your driveway, no salon trip needed.",
    localIntro:
      "Jericho sits in central Nassau along the Jericho Turnpike corridor, with quiet residential pockets tucked just off one of the Island's busiest commercial stretches. Many of our Jericho clients tell us the biggest reason they switched to mobile is avoiding the turnpike traffic on a Saturday morning.",
    localFeatures: [
      "No need to fight Jericho Turnpike traffic to get to a salon",
      "Cul-de-sac and side-street homes give vans easy access",
      "Common requests: full grooms for doodles, shih tzus, and small terriers",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-syosset-ny": {
    slug: "mobile-dog-grooming-syosset-ny",
    service: "mobile-grooming",
    town: "Syosset",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Syosset NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Syosset, NY — leafy central Nassau streets near Muttontown Preserve. Calm, one-on-one sessions, hand-dried in your driveway.",
    localIntro:
      "Syosset is a leafy central Nassau suburb of wide lots, mature trees, and easy access to Muttontown Preserve. Many of the dogs we groom here are part of busy commuter households where a salon trip is hard to fit in around school pickups and the LIRR schedule.",
    localFeatures: [
      "Wide driveways throughout Syosset make van setup straightforward",
      "Ideal for commuter families — we work around weekday schedules",
      "Often we see retrievers, doodles, and active herding mixes",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-westbury-ny": {
    slug: "mobile-dog-grooming-westbury-ny",
    service: "mobile-grooming",
    town: "Westbury",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Westbury NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Westbury, NY — central Nassau homes near Eisenhower Park and Old Westbury Gardens. One-on-one grooming at your door.",
    localIntro:
      "Westbury sits in central Nassau, close to Eisenhower Park and the historic grounds of Old Westbury Gardens. Our Westbury clients live across a real mix of housing — village blocks, post-war ranches, and newer townhome communities — and the common thread is wanting a calmer alternative to a busy salon.",
    localFeatures: [
      "Easy access from both the Meadowbrook and Wantagh parkways",
      "Park-walking dogs benefit from regular bath and brush appointments",
      "Vans fit comfortably in most Westbury driveways and side streets",
    ],
    distanceFromResort: "About 15 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-roslyn-ny": {
    slug: "mobile-dog-grooming-roslyn-ny",
    service: "mobile-grooming",
    town: "Roslyn",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Roslyn NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Roslyn, NY — historic North Shore village near Roslyn Harbor and the duck pond. Hand-dried, one-on-one, in your driveway.",
    localIntro:
      "Roslyn is a historic North Shore village wrapped around Roslyn Harbor and the duck pond, with hilly side streets that climb up from Main Street. Many of the homes here are older and tucked along narrow drives, so our mobile setup is often a much easier fit than asking a dog to ride somewhere new.",
    localFeatures: [
      "Hill-and-harbor streets — our drivers know how to position the van",
      "Older homes often lack a convenient garage for a wet, post-bath dog",
      "Common breeds we see: cavaliers, doodles, and small terrier mixes",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-port-washington-ny": {
    slug: "mobile-dog-grooming-port-washington-ny",
    service: "mobile-grooming",
    town: "Port Washington",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Port Washington NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Port Washington, NY — North Shore peninsula homes along Manhasset Bay. Calm one-on-one grooming at your front door.",
    localIntro:
      "Port Washington occupies its own peninsula reaching into Manhasset Bay, with neighborhoods that range from the village near the LIRR station to the waterfront blocks of Sands Point and Baxter Estates. Bay-walking dogs come home with a lot of salt and sand — regular baths really do make a difference here.",
    localFeatures: [
      "Bay and beach exposure means more frequent rinses for many coats",
      "Peninsula geography — we route appointments to avoid Main Street backups",
      "Many homes have narrow driveways; our vans only need a standard spot",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-new-hyde-park-ny": {
    slug: "mobile-dog-grooming-new-hyde-park-ny",
    service: "mobile-grooming",
    town: "New Hyde Park",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming New Hyde Park NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in New Hyde Park, NY — dense northwest Nassau streets near LIJ Medical Center. One-on-one in our fully equipped vans.",
    localIntro:
      "New Hyde Park sits on the northwest Nassau-Queens border, a dense suburb of bungalows, capes, and split-levels close to LIJ Medical Center and Lake Success. Driveways here tend to be narrower than further east, so our drivers are used to careful parking on a typical New Hyde Park block.",
    localFeatures: [
      "Vans designed to set up on tighter, more urban suburban streets",
      "Convenient for medical-center families with unpredictable schedules",
      "Great option for senior dogs who don't travel well anymore",
    ],
    distanceFromResort: "About 12 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-manhasset-ny": {
    slug: "mobile-dog-grooming-manhasset-ny",
    service: "mobile-grooming",
    town: "Manhasset",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Manhasset NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Manhasset, NY — North Shore Gold Coast neighborhoods including Plandome and Strathmore. Luxury one-on-one grooming at your door.",
    localIntro:
      "Manhasset is a Gold Coast North Shore community covering Plandome, Strathmore, Munsey Park, and the Miracle Mile of Northern Boulevard. Homes here sit on larger lots with longer drives, which suits mobile grooming well — there's almost always room to set the van up close to the front door.",
    localFeatures: [
      "Plandome and Strathmore lots easily accommodate our vans",
      "Common requests: doodle full grooms, retriever de-shed packages",
      "Reliable option for families balancing the Miracle Mile commute",
    ],
    distanceFromResort: "About 22 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-locust-valley-ny": {
    slug: "mobile-dog-grooming-locust-valley-ny",
    service: "mobile-grooming",
    town: "Locust Valley",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Locust Valley NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Locust Valley, NY — wooded Gold Coast hamlet near Bayville and Mill Neck. Hand-dried, one-on-one, in your driveway.",
    localIntro:
      "Locust Valley is a quiet, wooded Gold Coast hamlet north of Glen Cove, sitting between Bayville and Mill Neck with a small walkable village center around the LIRR station. Many of the homes here are set back behind long, tree-lined drives — exactly the kind of place where a salon trip is more disruptive than just hosting us in the driveway.",
    localFeatures: [
      "Long, private drives are easy for our vans to navigate",
      "Wooded yards mean we routinely check coats for burrs and ticks",
      "Often serves Bayville, Mill Neck, and Matinecock households too",
    ],
    distanceFromResort: "About 30 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-great-neck-ny": {
    slug: "mobile-dog-grooming-great-neck-ny",
    service: "mobile-grooming",
    town: "Great Neck",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Great Neck NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Great Neck, NY — northwest Nassau peninsula including Kings Point and Lake Success. One-on-one grooming at your home.",
    localIntro:
      "Great Neck is a peninsula of villages — Kings Point, Great Neck Estates, Lake Success, Russell Gardens — stretching into Manhasset Bay. Streets here range from the tighter blocks near the LIRR village to the wide, hilly drives of Kings Point, and our vans handle both comfortably.",
    localFeatures: [
      "Coverage across all the Great Neck villages and Kings Point",
      "Convenient for families with a tight Manhattan commute schedule",
      "Many older homes lack a good post-bath drying space — we bring our own",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-glen-head-ny": {
    slug: "mobile-dog-grooming-glen-head-ny",
    service: "mobile-grooming",
    town: "Glen Head",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Glen Head NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Glen Head, NY — North Shore hamlet between Glen Cove and Sea Cliff. Calm, one-on-one grooming in your driveway.",
    localIntro:
      "Glen Head is a small North Shore hamlet wedged between Glen Cove and Sea Cliff, with quiet, hilly residential streets and easy access to the LIRR. Many of the dogs we groom here split time between Glen Head and walks down in Sea Cliff village or along the Hempstead Harbor shoreline.",
    localFeatures: [
      "Hilly side streets — our drivers position vans for safe, level setup",
      "Shoreline-walking dogs benefit from regular salt and sand rinses",
      "Great fit for households also using Sea Cliff and Old Brookville",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "mobile-dog-grooming-garden-city-ny": {
    slug: "mobile-dog-grooming-garden-city-ny",
    service: "mobile-grooming",
    town: "Garden City",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Garden City NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Garden City, NY — central Nassau planned community near Adelphi and the Cathedral. Hand-dried, one-on-one in your driveway.",
    localIntro:
      "Garden City is a carefully planned central Nassau village with wide tree-lined streets, the Cathedral of the Incarnation at its heart, and Adelphi University on the eastern edge. The classic Garden City lot — generous driveway, large front yard — is essentially purpose-built for mobile grooming.",
    localFeatures: [
      "Generous driveways make Garden City an easy fit for our vans",
      "Many families coordinate appointments around school pickups",
      "Common here: doodles, golden retrievers, and small spaniel breeds",
    ],
    distanceFromResort: "About 10 minutes from our Franklin Square resort",
  },

  // ---- Mobile spa services — region pages ----
  "mobile-pet-spa-services-nassau-county-ny": {
    slug: "mobile-pet-spa-services-nassau-county-ny",
    service: "spa-services",
    town: "Nassau County",
    metaTitle: "Mobile Pet Spa Services Nassau County NY | Planet Pooch",
    metaDescription:
      "Mobile pet spa services across Nassau County, NY — North Shore Gold Coast to South Shore village blocks. Plus and Premium upgrades in your driveway.",
    localIntro:
      "Nassau County stretches from the dense village blocks of the South Shore up to the Gold Coast estates of the North Shore — and our mobile spa vans cover both, plus everything in between. From Garden City to Glen Cove, Great Neck to Massapequa, we route appointments so a fully equipped spa can pull up to your driveway on a regular schedule.",
    localFeatures: [
      "County-wide coverage from North Shore harbors to South Shore villages",
      "Boutique products including Warren London and HydraGroom",
      "Plus and Premium spa upgrades available on every route",
    ],
    distanceFromResort: "Routed daily from our Franklin Square resort",
  },
  "mobile-pet-spa-services-franklin-square-ny": {
    slug: "mobile-pet-spa-services-franklin-square-ny",
    service: "spa-services",
    town: "Franklin Square",
    metaTitle: "Mobile Pet Spa Services Franklin Square NY | Planet Pooch",
    metaDescription:
      "Mobile pet spa services in Franklin Square, NY — our hometown. Luxury grooming and Plus / Premium spa upgrades at your driveway, just minutes from our resort.",
    localIntro:
      "Franklin Square is our home — our resort is right here, and our mobile vans start every day from this hamlet on the South Shore-central Nassau border. For Franklin Square families, the choice is the easiest one we offer: mobile spa at your driveway, or a short drive to drop in for in-house grooming with daycare.",
    localFeatures: [
      "Our resort is right here in Franklin Square — short drive or mobile",
      "Frequent route stops mean flexible appointment windows",
      "Easy coordination with daycare, boarding, or training add-ons",
    ],
    distanceFromResort: "This is our hometown",
  },

  // ---- Other grooming region/town variants ----
  "grooming-franklin-square-ny": {
    slug: "grooming-franklin-square-ny",
    service: "mobile-grooming",
    town: "Franklin Square",
    metaTitle: "Dog Grooming Franklin Square NY | Planet Pooch",
    metaDescription:
      "Dog grooming in Franklin Square, NY — our hometown. Mobile grooming at your home, plus in-house grooming for daycare and boarding clients at our resort.",
    localIntro:
      "Franklin Square is the South Shore-central Nassau hamlet we call home — our resort and grooming operation are based right here. For neighbors, that means two equally easy options: a mobile van at your driveway or a short drive to drop your dog in for in-house grooming alongside daycare or boarding.",
    localFeatures: [
      "Choose mobile at your door or in-house at the resort",
      "Easy bundling with daycare, boarding, or training services",
      "We're your literal neighbors — questions are always welcome",
    ],
    distanceFromResort: "This is our hometown",
  },

  // ---- Daycare / boarding — town pages ----
  "daycare-boarding-valley-stream-ny": {
    slug: "daycare-boarding-valley-stream-ny",
    service: "daycare-boarding",
    town: "Valley Stream",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Valley Stream NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Valley Stream, NY families — a short drive over the border to our Franklin Square resort. Group play and cozy suites.",
    localIntro:
      "Valley Stream sits on the Nassau-Queens border just south of Franklin Square, with neighborhoods that range from the Gibson and Mill Brook areas to the village near the LIRR. For Valley Stream families, our resort is a quick drive up Franklin Avenue — easy enough for a same-day daycare drop-off.",
    localFeatures: [
      "Short drive from any Valley Stream neighborhood",
      "Convenient morning drop-off for commuting families",
      "Many Valley Stream clients use daycare 2-3 days a week",
    ],
    distanceFromResort: "About 8 minutes from our Franklin Square resort",
  },
  "dog-daycare-boarding-franklin-square-ny": {
    slug: "dog-daycare-boarding-franklin-square-ny",
    service: "daycare-boarding",
    town: "Franklin Square",
    region: "Nassau County",
    metaTitle: "Doggy Daycare & Boarding Franklin Square NY | Planet Pooch",
    metaDescription:
      "Doggy daycare and overnight boarding in Franklin Square, NY — our home hamlet. Supervised play, enrichment, and cozy suites just minutes from your door.",
    localIntro:
      "Franklin Square is our hometown, and our resort is right here on the South Shore-central Nassau border. For neighbors, that proximity matters: a quick drop-off in the morning, an evening pickup with no detour, and a familiar face at the front desk who already knows your dog.",
    localFeatures: [
      "We're your neighbors — visit anytime during operating hours",
      "Short drive from anywhere in Franklin Square",
      "Most local dogs become regulars 1-3 days a week",
    ],
    distanceFromResort: "This is our hometown — minutes from any address",
  },
  "daycare-boarding-elmont-ny": {
    slug: "daycare-boarding-elmont-ny",
    service: "daycare-boarding",
    town: "Elmont",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Elmont NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Elmont, NY families — a quick drive from the Belmont and Argo Village area to our Franklin Square resort.",
    localIntro:
      "Elmont sits just east of the Queens border, home to Belmont Park and a dense mix of suburban blocks across Argo Village, Floral Park-Bellerose, and the area around UBS Arena. Our resort is a short ride east on the Southern State or Hempstead Turnpike — easy for morning drop-offs before work.",
    localFeatures: [
      "Quick drive from Belmont, Argo Village, and Stewart Manor border",
      "Useful for families with unpredictable Manhattan commute schedules",
      "Especially handy for event days at UBS Arena or Belmont Park",
    ],
    distanceFromResort: "About 12 minutes from our Franklin Square resort",
  },
  "daycare-boarding-floral-park-ny": {
    slug: "daycare-boarding-floral-park-ny",
    service: "daycare-boarding",
    town: "Floral Park",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Floral Park NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Floral Park, NY families — minutes from the village to our Franklin Square resort. Group play and cozy suites.",
    localIntro:
      "Floral Park is a tight-knit village on the Nassau-Queens border, with a walkable downtown along Tulip Avenue and densely set residential blocks. Many of our Floral Park clients have small to medium dogs whose homes don't have a large yard — daycare gives them the running and socialization their backyards can't.",
    localFeatures: [
      "Daycare fills the yard gap for compact Floral Park lots",
      "Short drive south to our resort, even at rush hour",
      "Common breeds we host: small terriers, bichons, and cavaliers",
    ],
    distanceFromResort: "About 12 minutes from our Franklin Square resort",
  },
  "daycare-boarding-garden-city-ny": {
    slug: "daycare-boarding-garden-city-ny",
    service: "daycare-boarding",
    town: "Garden City",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Garden City NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Garden City, NY families — a quick ride down to our Franklin Square resort. Supervised group play and enrichment.",
    localIntro:
      "Garden City families tend to keep busy schedules — the commuter rhythm, school pickups, and weekends at Eisenhower Park. Daycare with us takes one part of that puzzle off the calendar, with consistent drop-off windows and a short, predictable drive from any part of the village.",
    localFeatures: [
      "Easy ride from any part of Garden City via Franklin Avenue",
      "Reliable schedule for commuter and school-pickup households",
      "Many Garden City retrievers and doodles are daycare regulars",
    ],
    distanceFromResort: "About 10 minutes from our Franklin Square resort",
  },
  "daycare-boarding-lynbrook-ny": {
    slug: "daycare-boarding-lynbrook-ny",
    service: "daycare-boarding",
    town: "Lynbrook",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Lynbrook NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Lynbrook, NY families — a short ride from the village to our Franklin Square resort. Group play and cozy suites.",
    localIntro:
      "Lynbrook is a compact South Shore village along the Sunrise Highway corridor, with a walkable downtown clustered around the LIRR station. Our resort is a short drive north, easy to fit into a commuter morning or an after-work pickup.",
    localFeatures: [
      "Convenient north-on-Peninsula-Boulevard ride to our resort",
      "Fits well with LIRR commuter morning schedules",
      "Compact village lots — daycare gives dogs real running room",
    ],
    distanceFromResort: "About 10 minutes from our Franklin Square resort",
  },
  "daycare-boarding-malvern-ny": {
    slug: "daycare-boarding-malvern-ny",
    service: "daycare-boarding",
    town: "Malverne",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Malverne NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Malverne, NY families — a short ride from the village to our Franklin Square resort. Group play and cozy suites.",
    localIntro:
      "Malverne is a small village just north of Lynbrook with a quiet downtown around the LIRR station and tree-lined residential streets. We're a familiar option here — many Malverne families have used our resort across multiple dogs over the years.",
    localFeatures: [
      "Very short drive — Malverne is essentially a neighbor",
      "Familiar option for multi-generation Malverne dog households",
      "Good fit for small-to-medium breeds common in the village",
    ],
    distanceFromResort: "About 8 minutes from our Franklin Square resort",
  },
  "daycare-boarding-mineola-ny": {
    slug: "daycare-boarding-mineola-ny",
    service: "daycare-boarding",
    town: "Mineola",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Mineola NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Mineola, NY families — short ride from the county seat to our Franklin Square resort. Supervised group play.",
    localIntro:
      "Mineola is the Nassau County seat, with a busy downtown around the courthouse, NYU Langone Long Island, and the LIRR station. Many of our Mineola clients work nearby — at the hospital, the county complex, or in the village — and value being able to grab their dog at the end of a long shift.",
    localFeatures: [
      "Convenient for hospital and county employees on shift schedules",
      "Short drive south from any Mineola neighborhood",
      "Boarding works well when a court or hospital schedule runs long",
    ],
    distanceFromResort: "About 12 minutes from our Franklin Square resort",
  },
  "daycare-boarding-new-hyde-park-ny": {
    slug: "daycare-boarding-new-hyde-park-ny",
    service: "daycare-boarding",
    town: "New Hyde Park",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding New Hyde Park NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for New Hyde Park, NY families — short ride from the LIJ area to our Franklin Square resort. Supervised group play.",
    localIntro:
      "New Hyde Park is a dense northwest Nassau suburb tucked around LIJ Medical Center and Lake Success, with smaller lots and busy streets. Daycare with us gives those dogs the kind of room and stimulation that's hard to find inside the village itself.",
    localFeatures: [
      "Daycare gives New Hyde Park dogs the open space their lots can't",
      "Workable schedule for LIJ and hospital staff households",
      "Short south-bound ride to our Franklin Square resort",
    ],
    distanceFromResort: "About 12 minutes from our Franklin Square resort",
  },
  "daycare-boarding-stewart-manor-ny": {
    slug: "daycare-boarding-stewart-manor-ny",
    service: "daycare-boarding",
    town: "Stewart Manor",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Stewart Manor NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Stewart Manor, NY families — a very short ride from our neighbor village to our Franklin Square resort.",
    localIntro:
      "Stewart Manor is one of Nassau's smallest villages, a quiet residential pocket between Floral Park, New Hyde Park, and Garden City. For Stewart Manor families, our resort is essentially next door — a short, low-stress ride that even nervous dogs handle well.",
    localFeatures: [
      "Stewart Manor is one of our closest neighbor villages",
      "Quick ride works well for first-time daycare dogs",
      "Easy coordination with school and commuter schedules",
    ],
    distanceFromResort: "About 8 minutes from our Franklin Square resort",
  },
  "daycare-boarding-west-hempstead-ny": {
    slug: "daycare-boarding-west-hempstead-ny",
    service: "daycare-boarding",
    town: "West Hempstead",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding West Hempstead NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for West Hempstead, NY families — a short ride from Hall's Pond and Echo Park to our Franklin Square resort.",
    localIntro:
      "West Hempstead is right next to Franklin Square, with neighborhoods stretching from Hall's Pond Park to the Echo Park area and the Cathedral Gardens section. For West Hempstead families, our resort is a few minutes' drive — close enough that many of our staff are local neighbors too.",
    localFeatures: [
      "We're essentially next door — very short drive in either direction",
      "Good fit for park-walking dogs from Hall's Pond and Echo Park",
      "Reliable daycare schedule for commuter and school families",
    ],
    distanceFromResort: "About 6 minutes from our Franklin Square resort",
  },
  "daycare-boarding-great-neck-ny": {
    slug: "daycare-boarding-great-neck-ny",
    service: "daycare-boarding",
    town: "Great Neck",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Great Neck NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Great Neck, NY families — a short drive from the peninsula villages to our Franklin Square resort.",
    localIntro:
      "Great Neck is a peninsula of villages — Great Neck Estates, Great Neck Plaza, Russell Gardens, and Lake Success — stretching into Manhasset Bay. The LIRR express to Penn makes it a commuter hub, and daycare fits that rhythm perfectly: drop off on the way to the station, pick up on the way home.",
    localFeatures: [
      "Convenient for LIRR commuters heading to and from Manhattan",
      "Coverage across all the Great Neck peninsula villages",
      "Many Great Neck families combine regular daycare with holiday boarding",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "daycare-boarding-kings-point-ny": {
    slug: "daycare-boarding-kings-point-ny",
    service: "daycare-boarding",
    town: "Kings Point",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Kings Point NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Kings Point, NY families — from the Gold Coast waterfront to our Franklin Square resort.",
    localIntro:
      "Kings Point sits at the northern tip of the Great Neck peninsula, a Gold Coast village of waterfront estates, the US Merchant Marine Academy, and quiet, winding roads. Dogs here often have large yards but fewer neighborhood playmates — daycare gives them the socialization their secluded lots can't.",
    localFeatures: [
      "Daycare fills the socialization gap for estate-lot dogs",
      "Boarding works well for travel-heavy Kings Point households",
      "Easy drive south through Great Neck to our resort",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "daycare-boarding-port-washington-ny": {
    slug: "daycare-boarding-port-washington-ny",
    service: "daycare-boarding",
    town: "Port Washington",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Port Washington NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Port Washington, NY families — from the Manhasset Bay peninsula to our Franklin Square resort.",
    localIntro:
      "Port Washington occupies its own peninsula on Manhasset Bay, with a walkable village near the LIRR station and residential neighborhoods stretching out toward Sands Point and Baxter Estates. Many Port Washington dogs are active bay-walkers who benefit from the structured play and socialization daycare provides.",
    localFeatures: [
      "Fits the LIRR commuter schedule — drop off, train, pick up",
      "Active bay-walking dogs get structured play and rest periods",
      "Boarding provides peace of mind for weekend sailing and travel",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "daycare-boarding-manhasset-ny": {
    slug: "daycare-boarding-manhasset-ny",
    service: "daycare-boarding",
    town: "Manhasset",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Manhasset NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Manhasset, NY families — from the Gold Coast North Shore to our Franklin Square resort.",
    localIntro:
      "Manhasset is a Gold Coast North Shore community covering Plandome, Strathmore, Munsey Park, and the Miracle Mile corridor along Northern Boulevard. Busy professional households here value the predictable daycare rhythm — drop off on the way to work, pick up on the way home — and boarding when travel takes them away for a few days.",
    localFeatures: [
      "Predictable schedule for Miracle Mile and Northern Boulevard commuters",
      "Plandome and Strathmore families use daycare and boarding regularly",
      "Common breeds we host: doodles, retrievers, and cavaliers",
    ],
    distanceFromResort: "About 22 minutes from our Franklin Square resort",
  },
  "daycare-boarding-roslyn-ny": {
    slug: "daycare-boarding-roslyn-ny",
    service: "daycare-boarding",
    town: "Roslyn",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Roslyn NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Roslyn, NY families — from the historic North Shore village to our Franklin Square resort.",
    localIntro:
      "Roslyn is a historic North Shore village wrapped around Roslyn Harbor and the duck pond, with residential neighborhoods extending into Roslyn Heights and Roslyn Estates. Many Roslyn families use daycare as a weekly routine and boarding for holiday weekends — their dogs already know the staff and the space.",
    localFeatures: [
      "Covers Roslyn village, Roslyn Heights, and Roslyn Estates",
      "Daycare-to-boarding transition is seamless — dogs know the routine",
      "Easy drive south to our Franklin Square resort",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "daycare-boarding-sands-point-ny": {
    slug: "daycare-boarding-sands-point-ny",
    service: "daycare-boarding",
    town: "Sands Point",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Sands Point NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Sands Point, NY families — from the Gold Coast waterfront to our Franklin Square resort.",
    localIntro:
      "Sands Point is a secluded Gold Coast village at the tip of the Port Washington peninsula, with large waterfront estates, the Sands Point Preserve, and very few commercial services nearby. For Sands Point dogs, daycare provides the socialization and stimulation that their quiet, spacious properties don't — and boarding means trusted overnight care when families travel.",
    localFeatures: [
      "Socialization for dogs on large, secluded waterfront estates",
      "Boarding trusted by families who travel frequently",
      "Drive through Port Washington to reach our resort",
    ],
    distanceFromResort: "About 30 minutes from our Franklin Square resort",
  },
  "daycare-boarding-brookville-ny": {
    slug: "daycare-boarding-brookville-ny",
    service: "daycare-boarding",
    town: "Brookville",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Brookville NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Brookville, NY families — from the Gold Coast estate country to our Franklin Square resort.",
    localIntro:
      "Brookville is classic Gold Coast estate country — large wooded lots, long private drives, and the kind of quiet, rural feel that's rare this close to the city. Dogs here have room to roam but often lack regular playmates, so daycare gives them the social time and structured activity their properties can't replicate.",
    localFeatures: [
      "Daycare provides socialization for estate-lot dogs",
      "Especially practical for multi-dog households",
      "Boarding pairs well with in-house grooming for a fresh pickup",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },

  // ---- In-house grooming — town pages ----
  "dog-grooming-manhasset-ny": {
    slug: "dog-grooming-manhasset-ny",
    service: "in-house-grooming",
    town: "Manhasset",
    region: "Nassau County",
    metaTitle: "Dog Grooming Manhasset NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Manhasset, NY families — mobile at your Gold Coast home, or in-house at our Franklin Square resort for daycare and boarding clients.",
    localIntro:
      "Manhasset families work with us two ways: the mobile van pulls up to driveways in Plandome, Strathmore, and Munsey Park, and the resort's in-house grooming bay handles dogs already enrolled in daycare or boarding. Many clients use both, depending on the week.",
    localFeatures: [
      "Mobile grooming across Plandome, Strathmore, and Munsey Park",
      "In-house grooming when your dog is already with us for boarding",
      "Easy to bundle a full groom with a multi-night stay",
    ],
    distanceFromResort: "About 22 minutes from our Franklin Square resort",
  },
  "dog-grooming-brookville-ny": {
    slug: "dog-grooming-brookville-ny",
    service: "in-house-grooming",
    town: "Brookville",
    region: "Nassau County",
    metaTitle: "Dog Grooming Brookville NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Brookville, NY families — mobile at your Gold Coast estate, or in-house at our Franklin Square resort during a daycare or boarding stay.",
    localIntro:
      "Brookville is classic Gold Coast estate country — large wooded lots, long private drives, and the kind of property where a salon trip is a real detour. Mobile grooming handles the day-to-day, and in-house grooming lets boarding clients come home freshly groomed without a separate appointment.",
    localFeatures: [
      "Long private drives — vans set up comfortably at the home",
      "Especially convenient for households with multiple dogs",
      "In-house grooming pairs naturally with multi-night boarding",
    ],
    distanceFromResort: "About 25 minutes from our Franklin Square resort",
  },
  "dog-grooming-roslyn-ny": {
    slug: "dog-grooming-roslyn-ny",
    service: "in-house-grooming",
    town: "Roslyn",
    region: "Nassau County",
    metaTitle: "Dog Grooming Roslyn NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Roslyn, NY families — mobile at your historic-village home, or in-house at our Franklin Square resort during daycare or boarding.",
    localIntro:
      "Roslyn families groom with us two ways: mobile vans for the day-to-day at your home in the historic village or up in Roslyn Estates and Roslyn Heights, and in-house grooming when your dog is already staying with us for daycare or boarding.",
    localFeatures: [
      "Mobile coverage across Roslyn village, Estates, and Heights",
      "In-house grooming bundled with overnight boarding stays",
      "Older village homes — mobile saves the wet-dog drive home",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "dog-grooming-old-westbury-ny": {
    slug: "dog-grooming-old-westbury-ny",
    service: "in-house-grooming",
    town: "Old Westbury",
    region: "Nassau County",
    metaTitle: "Dog Grooming Old Westbury NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Old Westbury, NY families — mobile at your estate, or in-house grooming at our Franklin Square resort during a daycare or boarding stay.",
    localIntro:
      "Old Westbury is a Gold Coast village of estate-scale lots, equestrian properties, and the grounds of Old Westbury Gardens. For households with multiple dogs and longer drives to anywhere, mobile grooming is often the practical choice — and in-house grooming covers the times your dog is boarding with us.",
    localFeatures: [
      "Estate-scale properties — vans set up right at the home",
      "Practical for multi-dog households",
      "In-house grooming during multi-night boarding stays",
    ],
    distanceFromResort: "About 20 minutes from our Franklin Square resort",
  },
  "dog-grooming-north-shore": {
    slug: "dog-grooming-north-shore",
    service: "in-house-grooming",
    town: "North Shore",
    region: "Long Island",
    metaTitle: "Dog Grooming North Shore Long Island | Planet Pooch",
    metaDescription:
      "Dog grooming across Long Island's North Shore — mobile at your Gold Coast home, or in-house grooming at our Franklin Square resort during a stay.",
    localIntro:
      "The North Shore runs from Great Neck out through Manhasset, Roslyn, Glen Cove, and into the Gold Coast hamlets of Brookville, Mill Neck, and Locust Valley. It's a region of harbors, hills, and large wooded lots — exactly the kind of geography where mobile grooming saves a real amount of time, and where in-house grooming during boarding fills in the rest.",
    localFeatures: [
      "Mobile coverage across the Gold Coast villages and hamlets",
      "In-house grooming bundled with daycare or boarding stays",
      "Designed for the long-drive, large-lot reality of the North Shore",
    ],
    distanceFromResort: "Routed daily from our Franklin Square resort",
  },
} satisfies Record<string, TownPage>;

export type TownSlug = keyof typeof towns;
