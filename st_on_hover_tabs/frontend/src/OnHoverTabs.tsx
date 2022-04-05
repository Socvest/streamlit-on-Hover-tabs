import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./component.css"
import "./icons/icon.css"

interface State {
  label: string,
  icon: string
}

class OnHoverTabs extends StreamlitComponentBase<State> {

  public render = (): ReactNode => {

    const labelName:string[] = this.props.args["name"]
    const iconName:string[] = this.props.args["iconName"]

    let data:any[] = [];
    iconName.forEach((v,i) => 
      data= [...data, {"id":i+1, "label": labelName[i], "icon":v}]
    )

    this.state = {icon:data[0].icon,
                  label:data[0].label}
   
    const res = data.map(({id, icon, label}) => (
                                  <li className="tab"
                                  key={id}
                                  onClick={() => this.setState(
                                    prevState => ({icon:icon, label:label}),
                                                    () => Streamlit.setComponentValue(label)
                                  )}><i className="material-icons">{icon}</i><span className="labelName">{label}</span></li>
                                ))

    const { theme } = this.props
    const styles: React.CSSProperties = {}

    return (
  
      <div className="navtab">
        <ul className="tab-options">
        {res}
        </ul> 
      </div>
    )
  }
}   

  export default withStreamlitConnection(OnHoverTabs)
