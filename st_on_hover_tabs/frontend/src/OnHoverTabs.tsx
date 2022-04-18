import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { style } from 'glamor';
import "./component.css"
import "./icons/icon.css"

interface State {
  label: string,
  icon: string
}

class OnHoverTabs extends StreamlitComponentBase<State> {

  public render = (): ReactNode => {

    const labelName:string[] = this.props.args["tabName"]
    const iconName:string[] = this.props.args["iconName"]
    const styles: any = this.props.args['styles'] || {}

    let data:any[] = [];
    iconName.forEach((v,i) => 
      data= [...data, {"id":i+1, "label": labelName[i], "icon":v}]
    )

    this.state = {icon:data[0].icon,
                  label:data[0].label}
   
    const results = data.map(({id, icon, label}) => (
                    <span className="tab-container" {...style(styles['tabOptionsStyle'])}>
                      <li className="tab"
                        {...style(styles['tabStyle'])}                                   
                        key={id}
                        onClick={() => this.setState(
                          prevState => ({icon:icon, label:label}),
                                        () => Streamlit.setComponentValue(label)
                      )}><i className="material-icons" {...style(styles['iconStyle'])}>{icon}</i><span className="labelName">{label}</span></li></span>
                    ))

    return (
  
      <div className="navtab" {...style(styles['navtab'])}> 
        <ul className="all-tabs-options">
        {results}
        </ul> 
      </div>
    )
  }
}   

  export default withStreamlitConnection(OnHoverTabs)
