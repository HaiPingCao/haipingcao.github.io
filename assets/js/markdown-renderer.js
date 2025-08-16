class MarkdownRenderer {
  constructor() {
    this.postContent = document.querySelector('.post-content');
    this.markdownFile = '/content/posts/test.md';
  }

  async init() {
    try {
      const markdown = await this.fetchMarkdown();
      this.renderMarkdown(markdown);
    } catch (error) {
      console.error("Error loading markdown:", error);
      this.showError(error);
    }
  }

  async fetchMarkdown() {
    const response = await fetch(this.markdownFile);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.text();
  }

  renderMarkdown(markdownText) {
    const processedMarkdown = this.preprocessMarkdown(markdownText);
    const unsafeHtml = marked.parse(processedMarkdown);
    
    // Sanitize the HTML before rendering
    const cleanHtml = DOMPurify.sanitize(unsafeHtml, {
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'a', 'img', 'blockquote',
        'ul', 'ol', 'li', 'strong', 'em',
        'code', 'pre', 'hr', 'table', 'thead',
        'tbody', 'tr', 'th', 'td'
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class']
    });

    this.postContent.innerHTML = cleanHtml;
    this.addCopyButtons();
  }

  preprocessMarkdown(text) {
    return text
      .replace(/\n\s*\n/g, '\n\n')
      .replace(/(\S)\n(\S)/g, '$1\n\n$2');
  }

  addCopyButtons() {
    document.querySelectorAll('pre code').forEach((codeBlock) => {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent)
          .then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000);
          });
      });
      codeBlock.parentNode.insertBefore(button, codeBlock);
    });
  }

  showError(error) {
    this.postContent.innerHTML = `
      <div class="error-message">
        <p>Error loading content: ${error.message}</p>
        <button id="retry-button">Retry</button>
      </div>
    `;
    document.getElementById('retry-button').addEventListener('click', () => this.init());
  }
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', () => {
  new MarkdownRenderer().init();
});