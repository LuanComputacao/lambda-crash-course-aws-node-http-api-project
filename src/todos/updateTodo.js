const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const updateTodo = async (event) => {
  const { id } = event.pathParameters;

  const { completed } = event.body;

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    await dynamodb
      .update({
        TableName: "TodoTable",
        id: { id },
        UpdateExpression: "set completed = :completed",
        ExpressionAttributeValues: {
          ":completed": completed,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      msg: "Todo Updated",
    }),
  };
};

module.exports = {
  updateTodo: middy(updateTodo).use(httpJsonBodyParser()),
};
