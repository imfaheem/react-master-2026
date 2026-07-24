---
name: interview-questions-format
description: "Format interview question HTML files by wrapping questions in h4 tags, answers in p tags, and adding CSS styling to remove margins between them."
user-invocable: true
triggers:
  - keywords: ["format interview", "interview format", "format questions", "interview questions format"]
---

# Interview Questions Formatter

Automatically formats interview question HTML files with proper semantic HTML structure and styling.

## What This Does

1. **Wraps Questions in `<h4>` tags** - Identifies plain text questions and wraps them
2. **Wraps Answers in `<p>` tags** - Identifies plain text answers and wraps them
3. **Adds Internal CSS Styling** - Adds a `<style>` block with:
   - `body { font-family: Arial, sans-serif; }` - Applies Arial as the default font family
   - `h4 { margin-bottom: 0; }` - Removes bottom margin from questions
   - `p { margin-top: 0; }` - Removes top margin from answers

## Usage

Simply invoke this agent on any HTML interview file, and it will:
- Read the current HTML file
- Identify question/answer pairs
- Apply semantic HTML tags
- Add proper CSS styling for tight question/answer spacing

Perfect for organizing interview preparation materials and ensuring consistent formatting across your interview question files.
