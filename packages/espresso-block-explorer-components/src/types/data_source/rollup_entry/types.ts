import React from 'react';

/**
 * RollUpEntry represents data for a RollUp that we will need in order
 * associate basic roll up identifying information (such as a namespace)
 * with the visual elements of the Roll up, such as their name, webiste URLs,
 * and logo.
 */
export class RollUpEntry {
  public readonly namespace: number;
  public readonly name: string;
  public readonly site: URL;
  public readonly blockExplorer: URL;

  public readonly logo24: React.FC;
  public readonly logo32: React.FC;
  public readonly logo40: React.FC;

  constructor(
    namespace: number,
    name: string,
    site: URL,
    blockExplorer: URL,
    logo24: React.FC,
    logo32: React.FC,
    logo40: React.FC,
  ) {
    this.namespace = namespace;
    this.name = name;
    this.site = site;
    this.blockExplorer = blockExplorer;
    this.logo24 = logo24;
    this.logo32 = logo32;
    this.logo40 = logo40;
  }
}
