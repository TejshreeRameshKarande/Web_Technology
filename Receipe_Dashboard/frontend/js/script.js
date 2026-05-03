// 🔎 Search from index.html
function searchRecipe() {
  let recipe = document.getElementById("searchBox").value;
  window.location.href = `recipe.html?name=${recipe}`;
}

// 📥 Get recipe name from URL
function getRecipeName() {
  const params = new URLSearchParams(window.location.search);
  return params.get("name");
}

// 🤖 Load AI Recipe (UPDATED with language support)
async function loadRecipe() {
  let recipe = getRecipeName();

  // 🌍 Get selected languages (Select2)
  let languages = $('#language').val();
  let language = languages ? languages.join(", ") : "English";

  document.getElementById("title").innerText = recipe;
  document.getElementById("content").innerText = "Loading recipe...";

  try {
    let res = await fetch("http://localhost:3000/getRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        recipe: recipe,
        language: language   // ✅ sending language
      })
    });

    let data = await res.json();

    // ✅ Safe check
    if (data && data.recipe) {
      document.getElementById("content").innerText = data.recipe;
    } else {
      document.getElementById("content").innerText = "❌ No recipe found";
    }

  } catch (error) {
    document.getElementById("content").innerText = "❌ Failed to load recipe";
  }
}

// 🎥 YouTube button
function openYouTube() {
  let recipe = getRecipeName();
  window.open(`http://localhost:3000/youtube?query=${recipe}`, "_blank");
}

// ⬅ Back button
function goBack() {
  window.history.back();
}

// 🚀 Run when recipe page loads
if (window.location.pathname.includes("recipe.html")) {
  loadRecipe();
}

// 🌍 Initialize Select2 (searchable dropdown)
$(document).ready(function() {
  $('#language').select2({
    placeholder: "🌍 Select or search language",
    tags: true
  });
});