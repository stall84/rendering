// Like we've been doing will separate work to be done by creating a 2nd function below to work on rendering each infividual tweet before
// sending it back up to renderTweets function for ultimate display


function renderTweets(tweets) {

    var tweetsHTML = tweets.map(eachTweet).join('');

    return `
        <div class="container text-center mt-5">
            ${tweetsHTML}
        </div>
    `
}

function eachTweet(twit) {
    // first will use if statement to determine if user should get a blue verified check
    if (twit.user.isVerified) {
        var veriCheck = `
        <img class="veri-check" src="images/checkmark.png">
        `
    };
    
// had a pretty slick idea going with the above if-check then veri-check creation. 
// It kind of works too.. except for the case where user is not verified.. 
// then it throws up a beautiful "undefined" onto the screen..
// will try to find solution 

    return `
        <div class="tweet-holder">
            <div class="user-cluster">
                <img class="prof-pics" src="${twit.user.profilePic}">
                    <div class="name-handle">
                    <h2>${twit.user.username}</h2>${veriCheck}
                    <h4>${twit.user.handle}</h4>
                    </div>
            </div>
        </div>
    `
}



function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}