const { v4: uuidv4, v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTodo = async (event) => {
  const { todo } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  console.log("Received event:", JSON.stringify(event, null, 2));

  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  dynamodb.put({
    TableName: "TodoTable",
    Item: newTodo,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};

module.exports = {
  addTodo: addTodo,
};
