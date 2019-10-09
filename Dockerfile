# ========================================
# =               Warning!               =
# ========================================
# This is Github Action docker-based image.
# It is not intended for local development!
#
# It can still be used as a raw image for your own containers.
# See `action.yml` in case you want to learn more about Github Actions.
# See it live:
# https://github.com/sobolevn/restrict-cursing-action/actions

FROM node:10-alpine

COPY . /tmp/cursing
WORKDIR /tmp/cursing

RUN npm install --prod
ENTRYPOINT pwd && ls
