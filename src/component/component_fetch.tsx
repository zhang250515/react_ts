import React from "react";

const RootFetch: React.FC = () => {

  function testGet(): void {
    let url: string = 'http://hd215.api.yesapi.cn/?s=App.Table.FreeQuery&' +
      'model_name=user&logic=and&where=%5B%5B%22id%22%2C+%22%3D%22%2C+%221%22%5D%5D&page=1&' +
      'perpage=10&is_real_total=1&app_key=C0FB352A5A506D61291B06EB94FF54C6&sign=74D8722F15C97A928389E013E96184A8';
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json.data
      })
      .then(data => {
        console.log(data.list[0].user_name)
      });
  }

  function testPost() {
    let url: string = 'http://hd215.api.yesapi.cn/';
    let params: Object = {
      'app_key': 'C0FB352A5A506D61291B06EB94FF54C6',
      's': 'App.Common_Faker.Company',
      'total': 3,
      'sign': '953F857A278ADCDC700BB0CD4A0FBF26'
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => json.data.items)
      .then(objArray => {
        console.log(objArray)
      })
  }

  return (
    <div>
      <button onClick={() => testGet()}> GET!</button>
      <button onClick={() => testPost()}> POST! </button>
      <p> {} </p>
    </div>
  )
};

export default RootFetch;