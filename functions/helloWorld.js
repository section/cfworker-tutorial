const helloWorld = async () => {
    const html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
  <p>Hosted on Section. Refer to our <a href="https://www.section.io/docs/tutorials/" target="_blank" rel="noopener noreferrer">docs</a>.</p>

  <ul>
    <li><a href="/">/</a></li>
    <li><a href="/section">/section</a></li>
  </ul>
</body>`
    return html
}

module.exports = helloWorld