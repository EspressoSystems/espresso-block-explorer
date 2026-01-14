import React from 'react';
import './container_loading.css';

export interface ContainerLoadingProps {}

const ContainerLoading: React.FC<ContainerLoadingProps> = (props) => {
  return <div className="container-loading" {...props} />;
};

export default ContainerLoading;
