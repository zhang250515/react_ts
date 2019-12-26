import React from "react";
import {Button} from 'antd';

const AntDemo01 : React.FC = () => {
  return(
    <div className={'AntDemo01'}>
      <Button type={'primary'}> AntDesign Button01 </Button>
      <Button> AntDesign default Button </Button>
      <Button type={'ghost'}> AntDesign ghost </Button>
      <Button type={'danger'}> AntDesign danger </Button>
      <Button type={'dashed'}> AntDesign dashed </Button>
      <br/>
      <br/>
      <Button type={'primary'} icon={'download'}> Download </Button>
      <br/>
      <br/>
      <Button type={'primary'} icon={'cloud'}> Download </Button>
      <br/>
      <br/>
      <Button type={'primary'} icon={'cloud-download'}> Download </Button>
      <br/>
      <br/>

    </div>
  )
};

export default AntDemo01;
