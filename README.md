# Traefik Healthcheck Test

It seems as though for any particular service, each server in the pool is healthchecked sequentially.

There are many scenarios where this is fine, but sometimes you want to be able to check them concurrently. It would be nice if this was a config option.

## Usage

Just run `docker-compose --compatibility up` and you should be able to see the healthcheck requests appear one-by-one.

If you want to play with the delay, update the `SERVICE_DELAY` environment variable to the desired delay in milliseconds. You can also adjust Traefik's healthcheck frequency and timeout via the appropriate labels.