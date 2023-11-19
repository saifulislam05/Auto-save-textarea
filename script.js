document.addEventListener("DOMContentLoaded", function () {
  const textAreaInput = document.getElementById("textAreaInput");

  const savedText = localStorage.getItem("autoSaveText");
  if (savedText) {
    textAreaInput.value = savedText;
  }


  textAreaInput.addEventListener("input", function () {
    localStorage.setItem("autoSaveText", textAreaInput.value);
  });
});
