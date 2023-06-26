const commandInput = document.querySelector('.commandField');
const output = document.querySelector('.output');
const outputContainer = document.querySelector('.command-output');
const commands = ["help", "clear", "connect", "contribute"];

const showAllAvailableCmds = (messageBox) => {
messageBox.innerHTML += "<br>available commands to use:";
commands.forEach((cmd) => {
  messageBox.innerHTML += `<br> → ${cmd}`;
});

messageBox.innerHTML += "<br>type some command </br>";
}


const clearTerminal = () => {
  outputContainer.innerHTML = '';
}


const openGitHubProfile = () => {
  window.open('https://github.com/gonzalote99');
}

const contributionLink = () => {
  window.open('https://github.com/gonzalote99?tab=repositories');
}

const executeCommand = (cmd, messageBox) => {
 switch(cmd) {
   case "help":
   showAllAvailableCmds(messageBox);
   break;
   case "clear":
   clearTerminal(messageBox);
   break;

   case "connect":
   openGitHubProfile();
   break;
   case "contribute":
   contributionLink();
   break;

 }
}


commandInput.addEventListener("keydown", (e) => {
    
  // get command from input box 
  const inputCommand = commandInput.value.trim();

  if(e.key === "Enter" && inputCommand !== '')
  {

      // create new element and append it on output 
      const createElement = output.cloneNode(true);
      const outputTextMessage = createElement.querySelector(".outputText");
      createElement.style.display = "block";
      outputTextMessage.textContent = inputCommand;

      // append the message 
      if(commands.includes(inputCommand))
          executeCommand(inputCommand, outputTextMessage);
      else
          outputTextMessage.innerHTML += "<br>Command not found. Type \'help\' for list of available commands.";
      
      // clear the input box and append the element 
      commandInput.value = '';

      if(inputCommand != "clear")
          outputContainer.append(createElement);
  }
});