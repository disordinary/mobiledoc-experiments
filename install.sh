#!/bin/bash

npm install
bower install
cd bower_components
git clone git@github.com:disordinary/mobiledoc-kit.git --branch section-lifecycle --single-branch 
cd mobiledoc-kit

npm install
bower install
npm run-script build