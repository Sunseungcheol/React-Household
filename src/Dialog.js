import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const DarkBkg = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.25rem;
  }

  div {
    margin-top: 10px;
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancle,
}) {
  if (!visible) return null;
  return (
    <DarkBkg>
      <DialogBlock>
        <h3>{title}</h3>
        <div>{children}</div>
        <ButtonGroup>
          <Button color="blue" onClick={onCancle}>
            {cancelText}
          </Button>
          <Button color="pink" onClick={onConfirm}>
            {confirmText}
          </Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBkg>
  );
}

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};
export default Dialog;
