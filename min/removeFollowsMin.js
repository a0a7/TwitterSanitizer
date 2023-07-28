var i = 0
function nextUnfollow() {
    return document.querySelector('[data-testid*="unfollow"]')
}
function nextUnfollowConfirm() {
    return document.querySelector('[data-testid="confirmationSheetConfirm"]')
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function removeAll() {
    let count = 0
    let next = nextUnfollow()
    while (next) {
        next.focus()
        next.click()
        let nextConf = nextUnfollowConfirm()
        nextConf.focus()
        nextConf.click()
        console.log(`Unfollowed ${++count} accounts`)
        await wait(count % 50 === 0 ? 30000 : 2000)
        next = nextUnfollow()
    }
    check()
}
function check() {
    if (document.querySelector('[data-testid*="unfollow"]') == null) {
        console.log('Out of accounts to unfollow, unfollow count =', count)
    } else {
        console.log('Discovered more accounts to unfollow, continuing...')
        removeAll()
    }
}
removeAll() 