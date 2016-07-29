#!/usr/bin/env bash

REGION=eu-west-1
STAGE=test
PROFILE=default

sls project init -n kitchen -s $STAGE -r $REGION -p $PROFILE
sls stage create -s $STAGE -r $REGION -p $PROFILE
sls function deploy -s $STAGE -r $REGION
# sls resources deploy -s $STAGE -r $REGION
sls endpoint deploy -s $STAGE -r $REGION

