const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const feedback = JSON.parse(event.body);
  const filePath = path.join(__dirname, "feedback.json");

  try {
    let feedbacks = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath);
      feedbacks = JSON.parse(fileContent);
    }

    feedbacks.push({
      id: Date.now(),
      name: feedback.name,
      email: feedback.email,
      message: feedback.message,
    });

    fs.writeFileSync(filePath, JSON.stringify(feedbacks));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Feedback submitted successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit feedback" }),
    };
  }
};
