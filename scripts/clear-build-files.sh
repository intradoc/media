#!/usr/bin/env bash

npx tsc --build --clean \
  && rm -rf \
    packages/**/*dist \
    packages/**/*.tsbuildinfo
