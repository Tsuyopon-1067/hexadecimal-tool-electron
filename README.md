# hexadecimal-tool-electron
npm install -D electron
npx electron ./src
npx electron-packager src FirstApp --platform=darwin --arch=arm64 --overwrite
npx electron-builder --dir --mac --arm64
