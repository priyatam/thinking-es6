import jsonp from 'jsonp'

const redditURL = "http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week"

export function load() {
    return new Promise((resolve, reject) => {
        jsonp(redditURL, {param: 'jsonp'}, (err, data) => {
            err ? reject(err) : resolve(data.data.children)
        })
    })
}

export function extractGifs(posts) {
    return posts
        .filter(post => !post.data.over_18)
        .map(post => post.data.url)
        .filter(url => /gifv?$/.exec(url))
        .map(url => url.replace(/v$/,''))
}

export function displayGifs(urls) {
    var elem = document.querySelector('#gifs')
    elem.innerHTML = urls.map(url => `<img src="${url}">`).join("\n")
}
