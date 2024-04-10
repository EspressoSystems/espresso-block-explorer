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

  constructor(namespace: number, name: string, site: URL, blockExplorer: URL) {
    this.namespace = namespace;
    this.name = name;
    this.site = site;
    this.blockExplorer = blockExplorer;
  }
}
