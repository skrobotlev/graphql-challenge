import { makeAutoObservable } from "mobx";

export default class Store {
  private _dashData: object;
  private _scenarios: object;
  private _dialogs: object;
  private _diagData: object;

  constructor() {
    makeAutoObservable(this);

    this._dashData = {};
    this._scenarios = {};
    this._dialogs = {};
    this._diagData = [];
  }

  get dashData() {
    return this._dashData;
  }
  get scenarios() {
    return this._scenarios;
  }
  get diagData() {
    return this._diagData;
  }
  get dialogs() {
    return this._dialogs;
  }
  set dialogs(data) {
    this._dialogs = data;
  }
  set dashData(data) {
    this._dashData = data;
  }

  set diagData(data) {
    this._diagData = data;
  }

  set scenarios(val) {
    this._scenarios = val;
  }
}
