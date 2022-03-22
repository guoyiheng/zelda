import { usernameToZeroWidth } from "./usernameToZeroWidth"
import { zeroWidthToUsername } from "./zeroWidthToUsername"

const username = 'gyh'

const text = `this is zero ${usernameToZeroWidth(username)} test`
console.log(text)

const usenameOrigin = zeroWidthToUsername(text)
console.log('usenameOrigin', usenameOrigin)
