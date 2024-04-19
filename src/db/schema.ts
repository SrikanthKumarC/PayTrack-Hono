import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable('transactions', {
    id: integer('id', {mode: "number"}).primaryKey({autoIncrement: true}),
    transactionAmount: text('transactionAmount'),
    transactionDate: text("transactionDate"),
    transactionName: text("transactionName"),
    timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`).notNull(),
})

export const debts = sqliteTable('debts', {
    id: integer('id', {mode: "number"}).primaryKey({autoIncrement: true}),
    debtName: text("debtName"), 
    debtAmount: text('debtAmount'),
    interestRate: text("interestRate"),
    debtPeriod: text("debtPeriod"),
    timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`).notNull(),
})