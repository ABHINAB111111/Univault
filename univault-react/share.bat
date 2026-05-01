@echo off
echo Starting UniVault Development Server and Tunnel...

:: Start Vite in a separate window
start cmd /k "npm run dev"

echo Waiting for Vite to start...
timeout /t 5

:start_tunnel
echo Starting tunnel...
:: Try to use a subdomain if you want a consistent URL (change 'univault-campus' to something unique)
npx localtunnel --port 5173 --subdomain univault-campus > tunnel_url.txt 2>&1

echo Tunnel disconnected. Restarting in 5 seconds...
timeout /t 5
goto start_tunnel
