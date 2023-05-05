#!/bin/bash
##
## This script is for updating all libraries to the latest automatically.
##

function getListName {
  declare key=$1
  declare localDepList
  localDepList=$(cat package.json | jq $key | jq 'keys')
  localDepList=$(echo $localDepList | sed -E 's/[,"]//g' | sed -E 's/\[//g' | sed -E 's/\]//g')
  echo -n $localDepList
}

function updateYarn {
  depList=$(getListName '.dependencies')
  yarn add $depList

  depList=$(getListName '.devDependencies')
  yarn -D add $depList
}
jsonFiles=$(find . -name "package.json" -d 2)

for jsonFile in ${jsonFiles[@]}; do
  targetDir=$(dirname $jsonFile)
  cd $targetDir
  updateYarn
  cd - 
done
