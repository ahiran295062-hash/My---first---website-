async function askAI() {
  const response = await fetch(
    "https://himanshu-ai-worker.ahiran-295062.workers.dev",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Hello AI"
      })
    }
  );

  const data = await response.json();
  console.log(data.reply);
}

askAI();
