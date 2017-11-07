@echo off

cls

pushd %CD%

echo Building...
CALL tsc "BuildRefs.d.ts" --outDir Build_Temp
echo Build complete.

popd 

@echo on