#!/bin/bash

SHANNON=$(find . -type f -name "*SHANNON-*-DONE*")
LOGBASE2=$(find . -type f -name "*LOGBASE2-*-DONE*")

echo "date,value" > date-shannon.csv
echo "date,value" > date-logbase2.csv

for file in $SHANNON; do
	cat "${file}" >> date-shannon.csv
done

for file in $LOGBASE2; do
	cat "${file}" >> date-logbase2.csv
done
