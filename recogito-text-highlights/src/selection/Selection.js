import WebAnnotation from '../annotation/WebAnnotation';

/**
 * An "annotation in draft mode". Really the same
 * data structure, but as a separate class so we can
 * tell things apart properly.
 */
export default class Selection {

  constructor(selectors) {
    this._stub = {
      type: 'Selection',
      body: [{
        type: 'TextualBody'
      }],
      target: {
        selector: selectors
      }
    }
  }

  get type() {
    return this._stub.type;
  }

  get body() {
    return this._stub.body;
  }

  get target() {
    return this._stub.target;
  }

  /** For consistency with WebAnnotation **/
  get bodies() {
    return this._stub.body;
  }

  selector = type => {
    return this._stub.target.selector.find(t => t.type === type);
  }

  /** Shorthand for the 'exact' field of the TextQuoteSelector **/
  get quote() {
    return this.selector('TextQuoteSelector').exact;
  }

  /*******************************************/ 
  /* Selection-specific properties & methods */
  /*******************************************/

  get isSelection() {
    return true;
  }

  toAnnotation = () => {
    const a = Object.assign({}, this._stub, {
      '@context': 'http://www.w3.org/ns/anno.jsonld',
      'type': 'Annotation'
    });

    return new WebAnnotation(a);
  }

}