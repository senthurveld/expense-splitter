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
      expenseUserInput: DOMHelpers.getElementById("expenseUserInput"),
    };
  }

  // Bind Events
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
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

      showSuccessToast(`User ${user.name} added`);
    } catch (error) {
      showErrorToast( error);
      console.error("Error adding user:", error);
    }
  }
  addUserToSelect(userName) {
    const option = DOMHelpers.createOption(userName, userName);
    this.elements.expenseUserInput.add(option);
  }
}
