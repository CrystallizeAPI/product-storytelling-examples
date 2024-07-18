#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "${SCRIPT}")
PROJECT_PATH=${SCRIPTPATH}/../..

console() {
    echo -e ${PROJECT_PATH}
}

if [ ! -f "${PROJECT_PATH}/provisioning/clone/.crystallize" ]; then
    echo "It does not seem to be a clean clone. Aborting."
    exit 1
fi

# Note that Crystallize CLI is acting before this script.

echo "Setup ${PROJECT_PATH}"
cp ${PROJECT_PATH}/provisioning/clone/robots.txt ${PROJECT_PATH}/remix/robots.txt
cp ${PROJECT_PATH}/provisioning/clone/.env.dist ${PROJECT_PATH}/service-api/.env.dist

#---
echo "Running command ${PROJECT_PATH}"
cd ${PROJECT_PATH}/remix && cat ${PROJECT_PATH}/remix/.env.local.example <(echo) ${PROJECT_PATH}/remix/.env.dist > .env
cd ${PROJECT_PATH}/service-api && cat ${PROJECT_PATH}/service-api/.env.local.example <(echo) ${PROJECT_PATH}/service-api/.env.dist > .env
cd ${PROJECT_PATH}/remix && npm install --no-progress --no-color --legacy-peer-deps
cd ${PROJECT_PATH}/service-api && npm install --no-progress --no-color --legacy-peer-deps

#---

echo "Cleanup ${PROJECT_PATH}"

rm -rf ${PROJECT_PATH}/.github
rm -rf ${PROJECT_PATH}/.git
rm -rf ${PROJECT_PATH}/.vscode
rm -rf ${PROJECT_PATH}/provisioning/clone
