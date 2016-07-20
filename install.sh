#!/bin/bash

npm install
bower install
cd bower_components
git clone git@github.com:disordinary/mobiledoc-kit.git
cd mobiledoc-kit
git checkout -b section-lifecycle
npm install
bower install
npm run-script build