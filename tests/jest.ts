import Knex from "knex";

import { Item, createTable, databaseConfig } from "./common";

import { Model } from "objection";
import { transactionPerTest } from "../index";

const knex: Knex = Knex(databaseConfig);
Model.knex(knex);

beforeAll(async () => await createTable(knex));

transactionPerTest();

describe("testPerTransaction", () => {
  it("can access models during test", async () => {
    await Item.query().insert({});
    const count = await Item.query().count();
    expect(count).toEqual([{ "count(*)": 1 }]);
  });

  it("rolls back transaction after tests", async () => {
    await Item.query().insert({});
  });

  afterAll(async done => {
    const count = await Item.query().count();
    expect(count).toEqual([{ "count(*)": 0 }]);
    done();
  }, 1000);
});

afterAll(async () => await knex.destroy());
