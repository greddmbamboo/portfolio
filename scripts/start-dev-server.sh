#!/bin/zsh

set -u

readonly script_dir="${0:A:h}"
readonly project_dir="${script_dir:h}"
readonly session_name="gaige-portfolio"
readonly port="4322"

if /usr/sbin/lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
  exit 0
fi

if /usr/bin/screen -list | /usr/bin/grep -q "\.${session_name}[[:space:]]"; then
  exit 0
fi

cd "$project_dir" || exit 1

/usr/bin/screen \
  -dmS "$session_name" \
  /bin/zsh "$script_dir/keep-dev-server-running.sh"
