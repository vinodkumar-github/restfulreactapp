import React from 'react'
import Additems from './Additems'
import { useState, useEffect } from 'react'
import apiResponse from './apiResponse'
import './Content.css'

function Content() {
    const [list, setList] = useState([]);
    const [erro, setErro] = useState(null);
    const[loading, setLoading] = useState(true);
    const API_URL = 'http://localhost:3500/items';
useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Not Receiving Data');
      const listItems = await response.json();
      setList(listItems);
      setErro(null);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

 fetchItems();

}, []);


    function handleList(el) {
      return  <React.Fragment key={el.id} >
            <li id= {el.id}>
                <div className='Contentlist'>
                    <input id="checkboxx" className='Contentlistcheckbox' type='checkbox' checked={el.checked} onChange={()=> {handleCheck(el)}}> 
                    </input>
                    <p className='Contentlisttitle'>{el.title}</p>
                    <button className='Contentlistbutton' onClick={()=>handleDelete(el)}>delete</button>
                </div>
            </li>

        </React.Fragment>
    }
   async  function handleDelete(el) {
      const delOptions = {
        method: 'DELETE'
      };
      const CUR_URL = `${API_URL}/${el.id}`;
      const result = await apiResponse(CUR_URL, delOptions);
      setErro(result);
        const uplist = list.filter((lis) =>
          el.id !== lis.id
        );
        
         setList(uplist);
      }
  async  function handleCheck(el) {
      const uplist = list.map((item) =>
        el.id === item.id ? { ...item, checked: !item.checked } : item
      );
      const upflist = list.filter((item) => el.id === item.id);
      upflist[0].checked = !upflist[0].checked ;
     
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({checked: upflist[0].checked}),
      
      };
      const CUR_URL = `${API_URL}/${el.id}`;
      const result = await apiResponse(CUR_URL, updateOptions);
      setErro(result);

      
      
     return setList(uplist);
     
    }
  
  return (
    <div className='Content'>
        
        <Additems API_URL = {API_URL} list ={list} setList={setList} erro= {erro} setErro={setErro}/>
      
        
     { loading? <p>Loading</p> : <ul className='ulists'> {list.map((lis) => handleList(lis))} </ul> }
     {!erro ? <p></p> : <p>{String(erro)}</p>}
    </div>
  )
}

export default Content