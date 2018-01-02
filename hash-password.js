const Curl=require("iota.lib.js/lib/crypto/curl/curl.js")
const a2t=require("iota.lib.js/lib/utils/asciiToTrytes.js")
const conv=require("iota.lib.js/lib/crypto/converter/converter.js")
const IOTA=require("iota.lib.js")

let password=process.argv[2]
if ( ! password ) {
    console.log("Usage: node hash-password.js ascii-password-to-hash")
    process.exit(1)
}
let pwdTrytes = a2t.toTrytes(password)
let pwdTrits = conv.trits(pwdTrytes)
let curl=new Curl()
curl.initialize()
curl.absorb(pwdTrits, 0, pwdTrits.length)
let out=[]
curl.squeeze(out, 0, Curl.HASH_LENGTH)
console.log(conv.trytes(out))