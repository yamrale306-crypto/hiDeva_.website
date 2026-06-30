@echo off
setlocal

REM Simple static server for index.html + local assets.
REM Uses built-in PowerShell WebListener when available.

set "DIR=%~dp0"
set "DIR=%DIR:~0,-1%"

REM Pick a port (try 8080, then 8081 if blocked)
set "PORT=8080"

:tryport
powershell -NoProfile -ExecutionPolicy Bypass -Command "
  $ErrorActionPreference='Stop';
  $port = %PORT%;

  $prefix='http://localhost:'+$port+'/';
  $listener = [System.Net.HttpListener]::new();
  $listener.Prefixes.Add($prefix);
  $listener.Start();
  Write-Output ('Serving ' + '%DIR%' + ' on ' + $prefix);

  while($true){
    $ctx = $listener.GetContext();
    $req = $ctx.Request;
    $res = $ctx.Response;

    try{
      $path = $req.Url.AbsolutePath;
      if($path -eq '/' -or [string]::IsNullOrWhiteSpace($path)){ $path = '/index.html' }
      $path = $path.TrimStart('/').Replace('/', '\\');
      $full = Join-Path '%DIR%' $path

      if(!(Test-Path $full)){
        $full = Join-Path '%DIR%' 'index.html'
      }

      $bytes = [System.IO.File]::ReadAllBytes($full);

      $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant();
      switch($ext){
        '.html' { $ctype='text/html; charset=utf-8' }
        '.css' { $ctype='text/css; charset=utf-8' }
        '.js' { $ctype='application/javascript; charset=utf-8' }
        '.jsx' { $ctype='text/plain; charset=utf-8' }
        '.json' { $ctype='application/json; charset=utf-8' }
        '.png' { $ctype='image/png' }
        '.jpg' { $ctype='image/jpeg' }
        '.jpeg' { $ctype='image/jpeg' }
        '.svg' { $ctype='image/svg+xml; charset=utf-8' }
        default { $ctype='application/octet-stream' }
      }
      $res.ContentType = $ctype;
      $res.StatusCode = 200;
      $res.OutputStream.Write($bytes,0,$bytes.Length);
      $res.OutputStream.Close();
    }
    catch{
      $msg = 'Server error';
      $buf = [System.Text.Encoding]::UTF8.GetBytes($msg);
      $res.StatusCode = 500;
      $res.ContentType = 'text/plain; charset=utf-8';
      $res.OutputStream.Write($buf,0,$buf.Length);
      $res.OutputStream.Close();
    }
  }
" 

if errorlevel 1 (
  set /a PORT+=1
  goto :tryport
)
endlocal

