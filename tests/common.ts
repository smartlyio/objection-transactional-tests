import * as Knex from "knex";
import { Model } from "objection";

export class Item extends Model {
  static tableName = "items";
}

export const createTable = async (knex: Knex) => {
  return await knex.schema.createTable(Item.tableName, t => {
    t.increments("id").primary();
    t.string("name");
  });
}

export const databaseConfig = {
  client: "sqlite",
  connection: ":memory:",
  useNullAsDefault: true
};
