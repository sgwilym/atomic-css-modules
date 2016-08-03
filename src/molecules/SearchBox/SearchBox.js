import React from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

export default () =>
  <div>
    <Label labelTitle={'Search the site'}/>
    <Input placeholder={'Enter Keyword'}/>
    <Button
      onClick={console.log('Searching!')}
      label={'Search'}
    />
  </div>
