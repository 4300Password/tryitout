#!/bin/bash

FILENAME="DROPBOX"
YEAR="2012"

# Copy skeleton script to temporary entropy.r script
cp skel.r entropy.r

# Replace all temp R variables with actual filenames to load CSVs
sed -i 's/{{In1}}/"'${FILENAME}'-SHANNON-'${YEAR}'.csv"/' entropy.r
sed -i 's/{{Out1}}/"'${FILENAME}'-SHANNON-'${YEAR}'-DONE.csv"/' entropy.r
sed -i 's/{{In2}}/"'${FILENAME}'-LOGBASE2-'${YEAR}'.csv"/' entropy.r
sed -i 's/{{Out2}}/"'${FILENAME}'-LOGBASE2-'${YEAR}'-DONE.csv"/' entropy.r

# Run the r script
./entropy.r

# Grab the date,value and remove the rest of the quotes
cut -d'"' -f4 "${FILENAME}"'-SHANNON-'${YEAR}'-DONE.csv' > temp-sh.csv
cut -d'"' -f4 "${FILENAME}"'-LOGBASE2-'${YEAR}'-DONE.csv' > temp-l2.csv

# Remove the first empty line
tail -n +2 temp-sh.csv > "${FILENAME}"'-SHANNON-'"${YEAR}"'-DONE.csv'
tail -n +2 temp-l2.csv > "${FILENAME}"'-LOGBASE2-'"${YEAR}"'-DONE.csv'

# Move all files to a separate directory
mkdir "${FILENAME}"
cp "${FILENAME}"* "${FILENAME}" 2>/dev/null

# Clean up environment
rm "${FILENAME}"* temp-sh.csv temp-l2.csv entropy.r 2>/dev/null
