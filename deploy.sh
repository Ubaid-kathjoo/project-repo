#!/bin/bash

cd /home/ec2-user/nodeapp

# Stop and remove old containers
docker-compose down

# Start new containers
docker-compose up -d --build
