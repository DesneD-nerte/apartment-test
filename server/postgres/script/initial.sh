echo "########### Setting up Postgres DB ###########"

# Database Name - apartment_test

pg_restore -U postgres -d apartment_test --no-owner -1 /tmp/dumb/apartments_db.sql