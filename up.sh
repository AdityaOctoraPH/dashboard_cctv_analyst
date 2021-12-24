#!/bin/bash
docker build --tag dashboard_jmvc .
docker run -d --restart always -p 80:80 --add-host host.docker.internal:host-gateway -e REACT_APP_PROXY8080=//192.168.99.27:8080 --name Dashboard_jmvc dashboard_jmvc
