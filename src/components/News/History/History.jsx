import React from 'react';
import css from './History.module.css';
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader'


function History(props) {
  const items = props.state.list;
  const list = items.map((item, index)=>
    <TableRow name={item.name} dateCreate={item.dateCreate} datePublish={item.datePublish}/>
  );
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <TableHeader name="Название" dateCreate="Дата создания" datePublish="Дата публикации"/>
      </div>
      <div className={css.list}>
        {list}
      </div>
    </div>
  );
}

export default History;
