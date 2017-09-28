# Build notice

To build for app:

1. (development) -> npm run build-js
2. (production)  -> npm run build-live-js

Settings for package.json
if OS windows ->
    "build-live-js": "set NODE_ENV=production && node ./node_modules/webpack/bin/webpack.js"

if Mac OS     ->
    "build-live-js": "NODE_ENV=production node ./node_modules/webpack/bin/webpack.js"

```
	> NODE_ENV=dev npm run build-js
	> NODE_ENV=production npm run build-live-js
```
To start app in localhost -> run script

npm start