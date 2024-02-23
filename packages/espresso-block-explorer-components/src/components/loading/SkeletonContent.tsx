import React from 'react';
import './skeleton_content.css';

export interface ContainerLoadingProps {}

const SkeletonContent: React.FC<ContainerLoadingProps> = (props) => {
  return <div className="skeleton-content" {...props} />;
};

export default SkeletonContent;
