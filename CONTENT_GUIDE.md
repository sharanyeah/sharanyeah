
# Content Management Guide

## Adding New Spec Work

Edit `data/specWork.js` and add a new object to the array:

```javascript
{
  id: 4, // increment the ID
  title: "your project title",
  summary: "short, punchy one-liner for the card",
  caseFile: "case file 04",
  tags: ["tag1", "tag2", "tag3"],
  image: "/path/to/image.jpg", // optional - set to null if no image
  fullDescription: "longer description with <strong>bold text</strong> and <em>italics</em>",
  findings: [
    "finding 1 with specific data",
    "finding 2 with metrics",
    "finding 3 with insights"
  ],
  takeaway: "the main lesson/conclusion in plain language",
  highlights: [ // optional
    { text: "key metric", note: "explanation" }
  ]
}
```

## Adding New Blogs

Edit `data/blogs.js` and add a new object:

```javascript
{
  id: 4,
  title: "your blog title",
  date: "dec 2024",
  preview: "hook that makes people want to read more",
  readTime: "5 min read",
  tags: ["tag1", "tag2"],
  image: "/path/to/image.jpg", // optional
  fullContent: `
    <p>your content here with <strong>bold</strong> and <em>italic</em> text</p>
    
    <h3>subheading</h3>
    <p>more content</p>
    
    <ul>
      <li>bullet point 1</li>
      <li>bullet point 2</li>
    </ul>
    
    <div class="blog-callout">
      <p><strong>highlight:</strong> important callout text</p>
    </div>
    
    <img src="/path/to/image.jpg" alt="description" />
    <p class="image-caption">— caption for the image</p>
    
    <span class="highlight-mark">highlighted inline text</span>
  `
}
```

## Rich Content Features Available

### Text Formatting
- `<strong>bold text</strong>` - appears in maroon
- `<em>italic text</em>` - slightly lighter color
- `<span class="highlight-mark">highlighted text</span>` - yellow background highlight
- `<span class="text-maroon">maroon text</span>` - brand color

### Images
```html
<img src="/path/to/image.jpg" alt="description" />
<p class="image-caption">— your caption here</p>
```

### Callouts/Highlights
```html
<div class="blog-callout">
  <p><strong>key insight:</strong> your important point here</p>
</div>
```

### Lists
```html
<ul>
  <li>point 1</li>
  <li>point 2</li>
</ul>
```

### Headings
```html
<h3>your subheading</h3>
```

## Tips for Better Content

1. **Keep paragraphs short** - 2-3 sentences max
2. **Use subheadings** every 2-3 paragraphs for scanners
3. **Bold key insights** to help people skim
4. **Add callouts** for your best points
5. **Use specific numbers** instead of vague claims
6. **Write like you talk** - contractions, asides, personality

## File Structure
```
data/
  ├── specWork.js  - case studies and projects
  └── blogs.js     - essays and observations
```

All changes to these files will automatically appear on the site. No need to touch HTML or CSS.
