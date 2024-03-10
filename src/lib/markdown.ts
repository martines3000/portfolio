import hl from 'highlight.js';
import { marked } from 'marked';

const { highlight, highlightAuto } = hl;

// Inspired by:
// styfle.dev - https://github.com/styfle/styfle.dev
export function markdownToHtml(md: string) {
  return marked(md, {
    highlight: (code, language) => {
      if (!language) {
        return highlightAuto(code).value;
      }
      return highlight(code, { language }).value;
    },
  });
}
