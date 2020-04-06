import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Input } from 'antd';
import styles from './Password.css';
import routes from '../../constants/routes';
import PasswordList from './PasswordList';
import { Password } from '../../reducers/types';
import { generatePasswordByName } from './utils';

type Data = {
  website: string;
  psd: string;
};

type Props = {
  addPassword: (data: Data) => void;
  passwordList: Password[];
};

export default function PasswordCenter(props: Props) {
  const { addPassword, passwordList } = props;
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const hideModal = useCallback(() => setVisible(false), []);
  const [name, setName] = useState('');

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleConfirm = useCallback(async () => {
    const values = await form.validateFields();
    addPassword(values as Data);
    setVisible(false);
  }, []);

  const validateMessages = {
    required: '${label} is required!'
  };

  const handleGeneratePsdBtnClick = useCallback(() => {
    const psd = generatePasswordByName(name);
    form.setFieldsValue({ psd });
  }, []);

  const suffix = (
    <Button size="small" type="primary" onClick={handleGeneratePsdBtnClick}>
      生成密码
    </Button>
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={styles['pd-lr-20']}>
        <Button
          className={styles.btnAdd}
          size="large"
          type="primary"
          onClick={() => setVisible(true)}
        >
          新增
        </Button>
      </div>

      <PasswordList data={passwordList} />

      <Modal
        title="Modal"
        visible={visible}
        destroyOnClose
        onCancel={hideModal}
        onOk={handleConfirm}
        okText="确认"
        cancelText="取消"
      >
        <Form
          form={form}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item name="website" label="网站" rules={[{ required: true }]}>
            <Input onChange={handleNameChange} />
          </Form.Item>
          <Form.Item name="psd" label="密码" rules={[{ required: true }]}>
            <Input suffix={suffix} readOnly />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
