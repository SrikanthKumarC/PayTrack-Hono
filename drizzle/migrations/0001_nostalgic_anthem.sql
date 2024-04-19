CREATE TABLE `debts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`debtName` text,
	`debtAmount` text,
	`interestRate` text,
	`debtPeriod` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
