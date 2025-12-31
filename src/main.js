import { ExpenseUI } from "./UI/expenseUI.js";
import { UserService } from "./services/userService.js";
import { ExpenseService } from "./services/expenseService.js";

class ExpenseApp {
  constructor() {
    this.userService = new UserService();
    this.expenseService = new ExpenseService(this.userService);
    this.ui = null;
  }

  init() {
    try {
      this.ui = new ExpenseUI(this.userService, this.expenseService);
      console.log("Splitter app initialized");
    } catch (err) {
      console.error("Failed to connect", err);
    }
  }
}

let expenseApp;

document.addEventListener("DOMContentLoaded", () => {
  expenseApp = new ExpenseApp();
  expenseApp.init();
});

window.addEventListener("load", () => {
  if (!expenseApp) {
    expenseApp = new ExpenseApp();
    expenseApp.init();
  }
});
