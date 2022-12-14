const fetch = require('node-fetch')

const respondWithAnotherSite = async (site = "https://github.com/section/cfworker-tutorial") => {
    const response = await fetch(site)
    return await response.text()
}

module.exports = respondWithAnotherSite