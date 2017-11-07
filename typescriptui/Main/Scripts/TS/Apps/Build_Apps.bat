@echo off

cls

pushd %CD%

echo Building...
CALL tsc "MyApp.ts" "DemoApp.ts"
CALL uglifyjs -o "MyApp.min.js" "MyApp.js"
CALL uglifyjs -o "DemoApp.min.js" "DemoApp.js"
echo Build complete.

popd 

@echo on