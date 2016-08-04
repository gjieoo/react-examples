const App=React.createClass({
    getInitialState:function () {
        return {
            isEditor:true,
            elements:[]
        }
    },
    displayEditor:function(){
        this.setState({isEditor:!this.state.isEditor})
    },
    addElement:function(element){
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements})
    },
    render:function(){
            const isEditor=this.state.isEditor;
            return <div>
                <button onClick={this.displayEditor}>{isEditor?'预览':'编辑'}</button>
                <div className={isEditor?"":"hidden"}>
                    <Editor elements={this.state.elements} onAdd={this.addElement} onDelete={this.deleteElement}/>
                </div>
                <div className={isEditor?"hidden":""}>
                    <Preview elements={this.state.elements}/>
                </div>

            </div>

    }
});
const Editor=React.createClass({
    render:function(){
        return <div>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            <Right onAdd={this.props.onAdd}/>
        </div>

    }
});
const Left=React.createClass({
    render:function(){
        const  elements=this.props.elements.map((element,index)=>{
            return(
                <div key={index}>
                    <input type={element}/>
                    <button>X</button>
                </div>
            )

        });

        return <div>
            {elements}
        </div>

    }
});
const Right=React.createClass({
    add:function(){
        const element=$("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render:function(){
        return <div>
            <input type="radio" name="element" value="text"/>文本框
            <input type="radio" name="element" value="date"/>日期
            <button onClick={this.add}>+</button>
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

ReactDOM.render(<App />, document.getElementById('content'));