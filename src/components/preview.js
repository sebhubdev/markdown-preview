import React from 'react'
import $ from 'jquery'
import IconEnterFull from '../assets/svg/enter-full-screen'
import IconExitFull from '../assets/svg/exit-full-screen'


class Preview extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            fullScreen:false
        }
    }
    FullScreenCtrlViewer=()=>
    {
        const elem=$('#preview-container');
        elem.toggleClass('full-screen');
        if(elem.hasClass('full-screen'))
        {
            elem.css({'z-index':'999'});
            elem.animate({'width':'90vw','height':'90vh','top':'5vh','left':'5vw'},300);
            this.setState({
                fullScreen:true
            });
        }
        else
        {
            elem.animate({'width':'80vw','height':'340px','top':'270px','left':'10vw'},300,()=>{
                elem.css({'z-index':'1'});
                this.setState({
                    fullScreen:false
                });
            });
        }    
    }
    render()
    {
        return(
            <div id="preview-container" className="preview-container">
                <div className="header-container">
                    <span>Preview</span>
                    <span className="icon-one" onClick={this.FullScreenCtrlViewer}>
                        {
                            this.state.fullScreen==false ?
                            <IconEnterFull/> :
                            <IconExitFull/>
                        }
                    </span>
                </div>
                <div id="preview" className="scroll"></div>
            </div>
        );
    }
}
export default Preview