@echo off

cls

pushd %CD%

echo Building...
CALL tsc "BuildRefs.d.ts" --declaration --outDir Build

pause

echo Re-generating Build folder
CALL "%CD%\..\..\..\Releases\Release Builder\Release Builder\bin\Release\Release Builder.exe" build

echo Please update bundles...
pause

echo Building release dev...
CALL "%CD%\..\..\..\Releases\Release Builder\Release Builder\bin\Release\Release Builder.exe" release %1
pause

popd

@echo on