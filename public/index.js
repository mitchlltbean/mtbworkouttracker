function createWorkout() {
  $.post("/createworkouts", {
    title: $("#title").val().trim(),
    name: $("#name").val().trim(),
    type: $("#type").val().trim(),
    weight: $("#weight").val().trim(),
    sets: $("#sets").val().trim(),
    reps: $("#reps").val().trim(),
    duration: $("#dur").val().trim(),
  }).then(function (data) {
    console.log(data, "@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  });
}
