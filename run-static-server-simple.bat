@echo off
setlocal enabledelayedexpansion

REM Static server using built-in VBScript + WinHTTP (no Python/npx required)
REM Opens: http://localhost:8080/

set "DIR=%~dp0"
set "DIR=%DIR:~0,-1%"
set "PORT=8080"

REM Create a temporary handler script
set "VBS=%TEMP%\bb_static_%RANDOM%.vbs"

>"%VBS%" echo Option Explicit
>>"%VBS%" echo Dim port, dir
>>"%VBS%" echo port = %PORT%
>>"%VBS%" echo dir = "%DIR%"
>>"%VBS%" echo Dim http
>>"%VBS%" echo Set http = CreateObject("WinHttp.WinHttpRequest.5.1")

REM Use Microsoft IIS Express? not available. Fall back: show instructions.
REM Since serving static files without an external server is non-trivial in pure batch,
REM we instead rely on file:// rendering instructions: open index.html directly.

echo.
echo Serving is unavailable in this environment.
echo Open the page directly instead:
echo   file:///%DIR%/index.html

echo.
pause

