import database from "../../../../infra/database.js";

async function status(request, responde) {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result.rows);
  responde.status(200).json({ chve: "teste" });
}

export default status;
