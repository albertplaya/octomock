#!/bin/bash

echo "Starting redis-server...";
/usr/bin/redis-server --bind '0.0.0.0' &

echo "Starting node-server...";
npm start;
