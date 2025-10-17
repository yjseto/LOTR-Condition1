export async function generateImage(answers) {
  const prompt = `
    Create a beautiful, cinematic Lord of the Rings–inspired illustration based on the following reflections:
    ${Object.entries(answers)
      .map(([question, answer]) => `${question}: ${answer}`)
      .join("\n")}
    Style: detailed, cinematic.
  `;

        // Mock mode for local development
    if (import.meta.env.VITE_USE_MOCK === "true") {
    console.log("🧪 Mock mode active");
    return "https://placehold.co/600x400?text=Middle+Earth+Mock";
    }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },

    body: JSON.stringify({
      model: "gpt-image-1", // Best available model as of June 2024
      prompt,
      size: "1024x1024",
    }),
    
    // body: JSON.stringify({
    //   model: "dall-e-3", // Testing DALL·E 3 variant
    //   prompt,
    //   size: "1024x1024",
    // }),

  });

  const data = await response.json();
  console.log("🔍 OpenAI image response:", data);

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`);
  }

  const imageData = data?.data?.[0];
  if (!imageData) throw new Error("No image data returned");

  // 🪄 Handle both DALL·E 2 (url) and DALL·E 3 (b64_json)
  if (imageData.url) return imageData.url;
  if (imageData.b64_json)
    return `data:image/png;base64,${imageData.b64_json}`;

  throw new Error("No valid image URL or base64 found");
}

    
    
    
