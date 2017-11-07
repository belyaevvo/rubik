@echo off

cls

cloc-1.60.exe --list-file="All Sub folders cloc list.txt" --exclude-list-file="All Sub folders cloc exclude list.txt" --out="All Sub folders cloc results.txt" --force-lang=Javascript,ts --exclude-ext="js,ts.wiki,bat,cmd" --by-file

@echo on