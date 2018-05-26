#!/bin/bash

set -e

PGPASSWORD=otarypassword psql -f /fixtures/database-schema.sql -d somedb -U user
