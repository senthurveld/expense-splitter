import { Expense } from "../models/expense.js";
import { UserService } from "./userService.js";

export class ExpenseService {
  constructor(userService) {
    this.expense = [];
    this.userService = userService;
  }

  addExpense(paidBy, amounnt, description) {
    if (!this.userService.hasUser(paidBy)) {
      throw new Error("User not exists");
    }
    const expense = new Expense(paidBy, amounnt, description);
    this.expense.push(expense);
    return expense;
  }

  getAllExpenses() {
    return [...this.expense];
  }

  getExpensesByUser() {
    return this.expense.filter((expense) => expense.paidBy === userNmae);
  }

  claer() {
    this.expense = []
  }

  simplifyExpenses() {
    console.log("Simplifying Expenses", this.expense);
    
  }
  
}
