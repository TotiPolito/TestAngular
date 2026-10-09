$pnpm = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"
if (-not (Test-Path $pnpm)) {
  Write-Error "No encuentro pnpm. Instala Node.js con npm o pnpm y ejecuta 'npm install' y 'npm start'."
  exit 1
}
& $pnpm start
