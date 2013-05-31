jquery-inputs-as-one
====================

Multiple input[type="text"] as one.

Usage
-----------------------------

    <div id="input_elements_wrapper">
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>

    <script type="text/javascript">
    jQuery('#input_elements_wrapper').inputsAsOne();
    </script>

Options
-----------------------------

    {
        wayback: true // jump prev input when backspace pressed in empty input.
    }
