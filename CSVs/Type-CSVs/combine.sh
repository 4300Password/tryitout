#!/bin/bash

SHANNON=$(find . -type f -name "*SHANNON-*-DONE*")
LOGBASE2=$(find . -type f -name "*LOGBASE2-*-DONE*")

echo "domain,value" > domain-shannon.csv
echo "domain,value" > domain-logbase2.csv

for file in $SHANNON; do
	cat "${file}" >> domain-shannon.csv
done

for file in $LOGBASE2; do
	cat "${file}" >> domain-logbase2.csv
done
