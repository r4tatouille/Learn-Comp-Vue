<script setup></script>

<template>
  <header>
    <h1 id="title">QuizVue</h1>
    <input type="text" id="search-input" />
  </header>
  <section id="quiz-container">
    <div class="card">
      <img
        src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3DPr"
        alt="Programming"
      />
      <div class="card-body">
        <h2>Programming</h2>
        <p>Questions</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  background-color: azure;
  border: none;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 20px;
}

.card-body h2 {
  font-weight: bold;
}
</style>
