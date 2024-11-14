<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();

    // Move the #target2 element from #left-well to #right-well
  $("#target2").appendTo("#right-well");
  });
</script>

