CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`transactionAmount` text,
	`transactionDate` text,
	`transactionName` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
