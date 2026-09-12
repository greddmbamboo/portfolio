#!/bin/zsh

set -u

readonly script_dir="${0:A:h}"
readonly project_dir="${script_dir:h}"
readonly port="4322"

cd "$project_dir" || exit 1

while true; do
  if /usr/sbin/lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
    sleep 10
    continue
  fi

  /usr/local/bin/npm run dev -- --host 127.0.0.1 --port "$port"
  sleep 2
done
