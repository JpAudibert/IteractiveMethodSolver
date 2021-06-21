import React, { ReactPropTypes } from 'react';
import Header from '../../components/Header';

type JacobiProps = ReactPropTypes & {
  initialState: number;
};

const Jacobi2Variaveis: React.FC<JacobiProps> = ({
  initialState,
}: JacobiProps) => {
  return (
    <>
      <Header />
      <h2>Body</h2>
    </>
  );
};

export default Jacobi2Variaveis;
