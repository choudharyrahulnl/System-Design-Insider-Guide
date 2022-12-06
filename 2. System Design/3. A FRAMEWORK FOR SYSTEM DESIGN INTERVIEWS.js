/////////////////
// 4 STEP PROCESS
/////////////////


/////////////////////////////////////////////////////
// Understand the problem and establish design scope
////////////////////////////////////////////////////

// Clarify requirement and assumptions

// What specific feature are we going to build
// How many users does the product have
// How fast company anticipate/expect to scale up - 3 month, 6 month, 1 year
// What is company technology stack, what existing service we can reuse

// Ex News Feed App
// Is this mobile app or web app or both - both
// What are the most important feature of the product - ability to make post & see friends post
// News feed are sorted with time or top priority is your friends or groups - most recent time
// How many friends can a user have - 5000
// What is traffic volume - 10 million daily active users
// Can feed contain images, videos or just text - contain all



/////////////////////////////////////////////////////
// Propose high-level design and get buy-in
////////////////////////////////////////////////////

// Feed publishing: When users publishes a post, corresponding data is written into cache/database,
// and the post will be populated into friends’ news feed

// Newsfeed building: the news feed is built by aggregating friends’ posts in a reverse
// chronological order



//      CDN <-------- USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//      CDN -------->                        <---- IP Address     (DNS)
//                               |      |
//                               |      |
//                               V      V
//                            LOAD BALANCER
//                                | |
//                             WEBSERVER
//                      |                     |                 |
//                      V                     V                 V
//                Post Service          News Feed Service     Notification Service
//                      |                     |
//                      |                     |
//                Post Cache            News Feed Cache
//                      |
//                      |
//                Post DATABASE


//