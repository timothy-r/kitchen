#!/bin/bash

NAME=$1
STYLE=$2

URL=$KITCHEN_TEST/kitchens

DATA='{"name":"'$NAME'","style":"'$STYLE'"}'

echo $DATA

curl -X POST \
    -H "X-Api-Key:"$API_KEY \
    -H "Content-Type: application/json" \
    -d $DATA \
    $URL \
    -vvv
