import React from 'react';
import css from './History.module.css';
import Row from '../Row/Row'
import HeaderRow from '../HeaderRow/HeaderRow'


function History() {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <HeaderRow name="Название" dateCreate="Дата создания" datePublish="Дата публикации"/>
      </div>
      <div className={css.list}>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
        <Row name="new" dateCreate="11.11.1111" datePublish="11.11.1111"/>
      </div>
    </div>
  );
}

export default History;
