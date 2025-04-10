#!/user/bin/env bash

ENV="develop"

sh -ac "env-cmd -f .env.$ENV next dev --turbopack"