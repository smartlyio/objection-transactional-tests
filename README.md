# Objection transactional tests

Run tests in Jest or Mocha in Objection transactions. This starts a new transaction at the beginning of each tests and does a rollback at the end of it, reverting the database to the state it was in before  the test.

## Usage

```javascript

import { transactionPerTest } from "objection-transactional-tests";

describe("examples", () => {
  transactionPerTest();
  it("database interactions", () => {
    // do something that touches database
  });
});

```

Note that any database changes done in `beforeAll` won't be cleaned up.

The setup can be added to test setup script to apply it automatically for all
tests. This will ensure that no test pollute the test database, but also adds
overhead to tests that do not use the database.
