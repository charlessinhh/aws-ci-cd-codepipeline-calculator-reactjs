#!/bin/bash
set -e

#stop the running containers(if any)

#get container id
containerid=`docker ps | awk -F " " '{print $1}'`

#remove the container
docker rm -f $containerid  

# Remove all unused images (dangling images)
docker image prune
