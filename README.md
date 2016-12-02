# Server static files test

This repo is simple test for serving static files with node comparing to nginx.


## Assumptions
This is syntetic test that serving already generated sample file. It serving via plain HTTP (no HTTPS handshakes that can slow down node). Testing on local machine, so no network problems. Testing with no response gzipping to make node as fast as possible. No logging.

## Install
Add `nginx.conf` file to nginx enabled sites. 

## Process
Testings process is done by `ab` utility by apache. Sending 100000 requests with 100 concurrent requests. Option -k to keep connection alive and not hit 16k limit.


## Commands
`npm start` — run node servers
`npm test` — run testing utility


## Results
`node-static` — 7565.63 req/sec, 0.132 ms/req, 1499.83 Kb/sec
`server-static` — 6459.55 req/sec, 0.155 ms/req, 1280.99 Kb/sec
`nginx` — __15592.83 req/sec__, __0.064 ms/req__, __896480.43 Kb/sec__

Clean nginx istall 2-3 times faster than any node solutions. For real networks, gzipped content, HTTPS, enabled caching results will be different.

## Further reading
http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load/
http://stackoverflow.com/questions/9967887/node-js-itself-or-nginx-frontend-for-serving-static-files
https://hashnode.com/post/why-is-it-not-recommended-to-serve-static-files-from-nodejs-ciibz8flv01duj3xt4lxuomp3
