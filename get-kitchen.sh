#!/usr/bin/env bash

#!/bin/bash

ID=$1

URL=$KITCHEN_TEST/kitchens/$ID


curl -X GET \
    -H "X-Api-Key:"$API_KEY \
    -H "Content-Type: application/json" \
    $URL \
    -vvv
