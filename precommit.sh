#!/usr/bin/env bash

yarn version --patch --no-commit-hooks --no-git-tag-version && git add package.json

yarn build && git add .
