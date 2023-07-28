function nextUnretweet() {
    return document.querySelector('[data-testid="unretweet"]')
}
function nextUnretweetConfirm() {
    return document.querySelector('[data-testid="unretweetConfirm"]')
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function removeAll() {
    let count = 0
    let next = nextUnretweet()
    while (next) {
        next.focus()
        next.click()
        let nextConf = nextUnretweetConfirm()
        nextConf.focus()
        nextConf.click()
        console.log(`Unretweeted ${++count} tweets`)
        await wait(count % 50 === 0 ? 30000 : 2000)
        next = nextUnretweet()
    }
    check()
}
function check() {
    if (document.querySelector('[data-testid="unretweet"]') == null) {
        console.log('Out of accounts to unfollow, unfollow count =', count)
    } else {
        console.log('Discovered more retweets to remove, continuing...')
        removeAll()
    }
}
removeAll() 