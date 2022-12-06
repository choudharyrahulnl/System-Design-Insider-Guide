// Estimate system capacity


//////////////////
// POWER OF 2
//////////////////

// 1 byte = 8 bits

// 1 KB = 2 Power 10 = 1 Thousand : 640 KB => 640 Thousand Byte
// 1 MB = 2 Power 20 = 1 Million : 640 MB => 640 Million Byte
// 1 GB = 2 Power 30 = 1 Billion : 640 GB => 640 Billion Byte
// 1 TB = 2 Power 40 = 1 Trillion : 640 TB => 640 Trillion Byte
// 1 PB = 2 Power 50 = 1 Quadrillion : 640 PB => 640 Quadrillion Byte


//////////////////////
// LATENCY NUMBER
//////////////////////

// ns = nanosecond, μs = microsecond, ms = millisecond
// 1 ns = 10^-9 seconds
// 1 μs= 10^-6 seconds = 1,000 ns
// 1 ms = 10^-3 seconds = 1,000 μs = 1,000,000 ns

// L1 Cache : .5ns
// L2 Cache : 7ns
// Read 1 MB Sequentially from Memory: 250,000 ns = 250 μs
// Disk Seek: 10,000,000 ns = 10 ms
// Read 1 MB Sequentially from Disk: 30,000,000 ns = 30 ms
// Read 1 MB Sequentially from Network: 10,000,000 ns = 10 ms
// Send 2K bytes over 1 GBPS Network: 20,000 ns = 20 μs


// Memory is fast but the disk is slow.
// Avoid disk seeks if possible.
// Simple compression algorithms are fast.
// Compress data before sending it over the internet if possible.
// Data centers are usually in different regions, and it takes time to send data between them.



//////////////////////
// AVAILABILITY NUMBER
//////////////////////

// High availability is measured as a percentage, with 100% means a service that has 0 downtime
// Most services fall between 99% and 100%

// A service level agreement (SLA) is a commonly used term for service providers
// This is an agreement between you (the service provider) and your customer, and this agreement
// formally defines the level of uptime your service will deliver.


// Availability                       Downtime per day                        Downtime per year
// 99%                                14.40 minutes                           3.65 days
// 99.9%                              1.44 minutes                            8.77 hour
// 99.99%                             8.64 seconds                            52.60 minutes
// 99.999%                            864.00 milliseconds                     5.26 minutes
// 99.9999%                           86.40 milliseconds                      31.56 seconds



///////////////////////////////////////
// Twitter QPS and storage requirements
///////////////////////////////////////

// Assumptions
// 300 million monthly active users
// 50% of users use Twitter daily = 150 million daily active users
// Users post 2 tweets per day on average = 150 * 2 = 300 million tweets per day
// Tweets Query Per Second = 150 * 2 / 24 hour / 3600 seconds = 3500 query per second
// Peek Query Per Second = 2 * 3500 = 7000 query per second

// 10% of tweets contains media
// Avg Tweet Size: tweet_id 64 bytes, text 140 bytes and media 1 MB
// Media storage: 150 * 2 * 10% * 1 MB = 30 TB per day
// Data stored for 5 year = 30TB * 365 * 5 = 55 PB



