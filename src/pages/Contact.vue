<template>

<form class="generated-form"  method="GET" action="submit.php"  target="_self">
<fieldset>
  <legend> Contactez-moi </legend>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>
  <button>Submit</button>
</fieldset>
</form>

</template>
    
    <script>
        export default {
            name: 'ContactComponent'
        }
    
    </script>
    
    <style scoped>
    
    </style>