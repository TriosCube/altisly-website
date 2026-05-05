/**
 * Minimal Markdown → HTML converter for blog post content.
 * Handles headings, bold, italic, code blocks, inline code, and paragraphs.
 */
export function useMarkdown() {
  const render = (md: string): string => {
    if (!md) return ''

    const lines = md.split('\n')
    const html: string[] = []
    let inCodeBlock = false
    let codeLines: string[] = []
    let inList = false

    const flushList = () => {
      if (inList) {
        html.push('</ul>')
        inList = false
      }
    }

    const inline = (text: string): string =>
      text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')

    for (const raw of lines) {
      const line = raw

      // Code fence
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          flushList()
          inCodeBlock = true
          codeLines = []
        } else {
          html.push(`<pre class="code-block"><code>${codeLines.map((l) => escapeHtml(l)).join('\n')}</code></pre>`)
          inCodeBlock = false
          codeLines = []
        }
        continue
      }

      if (inCodeBlock) {
        codeLines.push(line)
        continue
      }

      // Headings
      if (line.startsWith('### ')) {
        flushList()
        html.push(`<h3 class="md-h3">${inline(line.slice(4))}</h3>`)
        continue
      }
      if (line.startsWith('## ')) {
        flushList()
        html.push(`<h2 class="md-h2">${inline(line.slice(3))}</h2>`)
        continue
      }
      if (line.startsWith('# ')) {
        flushList()
        html.push(`<h1 class="md-h1">${inline(line.slice(2))}</h1>`)
        continue
      }

      // List items
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList) {
          html.push('<ul class="md-list">')
          inList = true
        }
        html.push(`<li>${inline(line.slice(2))}</li>`)
        continue
      }

      // Blank line
      if (line.trim() === '') {
        flushList()
        continue
      }

      // Paragraph
      flushList()
      html.push(`<p class="md-p">${inline(line)}</p>`)
    }

    flushList()
    return html.join('\n')
  }

  return { render }
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
