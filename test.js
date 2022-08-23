const secret= 'd2e2e71f389a9c830d16829ae7d894f6'
const appId = '466907051980659'


const url = "https://graph.facebook.com/oauth/access_token" +
    `?client_id=${appId}` +
    `&client_secret=${secret}` +
    "&grant_type=client_credentials"

const res = await fetch(url).then(res => res.json())

const token = res.access_token;


const res2 = await fetch(`https://graph.facebook.com/${appId}/accounts?access_token=${token}`)
    .then(res => res.json())

const { access_token, id: pageId, login_url } = res2.data[0];

const msg = "Open for Business";

const postResUrl = `https://graph.facebook.com/${pageId}/feed` +
    `?message=${msg}` + `&access_token=${access_token}`;


// todo send post req