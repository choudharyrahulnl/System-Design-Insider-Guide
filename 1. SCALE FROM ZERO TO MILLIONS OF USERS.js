//////////////////////
// SINGLE SERVER SETUP
//////////////////////

// USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//                        <---- IP Address     (DNS)
//      |      |
//      |      |
//      V      V
//
//      WEBSERVER ( RESPOND WITH HTML-PAGES/JSON)


//////////////////////
// DATABASE
//////////////////////

// USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//                        <---- IP Address     (DNS)
//      |      |
//      |      |
//      V      V
//
//      WEBSERVER ( RESPOND WITH HTML-PAGES/JSON)  ----------->  DATABASE

// Non-relational databases might be the right choice if:
// Your application requires super-low latency.
// Your data are unstructured, or you do not have any relational data.
// You only need to serialize and deserialize data (JSON, XML, YAML, etc.).
// You need to store a massive amount of data.

/////////////////////////////////////////
// Vertical scaling vs horizontal scaling
////////////////////////////////////////

// Vertical scaling, referred to as “scale up”, means the process of adding more power (CPU,
// RAM, etc.) to your servers.
// When traffic is low, vertical scaling is a great option, and the simplicity of vertical scaling is
// its main advantage
// Vertical scaling has a hard limit. It is impossible to add unlimited CPU and memory to a
// single server.
// Vertical scaling does not have failover and redundancy. If one server goes down, the
// website/app goes down with it completely.


// Horizontal scaling, referred to as “scale-out”, allows you to scale
// by adding more servers into your pool of resources.



/////////////////////////////////////////////////////
// LOAD BALANCER : WILL SOLVE SINGLE SERVER FAILOVER
/////////////////////////////////////////////////////


//      USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//                             <---- IP Address     (DNS)
//          |      |
//          |      |
//          V      V
//
//          LOAD BALANCER
//          /           \
//      WEBSERVER-1    WEBSERVER-2
//          |               |
//          \               /
//              DATABASE


// Users connect to the public IP of the load balancer directly
// For better security, private IPs are used for communication between servers.
// A private IP is an IP address reachable only between servers in the same network
// The load balancer communicates with web servers through private IPs.


// The current design has one database, so it does not support failover and redundancy.
// Database replication is a common technique to address those problems.




////////////////////////
// DATABASE REPLICATION
////////////////////////

// Database replication can be used in many database management systems, usually with a
// master/slave relationship between the original (master) and the copies (slaves)

//                   WEBSERVER
//            (WRITE)/        \ (READ)
//           MASTER-DB -----> SLAVE-DB-1 ( REPLICATION FROM MASTER TO SALVE )
//                     -----> SLAVE-DB-2


// Advantages of database replication:

// Better performance: In the master-slave model, all writes and updates happen in master
// nodes; whereas, read operations are distributed across slave nodes. This model improves
// performance because it allows more queries to be processed in parallel.

// Reliability: If one of your database servers is destroyed by a natural disaster, such as a
// typhoon or an earthquake, data is still preserved. You do not need to worry about data loss
// because data is replicated across multiple locations.

// High availability: By replicating data across different locations, your website remains in
// operation even if a database is offline as you can access data stored in another database
// server.


// what if one of the databases goes offline ?

// If only one slave database is available, and it goes offline, read operations will be directed
// to the master database temporarily. As soon as the issue is found, a new slave database
// will replace the old one. In case multiple slave databases are available, read operations are
// redirected to other healthy slave databases. A new database server will replace the old one.

// If the master database goes offline, a slave database will be promoted to be the new
// master. All the database operations will be temporarily executed on the new master
// database. A new slave database will replace the old one for data replication immediately.
// In production systems, promoting a new master is more complicated as the data in a slave
// database might not be up-to-date. The missing data needs to be updated by running data
// recovery scripts.




///////////////////
// CACHE
///////////////////


//           IF DATA EXIST IN CACHE
// WEBSERVER ------------------------CACHE-------------------------------DATABASE
//                                          IF DATA DOESN'T EXIST IN CACHE

// READ THROUGH CACHE -> READ FROM CACHE IF EXIST OTHERWISE HIT DATABASE
// WRITE THROUGH CACHE -> ALL WRITE WILL HAPPEN IN 1 TRANSACTION FIRST IN CACHE THEN IN DATABASE

// Expiration policy: Not too short and not too long
// Consistency: This involves keeping the data store and the cache in sync
// Mitigating failures: A single cache server represents a potential single point of failure
// Eviction Policy: Least-recently-used (LRU) is the most popular cache eviction policy OR FIFO




/////////////////
// CDN
/////////////////

// A CDN is a network of geographically dispersed servers used to deliver static content.
// CDN servers cache static content like images, videos, CSS, JavaScript files, etc.


//          GET IMAGE     IF IMAGE IS NOT PRESENT IN CDN
// User A    ------   CDN ------------------------------   SERVER
// User B    ------   CDN ------------------------------   SERVER

// User A tries to get image.png by using an image URL. The URL’s domain is provided
// by the CDN provider.

// The following image URLs are samples used to demonstrate
// what image URLs look like on Amazon: https://mysite.cloudfront.net/logo.jpg

// If the CDN server does not have image.png in the cache, the CDN server requests the
// file from the origin, which can be a web server or online storage like Amazon S3

// The origin returns image.png to the CDN server, which includes optional HTTP header
// Time-to-Live (TTL) which describes how long the image is cached

// The CDN caches the image and returns it to User A. The image remains cached in the
// CDN until the TTL expires

// User B sends a request to get the same image. The image is returned from the cache
// as long as the TTL has not expired



//      CDN <-------- USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//      CDN -------->                        <---- IP Address     (DNS)
//                      |      |
//                      |      |
//                      V      V
//
//                      LOAD BALANCER
//                      /           \
//                     WEBSERVER-1    WEBSERVER-2  ----------> CACHE
//                      |               |
//                      \               /
//                          DATABASE



// Static assets (JS, CSS, images, etc.,) are no longer served by web servers. They are
// fetched from the CDN for better performance

// The database load is lightened by caching data


//////////////////////
// STATELESS WEB TIER
/////////////////////

// Scaling the web tier horizontally, we need to move state out of the web tier

// A good practice is to store session data in the persistent storage such as
// relational database or NoSQL

// Each web server in the cluster can access state data from databases

//                   USER-A   USER-B
//                      |      |
//                      |      |
//                      V      V
//
//                      LOAD BALANCER
//                      /           \
//                     WEBSERVER-1    WEBSERVER-2
//                         |              |
//                         |              |
//                          SHARED STORAGE

// In this stateless architecture, HTTP requests from users can be sent to any web servers
// which fetch state data from a shared data store.

// State data is stored in a shared data store and kept out of web servers
// A stateless system is simpler, more robust, and scalable


//      CDN <-------- USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//      CDN -------->                        <---- IP Address     (DNS)
//                      |      |
//                      |      |
//                      V      V
//
//                      LOAD BALANCER
//                      /           \
//  NoSQL(State) <--- WEBSERVER-1    WEBSERVER-2  ----------> CACHE
//                      |               |
//                      \               /
//                          DATABASE

// The NoSQL data store is chosen as it is easy to scale

// A stateful server remembers client data (state) from one request to the next.
// A stateless server keeps no state information

// The issue is that every request from the same client must be routed to the same server
// This can be done with sticky sessions in most load balancers

// Adding or removing servers is much more difficult with this approach
// It is also challenging to handle server failures




//////////////////////
// DATA CENTER
/////////////////////

// Setup with two data centers

// Users are geoDNS-routed, also known as geo-routed, to the closest data center

// With a split traffic of x% in US-East and (100 – x)% in US-West

// geoDNS is a DNS service that allows domain names to be resolved to IP addresses
// based on the location of a user



//      CDN <-------- USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//      CDN -------->                        <---- IP Address     (DNS)
//                      |      |
//                      |      |
//                      V      V
//
//                      LOAD BALANCER
//                      /           \
//                     /             \
//                    /               \
//                   /                 \
//            US-EAST                   US-WEST
//     WEBSERVER-1 WEBSERVER-2 ----->  WEBSERVER-1 WEBSERVER-2 -------> NoSQL Shared Storage
//      |               |                   |           |
//      |               |                   |           |
//      |               |                   |           |
//      \               /                   \           /
//     DATABASE  &    CACHE                DATABASE & CACHE


// In the event of any significant data center outage, we direct all traffic to a healthy data center
// For Databases & Cache, common strategy is to replicate data across multiple data centers




//////////////////////
// MESSAGE QUEUE
/////////////////////

// A message queue is a durable component, stored in memory, that supports asynchronous communication

// Input services, called producers/publishers, create messages, and publish them to a message queue
// Other services or servers, called consumers/subscribers, connect to the queue,
// and perform actions defined by the messages

// PRODUCER ---------------> MESSAGE QUEUE --------------> CONSUMER

// With the message queue, the producer can post a message to the queue when the consumer is
// unavailable to process it. The consumer can read messages from the queue even when the
// producer is unavailable.

// The producer and the consumer can be scaled independently
// When the size of the queue becomes large, more workers are added to reduce the processing time
// However, if the queue is empty most of the time, the number of workers can be reduced.



/////////////////////////////
// LOGGING METRICS AUTOMATION
/////////////////////////////

// Logging: logging error to centalize place

// Metrics: Webserver Load Metrics ( CPU & Memory ), DB Load Metrics, Bussiness Metrics like active users

// Automation: using CI/CD


//      CDN <-------- USER (BROWSER, MOBILE) ----> api.mysite.com (DNS)
//      CDN -------->                        <---- IP Address     (DNS)
//                      |      |
//                      |      |
//                      V      V
//                     LOAD BALANCER
//                          | |
//                        WEBSERVER  -------> MESSAGE QUEUE ----------> WEBSERVER
//                           |
//                           |
//                        DATABASE
//          Logging, Metrics, Monitoring, Automation




/////////////////////////////
// DATABSE SCALING
/////////////////////////////

// Horizontal and Vertical Scaling

// Vertical scaling, there are some powerful database server ex amazon rds has 24TB of RAM
// Stack Overflow was having 1 DB which serves for 10 million monthly users
// Drawback are single point of failure, powerful machine are expensive, there is a hardware limit


// Horizaontal Scaling (add more servers) also known as sharding
// Sharding separates large databases into smaller, more easily managed parts called shards
// Each shard shares the same schema, though the actual data on each shard is unique to the shard

// Ex User Data is allocated to database server based on UserID, anytime you access data hash function
// is used to find the crossponding shard for store/fetch data

// Sharding is a great technique to scale the database but it is far from a perfect solution
// It introduces complexities and new challenges to the system

// Resharding data: When a single shard could no longer hold more data due to rapid growth and
// Certain shards might experience shard exhaustion faster than others due to uneven data distribution
// this is can be solved by consistent hashing

// Celebrity problem: Excessive access to a specific shard could cause server overload
// To solve this problem, we may need to allocate a shard for each celebrity

// Join and de-normalization: Once a database has been sharded across multiple servers, it is
// hard to perform join operations across database shards. A common workaround is to denormalize
// the database so that queries can be performed in a single table




/////////////////////////
// CHAPTER 1 CONCLUSION
/////////////////////////

// Keep web tier stateless
// Build redundancy at every tier
// Cache data as much as you can
// Support multiple data centers
// Host static assets in CDN
// Scale your data tier by sharding
// Split tiers into individual services
// Monitor your system and use automation tools