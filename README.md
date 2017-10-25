# Build notice

To build for app:

1. (development) -> npm run build-js
2. (production)  -> npm run build-live-js

Settings for package.json
if OS windows ->
    "build-live-js": "set NODE_ENV=production && node ./node_modules/webpack/bin/webpack.js"

if Mac OS     ->
    "build-mac": "NODE_ENV=production node ./node_modules/webpack/bin/webpack.js"

```
	> NODE_ENV=dev npm run build-js
	> NODE_ENV=production npm run build-live-js
	> NODE_ENV=production npm run build-mac
```
To start app in localhost http://localhost:8080/ -> run script 'npm start'