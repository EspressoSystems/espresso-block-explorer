import React from 'react';
import { EgressLink } from '../link/link';
import './external_link.css';

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ExternalLink represents a general link leading away from the Block Explorer.
 * In this case they will be used exclusively within the Footer of a page and
 * will link to many resources.
 */
const ExternalLink: React.FC<ExternalLinkProps> = (props) => (
  <EgressLink className="link--external" href={props.href} target="_blank">
    {props.children}
  </EgressLink>
);

export default ExternalLink;
