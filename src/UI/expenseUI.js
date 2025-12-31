import { DOMHelpers } from "./DOMHelpers.js";

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
    const defaultOption = 
    this.elements.expenseUserInput.addEventListener(defaultOption)
  }

  handleAddUser(e) {
    e.preventDefault();

    try {
      // Get value by services
      const name = this.elements.userInput.value.trim();
      if (!name) {
        throw new Error("User name is mad=ndatory");
      }

      // Use service to add user
      const user = this.userService.addUser(name);

      // Reset input after user add for next
      this.elements.addUserForm.reset();

      console.log(`User ${user.name} added`);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
}
