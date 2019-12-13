import React, { Fragment,userState,Component } from 'react'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import List from './components/List/List'
import axios from 'axios'
import './App.css'
class App extends Component {
  state = {
    userData:[
      {
        "id": "bkjx",
        "name": "本科教学",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "yjsggk",
        "name": "研究生公共课",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "yjsdj",
        "name": "研究生代教",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "jyqz",
        "name": "教研，科学权重量",
        "value": 3.2,
        "more": "more"
      },
      {
        "id": "jyyxl",
        "name": "教研影响力",
        "value": 5.5,
        "more": "more"
      },
      {
        "id": "bkjxkcjk",
        "name": "本科教学课程监考",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "xmgl",
        "name": "项目管理",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "gzcyd",
        "name": "工作参与度",
        "value": 11.25,
        "more": "more"
      },
      {
        "id": "yjjzglgw",
        "name": "院级兼职管理岗位",
        "value": 11.25,
        "more": "more"
      }
    ],
    loading:false,
    test:'aaa'
  }
  async componentDidMount(){
    this.setState({loading:true})
     const res = await axios.get('https://www.easy-mock.com/mock/5c6badcb65169d1422574ece/example/userData')
     console.log(res.data.data)
     this.setState({userData:res.data.data,loading:false})
  }
  render() {
      return (
          <Fragment>
            <Navbar type='Demo'/>
            <div className="container">
              <List userData={this.state.userData} test={this.state.test}/>
            </div>
          </Fragment>
      )
  }
}

export default App
