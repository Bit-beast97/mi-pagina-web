scripts
// Función para guardar la clave de la API de OpenAI
function setOpenAIKey() {
    const apiKey = document.getElementById("api-key").value;
    openai.apiKey = apiKey;
  }
  
  // Función para obtener la solicitud a la API de OpenAI y mostrar el resultado
  function getAIRequest() {
    // Obtiene el texto ingresado por el usuario
    const textInput = document.getElementById("text-input").value;
  
    // Realiza la solicitud a la API web de OpenAI
    const model = "text-davinci-002";
    const prompt = textInput;
    const temperature = 0.5;
    const maxTokens = 60;
    const completions = 1;
  
    openai.complete({
      engine: model,
      prompt: prompt,
      temperature: temperature,
      maxTokens: maxTokens,
      n: completions,
    }).then(function(result) {
      // Actualiza el HTML para mostrar la respuesta de la API
      document.getElementById("result").innerHTML = result.data.choices[0].text;
    }).catch(function(error) {
      console.log(error);
    });
  }