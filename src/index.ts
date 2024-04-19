import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { transactions, debts } from './db/schema'

export type Env = {
  DB: D1Database
}

const app = new Hono<{Bindings: Env}>()

app.get('/', async (c) => {
  const db = drizzle(c.env.DB)
  const txns = await db.select().from(transactions).all();
  return c.json(txns)
})

app.post('/transaction', async (c) => {
  const db = drizzle(c.env.DB);
  const {transactionAmount, transactionDate, transactionName} = await c.req.json();
  const result = await db.insert(transactions).values({transactionAmount, transactionDate, transactionName}).returning();
  return c.json(result);
})

app.get('/debt', async (c) => {
  const db = drizzle(c.env.DB);
  // get all debts
  const result = await db.select().from(debts).all();
  return c.json(result);
})

app.post('/debt', async (c) => {
  const db = drizzle(c.env.DB);
  const {debtName, debtAmount, interestRate, debtPeriod} = await c.req.json();
  const result = await db.insert(debts).values({debtName, debtAmount, interestRate, debtPeriod}).returning();
  return c.json(result);
});

export default app
