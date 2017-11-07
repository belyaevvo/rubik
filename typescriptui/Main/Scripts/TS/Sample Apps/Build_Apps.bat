@echo off

cls

pushd %CD%

echo Building...
CALL tsc "Starters/SampleSelectorAppStarter.ts" "Starters/Sample0Starter.ts" "Starters/Sample1Starter.ts" "Starters/Sample2Starter.ts" "Starters/Sample3Starter.ts" "Starters/Sample4Starter.ts" "Starters/Sample5Starter.ts" "Starters/Sample6Starter.ts" "Starters/Sample7Starter.ts" "Starters/Sample8Starter.ts" "Starters/Sample9Starter.ts" "Starters/Sample10Starter.ts" "Starters/Sample11Starter.ts" "Starters/Sample12Starter.ts" "Starters/Sample13Starter.ts" "Starters/Sample14Starter.ts" "Starters/Sample15Starter.ts" "Starters/Sample16Starter.ts"
echo Build complete.

popd 

@echo on