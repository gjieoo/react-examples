const App=React.createClass({
    getInitialState:function () {
      return {
          isEditor:true
      }
    },
    displayEditor:function () {
        this.setState({isEditor:!this.state.isEditor});
    },
    render:function(){
        const isEditor=this.state.isEditor;
        return <div>
            <button onClick={this.displayEditor}>{isEditor?'preview':'editor'}</button>
            <div className={isEditor?'':'hidden'}>
                <Editor/>
            </div>
            <div className={isEditor?'hidden':''}>
                <Preview/>
            </div>

        </div>

    }
});

const Editor=React.createClass({
   render:function(){
      return <div>
          <Left/>
          <Right/>
      </div>
   }
});
const Left=React.createClass({
    render:function(){
        return <div>
            Left
        </div>
    }
});
const Right=React.createClass({
    render:function(){
        return <div>
            Right
        </div>
    }
});
const Preview=React.createClass({
    render:function(){
        return <div>
            Preview
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));