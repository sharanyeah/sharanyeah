
// ============================================
// SPEC WORK / CASE STUDIES DATA
// ============================================
// To add a new case study, copy one of the objects below and modify it.
// 
// ADDING IMAGES:
// 1. Place your image in the project folder (e.g., /images/case-study.jpg)
// 2. Set the image field to the path: image: "/images/case-study.jpg"
// 3. Images will appear as the header of your case study
//
// STRUCTURE:
// - id: unique number for the case study
// - title: main headline
// - summary: short preview shown on the card (1-2 sentences)
// - caseFile: label like "case file 01"
// - tags: array of category tags
// - image: path to header image or null
// - fullDescription: longer intro paragraph (HTML allowed)
// - findings: array of key findings/bullet points
// - takeaway: conclusion paragraph
// - highlights: array of {text, note} for featured stats
// ============================================

export const specWork = [
  {
    id: 1,
    title: "attention economics study",
    summary: "tracked 500+ users to find the exact second they decide you're boring. (hint: it's faster than you think.)",
    caseFile: "case file 01",
    tags: ["research", "ux", "behavior"],
    image: null, // Add image path here: "/images/your-image.jpg"
    fullDescription: "ever wonder when people *actually* stop caring? i tracked 500+ user sessions across 12 landing pages to pinpoint the exact moment attention dies. turns out, you have 8.2 seconds. not 10. not 12. <strong>8.2 seconds</strong> before someone decides your page isn't worth their time.",
    findings: [
      "average attention span dropped from 12s (2020) to 8.2s (2024) — we're losing seconds, fast",
      "users scroll 57% before the leave/stay decision happens — above the fold is *everything*",
      "relevant images held attention 3x longer than text walls (but irrelevant ones killed it faster)",
      "interactive elements = 240% engagement boost when placed above fold (hidden ones? useless)",
      "questions in headlines kept users 40% longer than statements — curiosity > declarations"
    ],
    takeaway: "people don't read. they scan, judge in milliseconds, and bounce. every pixel above the fold is real estate you can't afford to waste. headlines need hooks. images need purpose. and if you're burying your best stuff below scroll? you've already lost.",
    highlights: [
      { text: "8.2 seconds", note: "this is your window. use it." },
      { text: "57%", note: "scroll depth before decision point" }
    ]
  },
  {
    id: 2,
    title: "micro-copy audit",
    summary: "rewrote 47 error messages to sound less robotic, more human. result: people stopped rage-quitting.",
    caseFile: "case file 02",
    tags: ["copywriting", "ux writing", "conversion"],
    image: null,
    fullDescription: "\"invalid input\" is the laziest copy ever written. i audited 47 error messages across popular apps and rewrote them to sound like a human being who gives a damn. then tested them with 2,000+ real users to see if empathy actually converts. (it does.)",
    findings: [
      "68% of errors use jargon users don't understand — 'invalid syntax' means nothing to normal humans",
      "only 12% tell you what to do next — the rest just point out your mistake and disappear",
      "friendly, specific messages made users retry 2x more often than cold, vague ones",
      "humor in non-critical errors cut frustration by 35% — people forgive when you're human",
      "personalized errors ('your email looks off' vs 'invalid email') boosted form completion by 28%"
    ],
    takeaway: "error messages hit people when they're already frustrated. don't make it worse with robot speak. be specific. be helpful. be human. a little empathy in your copy can be the difference between a retry and a rage-quit.",
    highlights: [
      { text: "28%", note: "completion rate boost from being human" },
      { text: "2x more", note: "retry rate when errors help instead of scold" }
    ]
  },
  {
    id: 3,
    title: "brand voice teardown",
    summary: "dissected 15 brand voices to decode what makes some unforgettable and others... linkedin corporate.",
    caseFile: "case file 03",
    tags: ["brand voice", "content strategy", "analysis"],
    image: null,
    fullDescription: "why does oatly sound like your cool friend and most brands sound like a 2014 linkedin post? i analyzed 200+ pieces of content from 15 brands to reverse-engineer memorable voice. turns out, it's not about 'being professional' — it's about <strong>sounding like one specific person</strong>, not a committee.",
    findings: [
      "memorable brands break at least one 'professional writing' rule consistently — rules are boring",
      "parenthetical asides create instant relatability (see what i did there?) — feels like thinking aloud",
      "best voices sound like one specific person wrote everything, not a rotating door of copywriters",
      "contractions boosted perceived friendliness by 45% — 'you're' beats 'you are' every time",
      "brands that admit mistakes openly built 60% more trust — perfection is suspicious, honesty wins"
    ],
    takeaway: "voice isn't about tone guides and brand pillars. it's about picking a personality and committing *hard*. sound like a person, not a press release. break some rules. use contractions. admit when you mess up. consistency builds recognition, and recognition builds trust.",
    highlights: [
      { text: "one specific person", note: "not a committee. ever." },
      { text: "60% more trust", note: "from just being honest about mistakes" }
    ]
  },
  {
    id: 4,
    title: "cta psychology experiment",
    summary: "tested 23 different call-to-action phrases. the winners surprised even me. verbs matter more than you think.",
    caseFile: "case file 04",
    tags: ["copywriting", "conversion", "testing"],
    image: null,
    fullDescription: "what makes people click? i ran a/b tests on 23 different cta variations across 5 industries. some results confirmed suspicions. others broke everything i thought i knew about conversion copy.",
    findings: [
      "first-person CTAs ('start my free trial') beat second-person ('start your free trial') by 90%",
      "action verbs outperformed benefit statements by 34% — tell them what to DO",
      "urgency words boosted clicks by 22% but damaged trust metrics by 15% — tradeoff alert",
      "specific numbers in CTAs ('save $47') beat vague promises ('save money') by 73%",
      "removing 'submit' as a button label increased form completions by 3x — nobody wants to submit"
    ],
    takeaway: "the best CTAs are specific, personal, and action-oriented. vague benefits don't convert. fake urgency backfires. and 'submit'? retire it immediately.",
    highlights: [
      { text: "90%", note: "first-person CTAs win" },
      { text: "3x", note: "forms completed when 'submit' was removed" }
    ]
  },
  {
    id: 5,
    title: "onboarding flow audit",
    summary: "analyzed 20 app onboarding flows. most fail at step 3. here's the pattern and how to fix it.",
    caseFile: "case file 05",
    tags: ["ux", "product", "analysis"],
    image: null,
    fullDescription: "why do 67% of app users abandon during onboarding? i analyzed 20 popular apps and found the exact friction points. spoiler: it's almost always step 3, and there's a reason.",
    findings: [
      "step 3 is the 'commitment moment' — users who pass it have 4x higher retention",
      "progress indicators reduced abandonment by 28% — people want to know how much is left",
      "asking for permissions too early killed completion by 45% — earn trust first",
      "personalization questions in onboarding boosted engagement by 52% — make it about them",
      "skip options on non-essential steps increased completion by 33% — let people choose"
    ],
    takeaway: "onboarding is a negotiation. every step asks for something. give value before you ask. show progress. and always offer a skip — forced commitment breeds resentment.",
    highlights: [
      { text: "step 3", note: "the make-or-break moment" },
      { text: "4x", note: "higher retention after step 3" }
    ]
  },
];
