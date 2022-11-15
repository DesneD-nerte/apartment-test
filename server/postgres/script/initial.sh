echo "########### Setting up Postgres DB ###########"

pg_restore -U postgres -d apartment_test --no-owner -1 /tmp/dumb/apartments_db.sql