
// ============================================
// BLOG POSTS DATA
// ============================================
// To add a new blog post, copy one of the objects below and modify it.
// 
// ADDING IMAGES:
// 1. Place your image in the project folder (e.g., /images/blog-image.jpg)
// 2. Set the image field to the path: image: "/images/blog-image.jpg"
// 3. Images will appear at the top of your blog post
//
// ADDING CONTENT:
// - Use HTML tags inside fullContent for formatting
// - <h3>Subheading</h3> for section headers
// - <p>Paragraph text</p> for paragraphs
// - <ul><li>List item</li></ul> for bullet lists
// - <span class="highlight-mark">text</span> to highlight text
// - <strong>bold</strong> for bold, <em>italic</em> for italic
// - <img src="/images/your-image.jpg" alt="description" class="blog-image" /> for inline images
// - <div class="blog-callout"><p>Important note</p></div> for callout boxes
// ============================================

export const blogs = [
  {
    id: 1,
    title: "how people actually read (they don't)",
    date: "dec 2024",
    preview: "spoiler: they skim, pattern-match, and pretend. here's what that means for your content strategy and your sanity.",
    readTime: "4 min read",
    tags: ["reading patterns", "ux", "content"],
    image: null, // Add image path here: "/images/your-image.jpg"
    fullContent: `
      <p>let's kill the fantasy: <strong>nobody reads</strong>. not your carefully crafted paragraphs. not your clever transitions. they scroll, scan for keywords, and decide in 3 seconds if you're worth their time.</p>
      
      <p>after tracking 500+ people interacting with content, here's the truth: <span class="highlight-mark">the average person reads about 20% of words on a page</span>. the other 80%? pure optimism on your part.</p>
      
      <h3>the f-pattern isn't dead, just exhausted</h3>
      <p>you know the drill: horizontal scan at top, vertical down the left. it's real. but it's also predictable. <em>good content breaks the pattern</em> by being interesting enough to actually read beyond the first three lines.</p>
      
      <h3>what actually works:</h3>
      <ul>
        <li><strong>short paragraphs</strong> — like, embarrassingly short. one idea = one paragraph.</li>
        <li><strong>subheadings every 2-3 paras</strong> — give scanners something to grab onto</li>
        <li><strong>bullet points</strong> — you're reading this one right now, aren't you?</li>
        <li><strong>one idea per paragraph</strong> — seriously. just one. no cheating.</li>
        <li><strong>questions that make people pause</strong> — like this: what's the last article you actually *finished*?</li>
      </ul>
      
      <div class="blog-callout">
        <p><strong>the real lesson?</strong> respect people's time by making your point faster. every extra word is a tax on their attention. and attention is expensive.</p>
      </div>
      
      <p>stop writing like people are sitting down with tea and a highlighter. they're scrolling on the toilet. at a red light. during a meeting. optimize for that reality.</p>
    `
  },
  {
    id: 2,
    title: "questions i'm still wrestling with",
    date: "nov 2024",
    preview: "running list of things i haven't figured out: why ideas stick, what makes copy 'feel' expensive, and why good writing takes forever.",
    readTime: "3 min read",
    tags: ["thinking", "questions", "process"],
    image: null,
    fullContent: `
      <p>best insight doesn't come from answers. it comes from <span class="highlight-mark">sitting with questions long enough to notice patterns</span>. here are mine:</p>
      
      <h3>why do some brand voices stick and others dissolve instantly?</h3>
      <p>i've read hundreds of brand voice guides. most are garbage. the good ones sound like one specific person wrote them — not a committee optimizing for "approachable yet professional." but how do you teach that? how do you bottle personality?</p>
      
      <h3>what makes copy feel expensive?</h3>
      <p>it's not fancier words. sometimes it's the opposite. there's a <em>confidence in simplicity</em> that screams "we don't need to oversell this." luxury brands get it. most startups don't. what's the line?</p>
      
      <h3>why do i overuse em dashes?</h3>
      <p>they let me write the way i think — parentheticals for the brain. conversational. immediate. but should i stop? probably. will i? unclear.</p>
      
      <h3>why does good writing take so damn long?</h3>
      <p>the final version reads effortless. the drafts? chaos. it takes 10 attempts to sound like you're not trying. there's no shortcut. i've looked.</p>
      
      <div class="blog-callout">
        <p><strong>meta-question:</strong> are these questions even worth answering? or is the wrestling itself the point?</p>
      </div>
      
      <p class="text-maroon font-semibold" style="margin-top: 2rem;">— no conclusions yet. just more questions. as always.</p>
    `
  },
  {
    id: 3,
    title: "pattern recognition from this week",
    date: "oct 2024",
    preview: "observations from watching people interact with websites, menus, each other. mostly me being analytical about everything.",
    readTime: "5 min read",
    tags: ["observations", "behavior", "notes"],
    image: null,
    fullContent: `
      <p>can't turn it off. the observation mode. here's what caught my attention:</p>
      
      <h3>restaurant menus are UX masterclasses in manipulation</h3>
      <p>most expensive item? top right. always. descriptions get longer for high-margin dishes. "pan-seared sustainable salmon with microgreens" vs "burger." <span class="highlight-mark">same psychology websites use with CTAs</span>. placement = priority.</p>
      
      <h3>button placement reveals what companies actually want</h3>
      <p>watched someone struggle through checkout because "back" was tiny/gray while "buy now" screamed at them in red. the design literally told them what to do. dark pattern? maybe. effective? unfortunately yes.</p>
      
      <h3>people read confirmation emails three times</h3>
      <p><strong>first read:</strong> did it work?<br>
      <strong>second read:</strong> wait, what did i actually order?<br>
      <strong>third read:</strong> (3 days later) seriously, what was that charge?</p>
      
      <p>most confirmation emails fail at all three. they confirm the transaction but forget the human just made a decision and wants reassurance, not a receipt.</p>
      
      <h3>empty states are criminally underrated</h3>
      <p>best apps treat empty states like first impressions. worst apps just say "no items found" and give up. there's a whole essay in empty state copy alone. (mental note: write that essay.)</p>
      
      <div class="blog-callout">
        <p><strong>pattern spotted:</strong> the best UX happens in the margins. error states. empty states. loading screens. places most designers ignore.</p>
      </div>
      
      <p class="text-maroon font-semibold" style="margin-top: 2rem;">— more observations coming. can't help myself.</p>
    `
  },
  {
    id: 4,
    title: "the psychology of scroll depth",
    date: "dec 2024",
    preview: "why do people stop scrolling where they do? i spent a week tracking exactly that. the answers are annoyingly predictable.",
    readTime: "6 min read",
    tags: ["psychology", "ux", "behavior"],
    image: null,
    fullContent: `
      <p>spent a week obsessing over scroll maps. found patterns nobody talks about.</p>
      
      <h3>the 25% cliff</h3>
      <p>most people drop off at exactly 25% scroll depth. not 20%. not 30%. <span class="highlight-mark">25%</span>. this is where the intro ends and the meat begins. if your intro doesn't hook, nothing else matters.</p>
      
      <h3>the 75% resurrection</h3>
      <p>something weird happens at 75%. engagement spikes briefly. theory: people check how much is left. if the ending looks short, they finish. if not? gone.</p>
      
      <div class="blog-callout">
        <p><strong>takeaway:</strong> your content has two battles: hooking at 25% and convincing at 75%. win both or lose completely.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "why i screenshot everything",
    date: "nov 2024",
    preview: "my camera roll is 80% screenshots. here's what that says about how i think and work.",
    readTime: "3 min read",
    tags: ["process", "thinking", "personal"],
    image: null,
    fullContent: `
      <p>confession: my camera roll has more screenshots than photos. it's a collection of moments that made me think.</p>
      
      <h3>screenshots are thinking externalized</h3>
      <p>every screenshot is a bookmark for my brain. "this made me feel something" or "come back to this" or "why does this work?"</p>
      
      <p>i screenshot copy that hits different. UX patterns that surprise me. tweets that say what i couldn't. design choices that feel intentional.</p>
      
      <div class="blog-callout">
        <p><strong>the pattern:</strong> my best ideas come from connecting screenshots taken months apart. the archive is the thinking.</p>
      </div>
    `
  },
];
