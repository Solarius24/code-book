import "./Header.css"
const Header = () => {
  return (
      <div className="header-container">
        <h1 className="header-title">CODE BOOK</h1>
        <hr></hr>
        <h4 className="header-subtitle">
          This is an interactive coding environment. You can write Javascript,
          see it executed, and write comprehensive documentation using markdown.
        </h4>
        <ul className="header-list">
          <li>
            <h5>Click any text cell to edit.</h5>
          </li>
          <li>
            <h5>
              The code in each code editor is all joined together into one file.
              If you define <strong className="header-show-function">a variable cell#1</strong>, you can refer to it in any
              following cell.
            </h5>
          </li>
          <li>
            <h5>
              You can show any React Component, string, number, or anything else
              by calling <strong className="header-show-function">show function</strong> . This is a function built into this
              environment. Call show multiple times to show multiple values.
            </h5>
          </li>
          <li>
            <h5>Re-order or delete cells using buttons on the top right.</h5>
          </li>
          <li>
            <h5>Add new cells by hovering on the divider between each cell.</h5>
          </li>
        </ul>
        <h4 className="header-subtitle">
          All of your changes get saved to the file you opened CODE BOOK with. So if
          you ran <strong className="header-show-function">npx cli-jsnote-sol serve test.js</strong> , all of the text and code you write
          will be saved to test.js file.
        </h4>
      </div>

  );
};

export default Header;
