import { transaction, Model, Transaction } from "objection";

export const transactionPerTest = () => {
  let trx: Transaction;
  const knex = Model.knex();

  beforeEach(async () => {
    trx = await transaction.start(knex);
    Model.knex(trx);
  });

  afterEach(async () => {
    await trx.rollback();
    Model.knex(knex);
  });
};
