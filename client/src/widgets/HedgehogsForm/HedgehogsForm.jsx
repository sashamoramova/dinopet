import React, { useState } from 'react';
import Button from '../../shared/ui/Button/Button';

export default function HedgehogsForm({ setHedgehogs, hedgehogs }) {
  const [inputName, setInputName] = useState('');
  const [inputNeedlesCount, setInputNeedlesCount] = useState('');

  function createHedgehogHandler() {
    const newHedgehogs = [...hedgehogs];
    newHedgehogs.push({
      id: hedgehogs.length + 1,
      name: inputName,
      needlesCount: inputNeedlesCount,
    });
    setHedgehogs(newHedgehogs);
    setInputName('');
    setInputNeedlesCount('');
  }

  return (
    <div>
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder='Имя ежиное'
      />
      <input
        value={inputNeedlesCount}
        onChange={(e) => setInputNeedlesCount(e.target.value)}
        placeholder='Количество иголок'
      />
      <Button onClick={createHedgehogHandler} text='Cъежить' />
    </div>
  );
}
