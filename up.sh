#!/bin/bash
#docker build --tag dashboard .
docker run -d --restart always -p 80:80 --add-host host.docker.internal:host-gateway -e REACT_APP_PROXY3008=//192.168.100.131:3008 -e REACT_APP_PROXY8080=http://192.168.100.131:8080 --name Dashboard dashboard
