import React from "react";
import { useState } from "react";
import { marked } from "marked";

const App = (props) => {
  const [input, setInput] = useState(`# heading element
## sub heading element
[link](https://www.google.com)
\`inline code\`
\`\`\`
code
block
\`\`\`
* list item
> blockquote
![JavaScript](https://img.icons8.com/?size=100&id=39853&format=png&color=000000 "JavaScript")
**bolded text**`);
  const body = document.querySelector('body');
  body.className = 'bg-dark';
  
  return (<div className="container">
      <div className="row text-center">
        <div className="col-sm-12">
          <Header title="Markdown Previewer" />
        </div>
      </div>
      
      <div className="row text-center">
        <div className="col-sm-12">
          <Editor input={input} setInput={setInput} />
        </div>
      </div>
      
      <div className="row">
        <div className="col-sm-12">
          <Output input={input} />
        </div>
      </div>
  </div>);
}

const Header = ({title}) => {
  return <p id="header" className="display-3">{title}</p>
}

const Editor = ({input, setInput}) => {
  return (<textarea placeholder="Enter your markdown here" class="bg-light p-3" onChange={(e) => setInput(e.target.value)} value={input} id="editor"></textarea>);
}

const Output = ({input}) => {
  const htmlString = marked.parse(input);
  return (<div dangerouslySetInnerHTML={{ __html: htmlString }} className="border bg-light p-3 mb-5" id="preview" />);
}

export default App;