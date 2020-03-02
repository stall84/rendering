// Like we've been doing will separate work to be done by creating a 2nd function below to work on rendering each infividual tweet before
// sending it back up to renderTweets function for ultimate display


function renderTweets(tweets) {

    var tweetsHTML = tweets.map(eachTweet).join('');

    return `
        <div class="container mt-5">
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
    } else { veriCheck = ""};
    
    // make variables to store the footer images (likes/retweets,etc)
    var replyImg = `<img class="footer-png" src="images/reply.png">`;
    var likesImg = `<img class="footer-png" src="images/likes.png">`;
    var retwtImg = `<img class="footer-png" src="images/retweet.png">`;
    var msgImg =   `<img class="footer-png" src="images/message.png">`;

    
// had a pretty slick idea going with the above if-check then veri-check creation. 
// It kind of works too.. except for the case where user is not verified.. 
// then it throws up a beautiful "undefined" onto the screen..
// will try to find solution 

// work-around solution: assign an empty string to veriCheck variable if isVerified condition false 

    return `
        <div class="tweet-holder">
            <div class="user-cluster">
                <img class="prof-pics" src="${twit.user.profilePic}">
                    <div class="name-handle">
                        <h4>${twit.user.username}${veriCheck}</h2>
                        <h6>${twit.user.handle}</h4>
                    </div>
            </div>
            <div class="tweet-content">
                <h3>${twit.text}</h3>
                <hr>
            </div>
            
            <div class="tweet-footer">
            
                <ul>
                    <li>${replyImg}${twit.replies}</li><li>${retwtImg}${twit.retweets}</li><li>${likesImg}${twit.likes}</li><li>${msgImg}</li>
                </ul>
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