import { DOMHelpers } from "./DOMHelpers.js";
import { showSuccessToast, showErrorToast } from "../utils/toastUtil.js";
export class ExpenseUI {
  constructor(userService, expenseSerive) {
    this.userService = userService;
    this.expenseSerive = expenseSerive;

    this.initializeElements();
    this.bindEvents();
    this.initializeSelectBox();
  }

  // Initialize all the UI elements
  initializeElements() {
    this.elements = {
      addUserForm: DOMHelpers.getElementById("addUserForm"),
      userInput: DOMHelpers.getElementById("userInput"),
      addExpenseForm: DOMHelpers.getElementById("addExpenseForm"),
      expenseUserInput: DOMHelpers.getElementById("expenseUserInput"),
      expenseAmountInput: DOMHelpers.getElementById("expenseAmountInput"),
      expenseDescription: DOMHelpers.getElementById("expenseDescription"),
      paymentList: DOMHelpers.getElementById("payment-list"),
      simplifyBtn: DOMHelpers.getElementById("simplifyBtn"),
    };
  }

  // Bind Events
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });

    this.elements.addExpenseForm.addEventListener("submit", (e) => {
      this.handleAddExpense(e);
    });
    this.elements.simplifyBtn.addEventListener("click", () => {
      this.handleSimplify();
    });
  }

  // Initialize the Select Box
  initializeSelectBox() {
    const defaultOption = DOMHelpers.createOption("Select User", "");
    this.elements.expenseUserInput.add(defaultOption);
  }

  handleAddUser(e) {
    e.preventDefault();

    try {
      // Get value by services
      const name = this.elements.userInput.value.trim();
      if (!name) {
        throw new Error("User name is mandatory");
      }

      // Use service to add user
      const user = this.userService.addUser(name);

      // Add the user to the expense select box
      this.addUserToSelect(user.name);

      // Reset input after user add for next
      this.elements.addUserForm.reset();

      // Show Toast msg
      showSuccessToast(`User ${user.name} added`);
    } catch (error) {
      showErrorToast(error);
      console.error("Error adding user:", error);
    }
  }

  addUserToSelect(userName) {
    const option = DOMHelpers.createOption(userName, userName);
    this.elements.expenseUserInput.add(option);
  }
  handleAddExpense(e) {
    e.preventDefault();

    try {
      // Get value by services
      const paidBy = this.elements.expenseUserInput.value.trim();
      const amount = this.elements.expenseAmountInput.valueAsNumber;
      const description = this.elements.expenseDescription.value.trim();

      if (!paidBy) {
        throw new Error("Please select a user");
      }
      if (!amount || amount <= 0) {
        throw new Error("Please Enter an amount < 0");
      }

      // Use service to add expense
      const expense = this.expenseSerive.addExpense(
        paidBy,
        amount,
        description
      );

      // Render the expense
      this.renderExpense(expense);

      // Reset vaule after new entry
      this.elements.expenseAmountInput.value = "";
      this.elements.expenseDescription.value = "";

      // Show Toast msg
      showSuccessToast(`Expense ${amount} is added by ${paidBy}`);
    } catch (error) {
      showErrorToast(error);
      console.error("Error adding expense:", error);
    }
  }
  renderExpense(expense) {
    const text =
      expense.description !== "No description"
        ? `${expense.paidBy} paid ₹${expense.amount} for 
           ${expense.description}`
        : `${expense.paidBy} paid ₹${expense.amount}`;

    const listItem = DOMHelpers.createListItem(text, "expense-item");

    this.elements.paymentList.appendChild(listItem);
  }

  handleSimplify() {
    try {
      const results = this.expenseSerive.simplifyExpenses();
      this.displayResults = results;
    } catch (error) {
      showErrorToast(error);
      console.error("Error adding expense:", error);
    }
  }
  displayResults(results) {

  }
}
