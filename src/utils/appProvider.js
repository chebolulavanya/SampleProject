import React, { Component, createContext } from "react"
// custom loader component
import NetworkChecker from "./networkChecker"
const AppContext = React.createContext({})
export const AppConsumer = AppContext.Consumer
export class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isConnected:false,
    }
  }
  showError = () =>this.setState({isConnected:true})
  hideError = () =>this.setState({isConnected:false})
  render() {
    const {isConnected}=this.state
    const funcs = { 
      showNetworkError:this.showError,
      hideNetworkError:this.hideError 
    }
    return (
      <AppContext.Provider
        value={{...funcs}}>
        {this.props.children}
        {/* other global component  */}
       <NetworkChecker isConnected={isConnected} />
      </AppContext.Provider>
    )
  }
}