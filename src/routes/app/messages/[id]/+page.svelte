<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
  
    export let data

    let messages = writable([
      { text: 'Hello!', sender: 'user' },
      { text: 'Hi there!', sender: 'bot' },
      { text: 'How can I help you today?', sender: 'bot' }
    ]);
  
    let newMessage = '';
    // @ts-ignore
    let ws;
  
    onMount(() => {
        const ws = new WebSocket("wss://social-media.alwaysdata.net/ws");

        ws.onopen = function (event) {
            const obj = {
                type: "JOIN",
                content: "test",
                chatId: 1,
                token: data.cookie
            }
            ws.send(JSON.stringify(obj));
        }

        ws.onmessage = function (event) {
            console.log(event.data);
        }

    });
  </script>
  
  <style>
    /* Add Tailwind CSS classes here */
    /* For example: */
    .chat-container {
      max-width: 400px;
      margin: auto;
      padding: 20px;
    }
  
    .message-bubble {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
    }
  
    .user-message {
      background-color: #3490dc;
      color: white;
      align-self: flex-end;
    }
  
    .bot-message {
      background-color: #38a169;
      color: white;
      align-self: flex-start;
    }
  </style>
  
  <div class="chat-container">
    {#each $messages as { text, sender }}
      {#if sender === 'user'}
        <div class="message-bubble user-message">{text}</div>
      {:else if sender === 'bot'}
        <div class="message-bubble bot-message">{text}</div>
      {/if}
    {/each}
  
    <div class="flex mt-4">
      <input
        type="text"
        class="flex-1 p-2 border rounded-l"
        bind:value={newMessage}
        placeholder="Type a message..."
      />
      <button class="bg-blue-500 text-white p-2 rounded-r" on:click={() => {}}>
        Send
      </button>
    </div>
  </div>