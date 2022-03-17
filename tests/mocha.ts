import { Knex, knex } from 'knex';

import * as assert from "assert";
import { Model } from "objection";
import { transactionPerTest } from "../index";
import { Item, createTable, databaseConfig } from "./common";

const connection: Knex = knex(databaseConfig);
Model.knex(connection);

before(async () => await createTable(connection));

transactionPerTest();

describe("testPerTransaction", () => {
  it("can access models during test", async () => {
    await Item.query().insert({});
    const count = await Item.query().count();
    assert.equal(count[0]["count(*)"], 1);
  });

  it("rolls back transaction after tests", async () => {
    await Item.query().insert({});
  });

  after(async () => {
    const count = await Item.query().count();
    assert.equal(count[0]["count(*)"], 0);
  });
});

after(async () => await connection.destroy());
