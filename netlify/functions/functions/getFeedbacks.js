const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const filePath = path.join(__dirname, "feedback.json");

  try {
    if (!fs.existsSync(filePath)) {
      return {
        statusCode: 200,
        body: JSON.stringify([]),
      };
    }

    const fileContent = fs.readFileSync(filePath);
    const feedbacks = JSON.parse(fileContent);

    return {
      statusCode: 200,
      body: JSON.stringify(feedbacks),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch feedbacks" }),
    };
  }
};
