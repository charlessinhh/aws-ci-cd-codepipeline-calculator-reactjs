#!/bin/bash
set -e
# echo "e"

#stop the running containers(if any)

#get container id
containerid=`docker ps | awk -F " " '{print $1}'`

#remove the container
docker rm -f $containerid
