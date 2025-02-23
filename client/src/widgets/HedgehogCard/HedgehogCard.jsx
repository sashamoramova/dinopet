import React from 'react';
import Button from '../../shared/ui/Button/Button';

export default function HedgehogCard({ hedgehog, setHedgehogs }) {
  function hedgehogDeleteHandler() {
    setHedgehogs((prev) => prev.filter((el) => el.id !== hedgehog.id));
  }
  return (
    <div>
      <p>{hedgehog.name}</p>
      <p>{hedgehog.needlesCount}</p>
      <Button color='red' onClick={hedgehogDeleteHandler}>
        <span>Удалить</span>
      </Button>
    </div>
  );
}
