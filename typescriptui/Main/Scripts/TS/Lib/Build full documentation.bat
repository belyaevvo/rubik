@echo off

cls

echo Building...
CALL tsc --documentation "BuildRefs.d.ts"  --outDir Documentation --wikiRemoveRoot "%CD%/Documentation/|%CD%" --wikiSourceRoot "https://typescriptui.codeplex.com/SourceControl/latest#Main/Scripts/TS/Lib/"
echo Deleting JS files...
pushd "%CD%\Documentation"
del /S *.js
popd
pushd "%CD%\..\Definitions"
del /S /Q *.ts.wiki
for /f "delims=" %%d in ('dir /s /b /ad ^| sort /r') do rd "%%d"
popd
@echo on