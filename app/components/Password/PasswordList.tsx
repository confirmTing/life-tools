import React from 'react';
import { Table } from 'antd';
import { Password } from '../../reducers/types';
import styles from './Password.css';

type PasswordListProps = {
  data: Password[];
};

function PasswordList({ data }: PasswordListProps) {
  const columns = [
    {
      title: '网站',
      dataIndex: 'website',
      key: 'website'
    },
    {
      title: '密码',
      dataIndex: 'psd',
      key: 'psd'
    }
  ];

  return (
    <div className={styles.list}>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}

export default PasswordList;
