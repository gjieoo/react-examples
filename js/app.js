const App=React.createClass({
    getInitialState:function () {
      return {
          isEditor:true
      }
    },
    displayEditor:function () {
      const isEditor=this.state.isEditor;
        this.setState({isEditor:!isEditor})
    },
   render:function(){
       const isEditor=this.state.isEditor;
       return <div>
           <button onClick={this.displayEditor}>{isEditor?'预览':'编辑'}</button>
           <div className={isEditor?'':"hidden"}>
               <Editor/>
           </div>
           <div className={isEditor?'hidden':""}>
               <Preview/>
           </div>

       </div>

   }
});

const Editor=React.createClass({
   render:function () {
       return <div>
           Editor
       </div>
   }
});
const Preview=React.createClass({
    render:function () {
        return <div>
            Preview
        </div>
    }
});
ReactDOM.render(<App/>,document.getElementById('content'));