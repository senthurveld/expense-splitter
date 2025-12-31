export class User {
  constructor(name) {
    if (!name || typeof name !== "string") {
      throw new Error("Username must be a non-empty string");
    }
    this.name = name.trim();
    this.id = this.generateId();
  }

  generateId() {
    return crypto.randomUUID();
  }
}
