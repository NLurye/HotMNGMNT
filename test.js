const fetch = require("node-fetch-commonjs");

async function uploadPost(msg) {
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

    const postReqUrl = `https://graph.facebook.com/${pageId}/feed` +
        `?message=${msg}` + `&access_token=${access_token}`;

    const rawResponse = await fetch(postReqUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: msg // this might not be needed
    });
    const response = await rawResponse.json();

    console.log(response.error?.message)
}


uploadPost("Open for Business");//we cant get these 2 things from FaceBook:
                                     //1) pages_read_engagement
                                     //2) pages_manage_posts
                                     //
                                     // although, this code will do the trick.

