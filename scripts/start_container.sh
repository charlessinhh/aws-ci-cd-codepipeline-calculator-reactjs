#!/bin/bash
set -e

#pull the docker image from docker hub
docker pull singhcharles/calculator-reactjs

#start the conatiner on port in daemon mode
docker run -d -p 3000:3000 singhcharles/calculator-reactjs
