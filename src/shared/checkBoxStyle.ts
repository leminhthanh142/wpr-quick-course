export const styledCheckbox = () => (
  ` .container {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 22px;
        height: 25px;
        width: 25px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
      }
      .container:hover input ~ .checkmark {
        background-color: #ccc;
      }
      .container input:checked ~ .checkmark {
        background-color: #f35921;
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      .container input:checked ~ .checkmark:after {
        display: block;
      }
      .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }`
);
