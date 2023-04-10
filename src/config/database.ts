import pg from "pg";

const { Pool } = pg;

const connectionDb = new Pool({
    connectionString: "postgres://postgres:root@localhost:5432/movieapi"
});

export default connectionDb;