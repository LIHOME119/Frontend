import UserContext from '../contexts/user';
import React, {  useContext } from 'react';
import {status,json} from '/utilities/requestHandlers';
import SearchUser from './userSearch'
import ImageUpload from './ImageUpload'
import { Row, Col, Space } from 'antd';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Profile(props) {
		
  const user = useContext(UserContext);
				
   return (  
   <UserContext.Consumer>
       
      {({logout, user}) => (   
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Row>  <Col span={12}>   
       <div className="Profile">
      <table   rules="all" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <tr>
          <th align="left" style={{background:"#b0f6ff"}} >userID:  </th>
          <td style={{background:"#b0f6ff"}}>{user.id}</td> 
        </tr>
        <tr>
          <th align="left" style={{background:"#b0f6ff"}}>Username:   </th>
          <td style={{background:"#b0f6ff"}}>{user.username}</td>
        </tr>  
        <tr> 
          <th align="left" style={{background:"#b0f6ff"}}>Email:  </th> 
          <td style={{background:"#b0f6ff"}}>{user.email}</td>
        </tr> 
         <tr> 
         <th align="left" style={{background:"#b0f6ff"}}>About me:  </th>
         <td style={{background:"#b0f6ff"}}>{user.about}</td>
         </tr>  
        <tr> 
          <th align="left" style={{background:"#b0f6ff"}} >Avatar:  </th>
          <td style={{background:"#b0f6ff"}}><Avatar style={{ backgroundColor: '#000000' }} icon={<UserOutlined />} />
  {user.avatarurl}</td>
        </tr>    
         <tr> 
          <th align="left" style={{background:"#b0f6ff"}} >Role: </th>
         <td style={{background:"#b0f6ff"}}>{user.role}</td>
        </tr>                                                                          </table>
    </div></Col>
      <Col span={12}>
      { user.role=="admin"&& <SearchUser authbasic={ btoa(`${user.username}:${user.password}`)}/>}
       </Col></Row>
        
      <Col span={12}>       
      { user.role=="admin"&&  <ImageUpload />}</Col>
     </Space>
		 </>
      )}
</UserContext.Consumer> 
  )
     


}
export default Profile;







/**
 * Renders a <Home /> component to be the home page of the application.
 * @params props
 */
