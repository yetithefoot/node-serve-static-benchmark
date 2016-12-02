#!/bin/bash
echo "• testing 'node-static'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9001/index.html
wait
echo "======================="
echo 
echo 
echo "• testing 'static-server'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9002/index.html
wait
echo "======================="
echo 
echo 
echo "• testing 'vanilla'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9003/index.html
wait
echo "======================="
echo 
echo 
echo "• testing 'paperboy'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9004/index.html
wait
echo "======================="
echo 
echo 
echo "• testing 'http-server'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9005/index.html
wait
echo "======================="
echo 
echo 
echo "• testing 'nginx'" 
ab -k -n 100000 -c 100 http://127.0.0.1:9000/index.html
wait