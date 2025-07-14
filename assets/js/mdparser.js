// // Parse markdown to HTML
// const markdownText = `# Hello World
// This is **bold** text and this is _italic_.`;
fetch('/content/test.md')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(markdown => {
        // Now you have the markdown content, you can parse it
        console.log("Markdown content loaded:", markdown);
        // Call your markdown conversion function here
        convertMarkdown(markdown);
    })
    .catch(error => {
        console.error("Error fetching markdown file:", error);
    });


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    convertMarkdown(markdownText);
});


function convertMarkdown(markdown) {
    // const markdown = document.getElementById('markdown-input').value;
    const html = marked.parse(markdown);
    document.getElementById('html-output').innerHTML = html;
}