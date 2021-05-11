import React from 'react'
import marked from 'marked';
import $ from 'jquery'
import MdSample from './md-sample'
import IconEnterFull from '../assets/svg/enter-full-screen'
import IconExitFull from '../assets/svg/exit-full-screen'

const sample=MdSample();

const handleTextarea=(e)=>
{
    setMardownText(e.target.value);    
}

const setMardownText=(text)=>
{
    $('#preview').html(marked(text,{breaks:true}))
}

class Editor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            fullScreen:false
        }
    }
    componentDidMount()
    {
        setMardownText(sample)
    }
    FullScreenCtrlEditor=()=>
    {
            const elem=$('#editor-container');
            elem.toggleClass('full-screen');
            if(elem.hasClass('full-screen'))
            {
                elem.css({'z-index':'999'})
                elem.animate({'width':'90vw','height':'90vh','top':'5vh','left':'5vw'});
                elem.find('#editor').animate({'height':'80vh'});
                this.setState({
                    fullScreen:true
                });
            }
            else
            {
                elem.animate({'width':'60vw','height':'220px','top':'20px','left':'20vw'})
                elem.find('#editor').animate({'height':'180px'},()=>{
                    elem.css({'z-index':'1'});         
                });
                this.setState({
                    fullScreen:false
                });
            }    
    }
    render()
    {        
        return(
            <div id="editor-container" className="editor-container">
                <div className="header-container">
                    <span>Markdown editor</span>
                    <span className="icon-one"  onClick={this.FullScreenCtrlEditor}>
                        {
                            this.state.fullScreen==false ?
                            <IconEnterFull/> :
                            <IconExitFull/>
                        }                        
                    </span>
                </div>
                <textarea id="editor" className="scroll" defaultValue={sample} onChange={handleTextarea}></textarea>            
            </div>
        );
    }
}
export default Editor