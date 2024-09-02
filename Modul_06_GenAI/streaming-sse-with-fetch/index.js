const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (e) => {
  try {
    // Prevent the form from submitting
    e.preventDefault();
    // Get the values of the prompt and stream inputs
    const {
      prompt: { value: promptValue },
      stream: { checked: streamValue },
      submit,
    } = form.elements;
    // If the prompt value is empty, alert the user
    if (!promptValue) return alert('Please enter a prompt');
    resultsContainer.innerHTML = '';
    // Disable the submit button
    submit.disabled = true;
    submit.classList.add('bg-gray-500', 'hover:bg-gray-500', 'cursor-not-allowed');
    stream.disabled = true;
    //  Request
    const response = await fetch('http://localhost:5050/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'development', // Set the mode to development to not send the request to Open AI for now
        provider: 'open-ai',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        stream: streamValue,
        messages: [
          {
            role: 'system',
            content: 'You are a software developer student that only speaks in rhymes', // This is the system message, it will control the behavior of the chatbot
          },
          {
            role: 'user',
            content: promptValue, // This is the user message, it will be the prompt for the chatbot
          },
        ],
      }),
    });
    // Conditionally process the response depending on the value of `streamValue`
    if (streamValue) {
      // Process stream response
      // Get the responses stream
      const reader = response.body.getReader();
      // Create a new TextDecoder
      const decoder = new TextDecoder('utf-8');
      // Variable to store the data result
      let dataResult = '';
      // Create a new paragraph element before the loop
      const p = document.createElement('p');
      resultsContainer.appendChild(p);
      // Variable to check if the stream is done
      let isDone = false;
      // While the stream is not closed, i.e. done is false
      while (!isDone) {
        // Read the next chunk
        const result = await reader.read();
        // If the result is done, break out of the loop
        if (result.done) {
          isDone = true;
          break;
        }
        // Decode the result
        const chunk = decoder.decode(result.value, { stream: true });
        // Split lines by new line, you can get more than one line per chunk
        const lines = chunk.split('\n');
        // Loop through each line
        lines.forEach((line) => {
          // Check if the line starts with data:, that's how Open AI sends the data
          if (line.startsWith('data:')) {
            // Get the JSON string without the data: prefix
            const jsonStr = line.replace('data:', '');
            // Parse the JSON string
            const data = JSON.parse(jsonStr);
            // Get the content from the first choice
            const content = data.choices[0]?.delta?.content;
            // If there is content
            if (content) {
              dataResult += content;
              const md = marked.parse(dataResult);
              // Add the content to the paragraph element;
              p.innerHTML = md;
              Prism.highlightAll();
            }
          }
        });
      }
    } else {
      // Process response normally
      const dataResult = await response.json();
      // Output the response to the results container
      resultsContainer.innerHTML = `<p>${marked.parse(dataResult.message?.content)}</p>`;
      Prism.highlightAll();
    }
  } catch (error) {
    // If an error occurs, log it to the console
    console.error(error);
  } finally {
    // Enable the submit button
    submit.disabled = false;
    submit.classList.remove('bg-gray-500', 'hover:bg-gray-500', 'cursor-not-allowed');
    stream.disabled = false;
  }
});
