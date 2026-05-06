export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hasFullContent: boolean;
  intro?: string;
  sections?: BlogSection[];
};

const titleFromSlug = (slug: string): string =>
  decodeURIComponent(slug)
    .replace(/[^a-z0-9-]/gi, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const stub = (slug: string, title?: string): BlogPost => {
  const t = title ?? titleFromSlug(slug);
  return {
    slug,
    title: t,
    metaTitle: `${t} | Planet Pooch Blog`,
    metaDescription: `${t} — from the Planet Pooch blog. Long Island's luxury mobile grooming, daycare, boarding, training, and enrichment pet resort.`,
    hasFullContent: false,
  };
};

const fullPosts: Record<string, BlogPost> = {
  "why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety": {
    slug: "why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety",
    title: "Why You Should Have Your Dog Socialized — And How Not Socializing Them Can Lead to Separation Anxiety",
    metaTitle: "Why You Should Socialize Your Dog | Planet Pooch Blog",
    metaDescription:
      "Socialization is one of the most important parts of raising a well-adjusted dog — and it's a key factor in preventing separation anxiety.",
    hasFullContent: true,
    intro:
      "When we bring a dog into our homes, we want them to be happy, well-behaved, and comfortable in all environments. Socialization is one of the most important aspects of raising a well-adjusted dog. It's not just about letting your dog play with other dogs or people — it's about exposing them to various experiences, environments, and situations so they can learn how to navigate the world confidently. But what happens when a dog isn't properly socialized? One common consequence is separation anxiety — a condition that can lead to destructive behaviors, excessive barking, and emotional distress when left alone.",
    sections: [
      {
        heading: "What is socialization?",
        paragraphs: [
          "Socialization involves exposing your dog to different people, animals, environments, and situations in a controlled and positive way. It starts as early as possible — ideally during puppyhood — but it can also be done successfully with older dogs.",
        ],
        bullets: [
          "Become comfortable around other dogs, people, and new environments",
          "Learn proper behavior cues, like how to play nicely with other dogs",
          "Overcome fear of new things or situations",
          "Build confidence in unfamiliar circumstances",
          "Improve their relationship with you by understanding boundaries and expectations",
        ],
      },
      {
        heading: "How socialization reduces separation anxiety",
        paragraphs: [
          "Separation anxiety occurs when a dog becomes distressed when separated from their owner or primary caregiver. It's more than whining or barking when you head out the door — it's a serious emotional condition that can manifest in destructive behaviors, excessive drooling, house soiling, and even self-injury. While there are many factors that contribute to separation anxiety, socialization — or the lack of it — plays a significant role.",
          "Building confidence in different environments. Dogs that aren't socialized often become overly reliant on their owners. Without exposure to other people, animals, and places, they feel insecure when left alone. Early, frequent socialization teaches them to be confident in a variety of situations, which directly translates to handling alone time better.",
          "Reducing dependency. Dogs who haven't had exposure to other people or animals can become extremely attached to their owners. This dependence increases the likelihood of separation anxiety when the owner is away. Socialization helps dogs form positive associations with other dogs, pets, and strangers.",
          "Positive associations with being alone. During socialization, a dog learns to manage different situations both with you and without you. Whether it's being left with a family member or spending time at doggy daycare, positive experiences with alone time help dogs understand that separation doesn't always lead to negative outcomes.",
        ],
      },
      {
        heading: "The risks of not socializing your dog",
        paragraphs: [
          "Failing to socialize your dog can lead to over-attachment, fear-based behaviors, destructive behavior, and unpredictable reactions. Without socialization, dogs may not be able to predict how to respond in various situations — making leaving them alone harder, since you may worry about how they'll react when you're not around.",
        ],
      },
      {
        heading: "How to socialize your dog effectively",
        paragraphs: [
          "The good news: it's never too late. Whether you have a puppy or an adult dog, there are ways to introduce them to new experiences that build confidence and reduce the risk of separation anxiety.",
        ],
        bullets: [
          "Start early — puppies have critical socialization windows between 3–14 weeks",
          "Take it slow — expose your dog to new experiences one at a time, with positive associations",
          "Use positive reinforcement — treats, praise, and play create good associations",
          "Attend puppy classes or playgroups — structured, supervised environments are safest",
          "Introduce new environments — parks, pet-friendly stores, different walking routes",
        ],
      },
    ],
  },

  "why-dog-daycare-is-beneficial-for-your-pup-during-the-winter": {
    slug: "why-dog-daycare-is-beneficial-for-your-pup-during-the-winter",
    title: "Why Dog Daycare is a Better Option Than Hiring a Dog Sitter",
    metaTitle: "Dog Daycare vs. Dog Sitter — Why Daycare Wins | Planet Pooch Blog",
    metaDescription:
      "Dog daycare beats hiring a sitter for socialization, structure, professional supervision, and ongoing exercise. Here's why.",
    hasFullContent: true,
    intro:
      "When deciding between dog daycare and a dog sitter, daycare emerges as the superior choice for most pet owners. Here are the key advantages.",
    sections: [
      {
        heading: "Socialization benefits",
        paragraphs: [
          "Dog daycare provides opportunities for your pet to interact with other dogs, which helps prevent aggression, fear-based behaviors, and anxiety. A dog sitter cannot offer this group dynamic and controlled peer interaction.",
        ],
      },
      {
        heading: "Structured environment",
        paragraphs: [
          "Daycares offer scheduled activities, playtime, rest periods, and mental stimulation sessions. This consistency creates a sense of security and reduces behavioral issues stemming from boredom or lack of exercise.",
        ],
      },
      {
        heading: "Professional supervision",
        paragraphs: [
          "Trained daycare staff understand how to manage various dog personalities and behaviors. They can handle emergencies and address behavioral concerns more effectively than typical sitters who lack specialized training.",
        ],
      },
      {
        heading: "Physical exercise",
        paragraphs: [
          "Daycare provides extensive opportunities for dogs to run and play throughout the day, promoting better health, reduced anxiety, and improved behavior at home — far beyond what a standard walk with a sitter offers.",
        ],
      },
      {
        heading: "Continuous supervision",
        paragraphs: [
          "Unlike sitters who may leave or become distracted, daycare facilities maintain constant on-site supervision, ensuring your dog remains safe and monitored throughout the day.",
        ],
      },
      {
        heading: "Cost effectiveness",
        paragraphs: [
          "For frequent care needs, daycare packages typically offer better value than repeated sitter bookings, making it a more economical long-term solution.",
        ],
      },
      {
        heading: "Peace of mind",
        paragraphs: [
          "Daily updates and transparent care practices allow owners to feel confident their dogs receive quality care in a safe, managed environment.",
        ],
      },
    ],
  },

  "what-is-dog-daycare-a-complete-guide-for-pet-parents": {
    slug: "what-is-dog-daycare-a-complete-guide-for-pet-parents",
    title: "What is Dog Daycare? A Complete Guide for Pet Parents",
    metaTitle: "What is Dog Daycare? A Complete Guide | Planet Pooch Blog",
    metaDescription:
      "Dog daycare provides a safe, supervised environment for your dog while you're away. Here's what it includes, why it works, and how to choose the right one.",
    hasFullContent: true,
    intro:
      "Dog daycare is a service that provides a safe, supervised environment where your dog can spend the day while you're away. Like daycare for children, dog daycare offers a place for dogs to socialize, play, and receive attention when their owners are at work, traveling, or otherwise occupied.",
    sections: [
      {
        heading: "The basics",
        paragraphs: [
          "Dog daycare is designed to offer a structured environment where your dog interacts with other dogs, gets plenty of exercise, and enjoys companionship. Most facilities have large indoor or outdoor play areas where dogs are grouped by size, age, or temperament to ensure a safe, enjoyable experience.",
          "During their time at daycare, dogs play with toys, run and fetch, participate in group play, or relax in a comfortable setting. Trained staff oversee the playtime, ensuring all dogs are well-matched and behave appropriately.",
        ],
      },
      {
        heading: "Why dogs benefit from daycare",
        paragraphs: [
          "While some pet owners can dedicate significant time to their dogs, others may struggle to meet their pets' needs due to work, social commitments, or travel. Daycare is great for busy owners who want to make sure their dog gets the exercise, socialization, and mental stimulation they need.",
          "For active dogs — especially high-energy breeds — daycare is an excellent way to burn off energy that might otherwise lead to destructive behaviors at home. For social dogs, it's a valuable opportunity to interact with other dogs in a controlled setting. For dogs with separation anxiety, daycare can help them get used to being away from their owners in a positive, enriching environment.",
        ],
      },
      {
        heading: "What to expect",
        bullets: [
          "Socialization — dogs grouped by size, temperament, and play style for safe interaction",
          "Exercise — group play and interactive games provide significant physical activity",
          "Supervision — trained staff monitor at all times; some facilities offer video monitoring",
          "Mental stimulation — games, puzzle toys, and training sessions",
          "Add-on services — many daycares offer grooming, nail trimming, or basic health checks",
        ],
      },
      {
        heading: "How to choose the right daycare",
        paragraphs: [
          "Look at staff experience, safety measures, facility cleanliness, how dogs are matched into playgroups, and reviews from other dog owners. The right daycare provides a fulfilling and enriching experience while giving you peace of mind.",
        ],
      },
    ],
  },

  "pedestrian-safety-and-walking-dogs-a-guide-to-staying-safe-on-the-streets": {
    slug: "pedestrian-safety-and-walking-dogs-a-guide-to-staying-safe-on-the-streets",
    title: "Pedestrian Safety and Walking Dogs: A Guide to Staying Safe on the Streets",
    metaTitle: "Walking Dogs Safely on Long Island Streets | Planet Pooch Blog",
    metaDescription:
      "Ten tips for keeping you and your dog safe on Long Island streets — proper equipment, visibility, traffic awareness, weather, and street smarts.",
    hasFullContent: true,
    intro:
      "Walking your dog is one of life's simple pleasures, but as pedestrian traffic and roadways get busier, safety should always be top of mind. Whether you're strolling through the park or heading to the corner store, here are key steps to keep you and your dog safe.",
    sections: [
      {
        heading: "Use proper equipment",
        paragraphs: [
          "Make sure your dog is on a sturdy leash that gives you control without being too long. A long leash near busy roads can give your dog too much freedom to dart into traffic. A harness is often a better choice than a collar — especially for pullers — since it prevents neck injury and gives more control.",
        ],
      },
      {
        heading: "Obey traffic signals and crosswalks",
        paragraphs: [
          "Always use crosswalks and obey pedestrian signals. It's safer for you, sets a good example, and reinforces good habits. Dogs pick up on your behavior.",
        ],
      },
      {
        heading: "Be visible, especially at night",
        paragraphs: [
          "Wear reflective clothing or use lights for early-morning or after-dark walks. Reflective or LED collars and leashes keep your dog visible to drivers.",
        ],
      },
      {
        heading: "Mind your dog's pace and behavior",
        paragraphs: [
          "Adjust your walking pace to your dog's comfort. On busy streets, keep your dog close. Stay aware of distractions — other animals, pedestrians, or loud noises that might cause sudden movements.",
        ],
      },
      {
        heading: "Be aware of traffic and road hazards",
        paragraphs: [
          "Distracted walking — checking your phone, long conversations — can lead to missed warning signs. Watch oncoming traffic, especially in poor visibility or narrow sidewalks. Be cautious at intersections; drivers may not yield even on a green pedestrian light.",
        ],
      },
      {
        heading: "Watch for unsafe conditions and weather",
        paragraphs: [
          "Potholes, cracked sidewalks, ice, and wet leaves can cause falls. On hot days, avoid peak sun hours — pavement can burn paw pads. In cold weather, salt and ice melt can irritate your dog's paws; consider protective boots.",
        ],
      },
      {
        heading: "Train your dog to be street smart",
        paragraphs: [
          "Teach your dog to stop at curbs and wait for your signal before crossing. Positive reinforcement helps them understand boundaries. Stay calm and collected if you encounter an off-leash dog or anxious situation — panic can make your dog react unpredictably.",
        ],
      },
    ],
  },

  "the-benefits-of-socializing-dogs-and-avoiding-loneliness-at-home": {
    slug: "the-benefits-of-socializing-dogs-and-avoiding-loneliness-at-home",
    title: "The Benefits of Socializing Dogs and Avoiding Loneliness at Home",
    metaTitle: "Socializing Dogs & Preventing Loneliness | Planet Pooch Blog",
    metaDescription:
      "Socialization and preventing loneliness are two of the biggest factors in a happy, balanced dog. Eight ways they make a difference.",
    hasFullContent: true,
    intro:
      "When it comes to raising a happy, healthy, well-adjusted dog, socialization and preventing loneliness are two key factors. Whether you're a first-time dog owner or a seasoned pet parent, understanding these can significantly improve your dog's quality of life.",
    sections: [
      {
        heading: "Reduced behavioral problems",
        paragraphs: [
          "Properly socialized dogs are less likely to develop anxiety, aggression, or fear-based behaviors. Exposure to a variety of people, dogs, and environments helps dogs learn to interact appropriately and feel comfortable in different situations.",
        ],
      },
      {
        heading: "Better emotional health",
        paragraphs: [
          "Like people, dogs need emotional stimulation and positive experiences to stay balanced. Dogs left isolated for long periods often experience loneliness and boredom — which can lead to depression, anxiety, and destructive behavior. Socialization gives them the bonds and security they crave.",
        ],
      },
      {
        heading: "Preventing separation anxiety",
        paragraphs: [
          "Dogs are social animals; prolonged isolation can cause anxiety or fear when left alone. Socializing your dog and providing regular engagement helps reduce this stress. Over time, regularly socialized dogs are more comfortable spending time without their owners.",
        ],
      },
      {
        heading: "Improved confidence and adaptability",
        paragraphs: [
          "Dogs exposed to a variety of people, dogs, and situations handle new experiences with more ease — whether it's a vet visit or meeting a new person. They're more adaptable to changes like moves, travel, or new pets in the household.",
        ],
      },
      {
        heading: "Enhanced physical and mental health",
        paragraphs: [
          "Socializing dogs often involves play and exercise with other dogs, providing both mental and physical stimulation. This helps prevent obesity, lethargy, and pent-up energy that can lead to destructive behaviors.",
        ],
      },
      {
        heading: "Stronger bond with you, longer life for them",
        paragraphs: [
          "Regular socialization deepens the bond between you and your dog. Dogs who are socially engaged and not left alone for long periods are often healthier and live longer. Mental and emotional stimulation keeps a dog's mind sharp; regular play keeps their body fit.",
        ],
      },
    ],
  },

  "how-owning-a-pet-can-reduce-stress-the-healing-power-of-pets": {
    slug: "how-owning-a-pet-can-reduce-stress-the-healing-power-of-pets",
    title: "How Owning a Pet Can Reduce Stress: The Healing Power of Pets",
    metaTitle: "How Pets Reduce Stress | Planet Pooch Blog",
    metaDescription:
      "Pets provide unconditional love, encourage activity, lower blood pressure, and help us live in the moment. Ten ways they reduce stress.",
    hasFullContent: true,
    intro:
      "Stress has become part of daily life for many people — but one of the simplest and most effective ways to alleviate it is by having a pet. Whether it's a playful dog, a serene cat, or even a calming fish tank, animals can have a profound impact on your mental and emotional well-being.",
    sections: [
      {
        heading: "Unconditional love and companionship",
        paragraphs: [
          "Pets offer steady comfort and emotional support. Coming home to an excited puppy or a contented cat after a stressful day can be soothing — and the bond reduces feelings of loneliness, a major contributor to stress.",
        ],
      },
      {
        heading: "Physical activity and lower blood pressure",
        paragraphs: [
          "Walking or playing with your pet releases endorphins and lowers blood pressure and heart rate. Petting a dog or cat activates the parasympathetic nervous system, helping reduce stress and promote relaxation.",
        ],
      },
      {
        heading: "Routine, mindfulness, and emotional support",
        paragraphs: [
          "Pets create daily structure — feeding, walking, grooming, and playing — which is comforting for people overwhelmed by unpredictability. They also keep us in the present moment, redirecting our minds from past worries or future uncertainties.",
        ],
      },
      {
        heading: "Laughter, distraction, and connection",
        paragraphs: [
          "The sheer unpredictability of a pet's behavior brings genuine laughter, which releases tension and improves mood. Pets are also bridges to social connections — bonding with other dog owners at the park or sharing experiences with fellow pet parents.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Pets aren't just animals — they're healers, stress relievers, and lifelong friends. If you're feeling stressed, consider spending more time with your pet, or adopting one if you don't already have one.",
        ],
      },
    ],
  },

  "why-dog-daycare-is-great-for-both-small-and-large-breeds": {
    slug: "why-dog-daycare-is-great-for-both-small-and-large-breeds",
    title: "Why Dog Daycare is Great for Both Small and Large Breeds",
    metaTitle: "Dog Daycare for Small & Large Breeds | Planet Pooch Blog",
    metaDescription:
      "Whether your dog is the size of a teacup or a gentle giant, dog daycare offers socialization, exercise, mental stimulation, and peace of mind.",
    hasFullContent: true,
    intro:
      "If you're a dog parent, you've probably wondered if dog daycare is right for your furry friend. Whether your dog is the size of a teacup or a gentle giant, dog daycare can be a fantastic option for both small and large breeds.",
    sections: [
      {
        heading: "Socialization opportunities for all sizes",
        paragraphs: [
          "Small dogs gain confidence around dogs of all sizes in a controlled environment. Larger breeds engage in active play with dogs their size — burning off energy in a healthy, supervised way.",
        ],
      },
      {
        heading: "Tailored playtime for different energy levels",
        paragraphs: [
          "We have dedicated play areas for different sized dogs. Small breeds aren't overwhelmed by larger, more boisterous dogs; larger breeds get the physically demanding play they need.",
        ],
      },
      {
        heading: "Mental and physical stimulation",
        paragraphs: [
          "Both small and large breeds need both kinds of stimulation. Small dogs get toys, puzzles, and gentle play; larger breeds get the space to run, jump, and play that keeps them healthy and out of trouble.",
        ],
      },
      {
        heading: "Peace of mind for owners",
        paragraphs: [
          "Whether you have a tiny pup or a massive dog, daycare provides a safe, supervised environment. Trained staff monitor behavior so dogs don't get into trouble or feel overwhelmed.",
        ],
      },
      {
        heading: "Building trust and confidence",
        paragraphs: [
          "Daycare helps dogs feel comfortable in new environments and around other dogs — making them more adaptable and less likely to develop anxiety or fear in unfamiliar situations.",
        ],
      },
    ],
  },
};

const stubSlugs: ReadonlyArray<string> = [
  "why-mobile-grooming-is-good-for-your-pet",
  "what-is-dog-daycare-a-complete-guide-for-pet-parents-2",
  "flea-and-tick-treatment-for-dogs-why-its-crucial-for-your-pups-health",
  "how-to-manage-your-pets-coat-during-the-shedding-season",
  "is-dog-daycare-right-for-my-pet",
  "why-dog-boarding-is-a-great-choice-for-pet-owners-and-their-dogs",
  "suns-out-tongues-out-the-happiness-of-dogs-in-the-sun",
  "why-pet-boarding-is-essential-when-youre-away",
  "why-dog-boarding-is-a-lifesaver-for-your-holiday-getaways",
  "memorial-day-getaway-why-boarding-your-dog-at-planet-pooch-is-the-best-choice",
  "why-being-involved-matters-to-us",
  "beat-the-summer-heat-keep-your-dog-safe-and-cool-%e2%98%80%ef%b8%8f%f0%9f%90%be",
  "celebrate-a-stress-free-4th-of-july-with-planet-pooch",
  "beat-the-heat-pool-parties-for-dogs-at-daycare",
  "give-your-family-and-your-pup-a-break-this-summer",
  "what-sets-us-apart-a-boarding-experience-like-no-other",
  "why-professional-care-at-our-pet-resort-brings-you-peace-of-mind",
  "does-your-dog-have-separation-anxiety-heres-how-mobile-grooming-can-help",
  "our-new-6-week-enrichment-program",
  "weve-partnered-with-three-dog-bakery-for-a-special-giveaway",
  "give-your-dog-a-vacation-too-this-labor-day-weekend-at-planet-pooch-pet-resort",
  "is-your-pup-bouncing-off-the-walls-while-youre-at-work",
  "its-bark-to-school-season-at-planet-pooch",
  "why-regular-grooming-is-more-than-just-keeping-your-pet-looking-their-best",
  "why-enrichment-activities-matter-for-your-dog",
  "a-longer-happier-life-for-your-dog-starts-here",
  "exciting-news-our-online-pet-profile-just-got-even-easier",
  "training-at-our-pet-resort-fun-learning-and-bonding-for-your-pup",
  "the-importance-of-regular-nail-trimming-for-your-dog",
  "the-holidays-are-almost-here-dont-forget-to-book-your-pets-stay",
  "holiday-peace-of-mind-dog-daycare-boarding-mobile-grooming-this-season",
  "training-puppies-and-adult-dogs-why-its-important-at-every-age",
  "dog-daycare-in-the-snow-why-winter-days-are-perfect-for-daycare",
  "how-often-should-you-get-your-dog-groomed",
  "is-it-bad-to-shave-my-goldendoodle-what-you-need-to-know",
  "why-dogs-shed-more-in-spring-and-what-you-can-do-about-it",
  "spring-grooming-for-dogs-why-it-matters-more-than-you-think",
  "spring-dog-boarding-give-your-pup-a-vacation-of-their-own",
  "why-group-dog-training-might-be-the-best-investment-you-make-for-your-dog",
  "why-booking-summer-boarding-early-matters",
  "one-on-one-boarding-at-planet-pooch",
  "memorial-day-weekend-boarding",
  "keep-your-dog-cool-clean-comfortable-this-summer-with-mobile-grooming",
  "make-this-long-weekend-a-holiday-for-your-pup-too",
  "make-this-long-weekend-a-holiday-for-your-pup-too-2",
];

export const blogPosts: Record<string, BlogPost> = {
  ...fullPosts,
  ...Object.fromEntries(stubSlugs.map((slug) => [slug, stub(slug)])),
};

export type BlogSlug = string;
