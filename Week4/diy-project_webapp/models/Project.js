const db = require("../database/db");

class Project {
  static async create(title, description, images, steps, userId) {
    const [result] = await db.execute(
      "INSERT INTO projects (title, description, images, steps, user_id) VALUES (?, ?, ?, ?, ?)",
      [title, description, JSON.stringify(images), JSON.stringify(steps), userId]
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute("SELECT * FROM projects");
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute("SELECT * FROM projects WHERE id = ?", [id]);
    return rows[0];
  }
}

module.exports = Project;