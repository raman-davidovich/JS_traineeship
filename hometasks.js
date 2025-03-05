const tasks = [
  [
    {
      description: `Try to confuse others with an unusual "console.log" using non-obvious JS tricks =)<br />
    <br />
    Important: the complexity of an expression should not lie in its length.
    <br />
    <br />
    <img id="lesson1Task1DescriptionImage" class="image" />`,
      githubLink:
        "https://github.com/raman-davidovich/JS_traineeship/blob/main/solutions/lesson1Task1.js",
    },
    {
      description: `Transform a number into a binary form.<br />
      <br />
      Optionally:<br />
      *output the number by any method<br />
      *receive a number from user by any input method.`,
      githubLink:
        "https://github.com/raman-davidovich/JS_traineeship/blob/main/solutions/lesson1Task2.js",
    },
  ],
  [
    {
      description: `TODO: <br />
    Write a function add that will work like that:<br />
    add(1,2) // 3<br />
    add(1)(2) //3`,
      githubLink:
        "https://github.com/raman-davidovich/JS_traineeship/blob/main/solutions/lesson2Task1.js",
    },
    {
      description: `Write your own implementation of the built-in array function filter. Call the function myFilter and make it so that any array can use this function as a "native" one. It must take a callback function as parameters and an optional parameter as an object that will be used as
        <strong>this</strong> in internal calls to this callback function.<br />
      Ultimately, your myFilter implementation should work exactly like the built-in filter method. The callback function passed as parameter must also be called with the same paramenters as the original (element, index, array).`,
      githubLink:
        "https://github.com/raman-davidovich/JS_traineeship/blob/main/solutions/lesson2Task2.js",
    },
    {
      description: `It is necessary to reflash the global object a little.<br />
      Consider these three functions:<br />
      <br />
      <img id="lesson2Task2DescriptionImage" class="image"/>
      <br />
      <br />
      When calling alert(), the logic confirm(), prompt - alert(), confirm() - prompt() should work, feel free to use yourown order.<br />
      <br />
      *Additionally - try to do this as briefly as possible, in the least amount of steps. (By action we mean any operation - creating a variable, equating, calling a method)`,
      githubLink:
        "https://github.com/raman-davidovich/JS_traineeship/blob/main/solutions/lesson2Task3.js",
    },
  ],
];

export default tasks;
